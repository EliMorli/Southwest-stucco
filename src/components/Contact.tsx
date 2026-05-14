'use client';

import { useState } from 'react';
import { contact } from '@/lib/content';

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
    // Combine first + last name for server payload
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
      form.reset();
    } catch {
      setErrorMsg('Network error. Please call us instead.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-ink-50 py-32 px-[5vw] grid md:grid-cols-2 gap-20">
      <div>
        <span className="eyebrow">{contact.eyebrow}</span>
        <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.95] text-white mt-3 mb-6">
          {contact.title.line1}
          <br />
          {contact.title.line2}
        </h2>
        <p className="text-base italic text-white/45 leading-[1.85] mb-10">{contact.desc}</p>

        <dl className="space-y-0">
          {contact.info.map((i) => (
            <div
              key={i.label}
              className="flex gap-4 items-start py-5 border-b border-white/[0.05]"
            >
              <span className="text-lg text-red flex-shrink-0 mt-0.5" aria-hidden>
                {i.icon}
              </span>
              <div>
                <dt className="font-condensed text-[0.62rem] tracking-[0.28em] uppercase text-white/30 mb-1">
                  {i.label}
                </dt>
                <dd className="m-0 text-base text-white font-semibold leading-[1.5] whitespace-pre-line">
                  {i.href ? (
                    <a className="hover:text-red transition-colors no-underline" href={i.href}>
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

      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 md:p-10 self-start">
        <h3 className="font-display text-[2rem] tracking-wide text-white mb-1">
          {contact.form.title}
        </h3>
        <p className="text-sm text-white/40 mb-8 italic">{contact.form.sub}</p>

        <form onSubmit={onSubmit} noValidate>
          {/* Honeypot — bots fill this, humans don't see it */}
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
            className="w-full bg-red text-white py-4 rounded-full font-extrabold text-sm tracking-wider hover:bg-red-dark hover:-translate-y-px transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(204,27,27,0.3)] mt-2"
          >
            {status === 'submitting' ? 'Sending…' : contact.form.submitLabel}
          </button>

          {status === 'success' && (
            <div className="mt-4 bg-red/10 border border-red rounded-lg p-4 text-center text-white font-bold">
              {contact.form.successMsg}
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 bg-red/10 border border-red rounded-lg p-4 text-center text-white font-bold">
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
    <div className="mb-3 [&_input]:w-full [&_select]:w-full [&_textarea]:w-full [&_input]:bg-white/5 [&_select]:bg-white/5 [&_textarea]:bg-white/5 [&_input]:border [&_select]:border [&_textarea]:border [&_input]:border-white/10 [&_select]:border-white/10 [&_textarea]:border-white/10 [&_input]:rounded-lg [&_select]:rounded-lg [&_textarea]:rounded-lg [&_input]:text-white [&_select]:text-white [&_textarea]:text-white [&_input]:px-4 [&_select]:px-4 [&_textarea]:px-4 [&_input]:py-3 [&_select]:py-3 [&_textarea]:py-3 [&_input]:outline-none [&_select]:outline-none [&_textarea]:outline-none [&_input:focus]:border-red [&_select:focus]:border-red [&_textarea:focus]:border-red [&_textarea]:min-h-[100px] [&_textarea]:resize-y [&_input::placeholder]:text-white/20 [&_textarea::placeholder]:text-white/20">
      <label
        htmlFor={id}
        className="block text-[0.75rem] font-bold text-white/40 mb-1.5 tracking-wide"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
