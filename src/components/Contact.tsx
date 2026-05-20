'use client';

import { useState } from 'react';
import { contact } from '@/lib/content';
import { track } from '@/lib/analytics';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    setErrorMsg('');

    const fd = new FormData(form);
    const firstName = (fd.get('firstName') as string) || '';
    const lastName = (fd.get('lastName') as string) || '';
    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      phone: fd.get('phone') || '',
      email: fd.get('email') || '',
      service: fd.get('service') || '',
      address: fd.get('address') || '',
      message: fd.get('message') || '',
      website: fd.get('website') || '', // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please call us instead.');
        setStatus('error');
        return;
      }
      setStatus('success');
      track('form_submit', {
        label: 'contact_form',
        service: typeof payload.service === 'string' ? payload.service : '',
      });
      form.reset();
    } catch {
      setErrorMsg('Network error. Please call us instead.');
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      className="py-32 px-[5vw] grid md:grid-cols-2 gap-20 relative overflow-hidden bg-mesa-fade"
    >
      <div
        aria-hidden
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(194,86,43,0.10) 0%, transparent 60%)',
        }}
      />
      <div className="relative">
        <span className="eyebrow">{contact.eyebrow}</span>
        <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.95] text-bone mt-3 mb-6">
          {contact.title.line1}
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #E07B4A 0%, #D4A574 100%)',
            }}
          >
            {contact.title.line2}
          </span>
        </h2>
        <p className="text-base italic text-bone/55 leading-[1.85] mb-10">{contact.desc}</p>

        <dl className="space-y-0">
          {contact.info.map((i) => (
            <div
              key={i.label}
              className="flex gap-4 items-start py-5 border-b border-sun/12"
            >
              <span
                aria-hidden
                className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta/15 border border-terracotta/30 text-lg flex-shrink-0"
              >
                {i.icon}
              </span>
              <div>
                <dt className="font-condensed text-[0.62rem] tracking-[0.32em] uppercase text-sun/75 mb-1">
                  {i.label}
                </dt>
                <dd className="m-0 text-base text-bone font-semibold leading-[1.5] whitespace-pre-line">
                  {i.href ? (
                    <a className="hover:text-clay transition-colors no-underline" href={i.href}>
                      {i.value}
                    </a>
                  ) : (
                    i.value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative bg-mesa-100/70 border border-sun/15 rounded-2xl p-8 md:p-10 self-start backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]">
        {/* Corner sun */}
        <div
          aria-hidden
          className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none opacity-80"
          style={{
            background:
              'radial-gradient(circle, rgba(212,165,116,0.45) 0%, transparent 70%)',
          }}
        />
        <h3 className="font-display text-[2.1rem] tracking-wide text-bone mb-1 relative">
          {contact.form.title}
        </h3>
        <p className="text-sm text-sun/80 mb-8 italic relative">{contact.form.sub}</p>

        <form onSubmit={onSubmit} noValidate className="relative">
          <div className="hidden" aria-hidden>
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <Field id="firstName" label="First Name *">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="John"
                required
              />
            </Field>
            <Field id="lastName" label="Last Name *">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Smith"
                required
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-0">
            <Field id="phone" label="Phone *">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(818) 000-0000"
                required
              />
            </Field>
            <Field id="email" label="Email">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
              />
            </Field>
          </div>
          <Field id="service" label="What Do You Need?">
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>
                Select a service...
              </option>
              {contact.form.services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
          <Field id="address" label="Project Address">
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="street-address"
              placeholder="Street, City, CA"
            />
          </Field>
          <Field id="message" label="Tell Us About Your Project">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="A little detail helps us give you a more accurate estimate..."
              required
            />
          </Field>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-gradient-to-b from-clay to-terracotta hover:from-terracotta hover:to-adobe text-bone py-4 rounded-full font-extrabold text-sm tracking-[0.08em] hover:-translate-y-px transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_8px_24px_rgba(194,86,43,0.4)] mt-2"
          >
            {status === 'submitting' ? 'Sending…' : contact.form.submitLabel}
          </button>

          {status === 'success' && (
            <div className="mt-4 bg-sage/20 border border-sage/50 rounded-lg p-4 text-center text-bone font-bold">
              {contact.form.successMsg}
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 bg-terracotta/15 border border-terracotta rounded-lg p-4 text-center text-bone font-bold">
              {errorMsg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3 [&_input]:w-full [&_select]:w-full [&_textarea]:w-full [&_input]:bg-mesa/60 [&_select]:bg-mesa/60 [&_textarea]:bg-mesa/60 [&_input]:border [&_select]:border [&_textarea]:border [&_input]:border-sun/15 [&_select]:border-sun/15 [&_textarea]:border-sun/15 [&_input]:rounded-lg [&_select]:rounded-lg [&_textarea]:rounded-lg [&_input]:text-bone [&_select]:text-bone [&_textarea]:text-bone [&_input]:px-4 [&_select]:px-4 [&_textarea]:px-4 [&_input]:py-3 [&_select]:py-3 [&_textarea]:py-3 [&_input]:outline-none [&_select]:outline-none [&_textarea]:outline-none [&_input:focus]:border-clay [&_select:focus]:border-clay [&_textarea:focus]:border-clay [&_textarea]:min-h-[100px] [&_textarea]:resize-y [&_input::placeholder]:text-bone/55 [&_textarea::placeholder]:text-bone/55 [&_input]:transition-colors [&_select]:transition-colors [&_textarea]:transition-colors">
      <label
        htmlFor={id}
        className="block text-[0.72rem] font-bold text-sun/75 mb-1.5 tracking-[0.12em] uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
