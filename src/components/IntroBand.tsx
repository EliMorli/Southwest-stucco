import { introBand } from '@/lib/content';

export function IntroBand() {
  return (
    <section className="plaster-bg relative py-14 md:py-20 px-[5vw]">
      <div className="max-w-[1300px] mx-auto">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 lg:gap-y-0 list-none m-0 p-0 lg:divide-x lg:divide-adobe/15"
          aria-label="Why customers choose us"
        >
          {introBand.map((item, i) => (
            <li
              key={item.label}
              className="flex items-start gap-5 lg:px-8 first:lg:pl-0 last:lg:pr-0 sm:border-b sm:border-adobe/10 sm:pb-8 lg:border-b-0 lg:pb-0 sm:[&:nth-child(n+3)]:border-b-0 sm:[&:nth-child(n+3)]:pb-0"
            >
              {/* Editorial italic-serif numeral */}
              <div className="flex flex-col items-center pt-1">
                <span
                  aria-hidden
                  className="font-serif italic text-terracotta text-[2.4rem] leading-none"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  aria-hidden
                  className="w-px h-8 bg-gradient-to-b from-terracotta/40 to-transparent mt-2"
                />
              </div>

              <div className="flex-1 min-w-0">
                <span className="font-condensed text-[0.62rem] tracking-[0.32em] uppercase font-bold text-terracotta block mb-1.5">
                  {`Reason ${String(i + 1).padStart(2, '0')}`}
                </span>
                <h3 className="font-display text-[1.55rem] tracking-wide text-mesa leading-[1.05] mb-1.5">
                  {item.label}
                </h3>
                <p className="font-serif italic text-mesa/70 text-[1rem] leading-[1.45] m-0">
                  {item.sub}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Adobe brick stripe at the bottom edge */}
      <div aria-hidden className="adobe-stripe h-[6px] absolute bottom-0 inset-x-0 opacity-95" />
    </section>
  );
}
