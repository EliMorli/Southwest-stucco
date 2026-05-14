'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { gallery } from '@/lib/content';

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const items = gallery.items;

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIdx, close, next, prev]);

  return (
    <section
      id="gallery"
      className="py-32 px-[5vw] relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #1F1611 0%, #2A1F18 30%, #382920 100%)',
      }}
    >
      {/* Faint horizon glow */}
      <div
        aria-hidden
        className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(212,165,116,0.10) 0%, transparent 60%)',
        }}
      />
      <header className="grid md:grid-cols-[auto_1fr_auto] items-end gap-x-6 mb-14 max-w-[1400px] mx-auto relative">
        <div className="section-num">06</div>
        <div>
          <span className="font-condensed text-[0.7rem] tracking-[0.42em] uppercase text-sun/80 font-bold block mb-2">
            {gallery.eyebrow}
          </span>
          <div className="thin-rule max-w-[260px]" aria-hidden />
          <h2 className="mt-4">
            <span className="block font-display text-[clamp(2.4rem,5.2vw,5.2rem)] leading-[0.92] text-bone">
              Real projects.
            </span>
            <span className="block font-serif italic text-[clamp(2.4rem,5.4vw,5.4rem)] leading-[0.92] -mt-1 text-sun">
              real results.
            </span>
          </h2>
        </div>
        <span className="hidden md:inline-block font-serif italic text-sun/70 text-[1.05rem]">
          A selection.
        </span>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-[1400px] mx-auto relative">
        {items.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIdx(idx)}
            className="group relative cursor-pointer overflow-hidden aspect-[3/4] rounded-lg focus:outline-none focus:ring-2 focus:ring-clay ring-1 ring-sun/10"
            aria-label={`Open larger image of ${item.label}`}
          >
            <Image
              src={item.src}
              alt={`${item.label} — Southwest Stucco finished project in Los Angeles`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover brightness-95 saturate-[1.05] group-hover:brightness-110 group-hover:scale-[1.07] transition-all duration-500"
            />
            <div
              aria-hidden
              className="absolute inset-0 flex flex-col items-start justify-end p-4"
              style={{
                background:
                  'linear-gradient(to top, rgba(31,22,17,0.78) 0%, rgba(31,22,17,0.15) 38%, transparent 60%)',
              }}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-bone text-[0.78rem] font-bold tracking-[0.18em] uppercase">
                {item.label}
              </span>
            </div>
            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-bone bg-terracotta/85 text-bone flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-2xl font-light shadow-[0_8px_22px_rgba(0,0,0,0.5)]"
            >
              +
            </span>
          </button>
        ))}
      </div>

      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[9000] bg-mesa/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-6 text-bone text-3xl opacity-70 hover:opacity-100 hover:text-clay transition"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-terracotta/85 hover:bg-clay text-bone text-2xl flex items-center justify-center shadow-lg"
            aria-label="Previous image"
          >
            ‹
          </button>
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-[90vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[openIdx].src}
              alt={items[openIdx].label}
              fill
              sizes="90vw"
              className="object-contain rounded"
              priority
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-terracotta/85 hover:bg-clay text-bone text-2xl flex items-center justify-center shadow-lg"
            aria-label="Next image"
          >
            ›
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sun/80 text-sm font-bold tracking-[0.22em] uppercase">
            {items[openIdx].label}
          </p>
        </div>
      )}
    </section>
  );
}
