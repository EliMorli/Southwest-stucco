import { introBand } from '@/lib/content';

export function IntroBand() {
  return (
    <section className="bg-warm py-16 px-[5vw] flex items-center justify-center gap-16 flex-wrap">
      {introBand.map((item, i) => (
        <div key={item.label} className="flex items-center gap-4 text-text">
          <span className="text-[2.2rem]" aria-hidden>
            {item.icon}
          </span>
          <div>
            <div className="font-extrabold text-base text-[#1a1a1a]">{item.label}</div>
            <div className="text-[0.82rem] text-[#666] font-semibold mt-0.5">{item.sub}</div>
          </div>
          {i < introBand.length - 1 && (
            <span aria-hidden className="hidden md:block w-px h-[50px] bg-black/[0.12] ml-12" />
          )}
        </div>
      ))}
    </section>
  );
}
