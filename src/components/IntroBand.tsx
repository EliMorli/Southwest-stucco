import { introBand } from '@/lib/content';

export function IntroBand() {
  return (
    <section className="sand-divider py-16 px-[5vw] relative">
      <div className="flex items-center justify-center gap-14 flex-wrap max-w-[1200px] mx-auto">
        {introBand.map((item, i) => (
          <div key={item.label} className="flex items-center gap-4 text-text">
            <span
              aria-hidden
              className="flex items-center justify-center w-[58px] h-[58px] rounded-full bg-bone border border-terracotta/25 shadow-[0_4px_14px_-6px_rgba(140,58,30,0.35)] text-[1.7rem]"
            >
              {item.icon}
            </span>
            <div>
              <div className="font-extrabold text-base text-mesa">{item.label}</div>
              <div className="text-[0.82rem] text-mesa/65 font-semibold mt-0.5">{item.sub}</div>
            </div>
            {i < introBand.length - 1 && (
              <span
                aria-hidden
                className="hidden md:block w-px h-[50px] ml-10"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 0%, rgba(140,58,30,0.25) 50%, transparent 100%)',
                }}
              />
            )}
          </div>
        ))}
      </div>
      {/* Adobe brick stripe at the bottom edge */}
      <div aria-hidden className="adobe-stripe h-[6px] absolute bottom-0 inset-x-0 opacity-90" />
    </section>
  );
}
