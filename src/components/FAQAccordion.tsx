'use client';

import { useState } from 'react';
import type { FAQ } from '@/lib/faqs';

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-sun/10 border border-sun/10 rounded-2xl bg-mesa-100/40 backdrop-blur-sm overflow-hidden">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full text-left flex items-center justify-between gap-4 px-5 sm:px-7 py-5 hover:bg-terracotta/[0.06] transition-colors"
            >
              <span className="font-bold text-bone text-[1.02rem] leading-snug">
                {f.q}
              </span>
              <span
                aria-hidden
                className={`flex-shrink-0 w-7 h-7 rounded-full border border-sun/40 text-sun flex items-center justify-center text-lg font-light transition-transform ${
                  isOpen ? 'rotate-45 bg-terracotta/20' : ''
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-5 sm:px-7 pb-6 -mt-1 text-bone/70 leading-[1.75] text-[0.95rem] max-w-[760px]">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
