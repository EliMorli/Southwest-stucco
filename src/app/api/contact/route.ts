import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  address?: string;
  message?: string;
  // honeypot
  website?: string;
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!),
  );

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot — if filled, silently accept and drop.
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || '').trim().slice(0, 200);
  const email = (body.email || '').trim().slice(0, 200);
  const phone = (body.phone || '').trim().slice(0, 50);
  const service = (body.service || '').trim().slice(0, 100);
  const address = (body.address || '').trim().slice(0, 300);
  const message = (body.message || '').trim().slice(0, 5000);

  if (!name || (!email && !phone) || !message) {
    return NextResponse.json(
      { error: 'Please provide your name, a way to contact you, and a message.' },
      { status: 400 },
    );
  }
  if (email && !isEmail(email)) {
    return NextResponse.json({ error: 'Email address looks invalid.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!apiKey) {
    // Build still works locally without a key; submissions just won't send.
    console.warn('[contact] RESEND_API_KEY not set — skipping email send.');
    return NextResponse.json({ ok: true, note: 'Email not configured.' });
  }

  const resend = new Resend(apiKey);

  const subject = `New estimate request — ${name}${service ? ` (${service})` : ''}`;
  const text = [
    `New contact submission from ${siteConfig.url}`,
    '',
    `Name:    ${name}`,
    `Email:   ${email || '—'}`,
    `Phone:   ${phone || '—'}`,
    `Service: ${service || '—'}`,
    `Address: ${address || '—'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <h2 style="margin:0 0 12px;font-family:system-ui,sans-serif">New estimate request</h2>
    <p style="margin:0 0 18px;color:#555;font-family:system-ui,sans-serif">
      Submitted via <a href="${siteConfig.url}">${siteConfig.url}</a>
    </p>
    <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 14px 4px 0;color:#777">Name</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 14px 4px 0;color:#777">Email</td><td>${escapeHtml(email || '—')}</td></tr>
      <tr><td style="padding:4px 14px 4px 0;color:#777">Phone</td><td>${escapeHtml(phone || '—')}</td></tr>
      <tr><td style="padding:4px 14px 4px 0;color:#777">Service</td><td>${escapeHtml(service || '—')}</td></tr>
      <tr><td style="padding:4px 14px 4px 0;color:#777">Address</td><td>${escapeHtml(address || '—')}</td></tr>
    </table>
    <h3 style="margin:22px 0 6px;font-family:system-ui,sans-serif">Message</h3>
    <p style="white-space:pre-wrap;font-family:system-ui,sans-serif;font-size:14px;line-height:1.6">${escapeHtml(message)}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email || undefined,
      subject,
      text,
      html,
    });
    if (error) {
      console.error('[contact] Resend error:', error);
      return NextResponse.json({ error: 'Failed to send. Please call us instead.' }, { status: 502 });
    }
  } catch (err) {
    console.error('[contact] Send threw:', err);
    return NextResponse.json({ error: 'Failed to send. Please call us instead.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
