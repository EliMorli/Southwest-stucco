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
    <section id="gallery" className="bg-ink py-32 px-[5vw]">
      <header className="mb-12 text-center">
        <span className="eyebrow">{gallery.eyebrow}</span>
        <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.95] text-white mt-3">
          {gallery.title.line1}
          <br />
          <span className="text-red">{gallery.title.line2Red}</span>
        </h2>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 max-w-[1400px] mx-auto">
        {items.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIdx(idx)}
            className="group relative cursor-pointer overflow-hidden aspect-[3/4] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-red"
            aria-label={`Open larger image of ${item.label}`}
          >
            <Image
              src={item.src}
              alt={`${item.label} — Southwest Stucco finished project in Los Angeles`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover brightness-90 group-hover:brightness-105 group-hover:scale-[1.07] transition-all duration-500"
            />
            <div
              aria-hidden
              className="absolute inset-0 flex flex-col items-center justify-end p-4"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
              }}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white/90 text-[0.78rem] font-bold tracking-wide">
                {item.label}
              </span>
            </div>
            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-white bg-red/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-2xl font-light"
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
          className="fixed inset-0 z-[9000] bg-black/95 flex items-center justify-center p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-6 text-white text-3xl opacity-60 hover:opacity-100 hover:text-red transition"
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
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-red/80 hover:bg-red text-white text-2xl flex items-center justify-center"
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
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-red/80 hover:bg-red text-white text-2xl flex items-center justify-center"
            aria-label="Next image"
          >
            ›
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-bold tracking-wider uppercase">
            {items[openIdx].label}
          </p>
        </div>
      )}
    </section>
  );
}
