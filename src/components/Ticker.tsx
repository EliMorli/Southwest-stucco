import { ticker } from '@/lib/content';

export function Ticker() {
  // Duplicate for seamless loop
  const items = [...ticker, ...ticker];
  return (
    <div
      className="overflow-hidden py-[0.7rem] relative"
      aria-hidden
      style={{
        background:
          'linear-gradient(90deg, #8C3A1E 0%, #C2562B 30%, #E07B4A 50%, #C2562B 70%, #8C3A1E 100%)',
        borderTop: '1px solid rgba(212,165,116,0.35)',
        borderBottom: '1px solid rgba(31,22,17,0.4)',
      }}
    >
      <div className="inline-flex animate-tick whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-condensed text-[0.78rem] font-bold tracking-[0.3em] uppercase text-bone px-10"
          >
            {item}
            <span className="text-sun/70 ml-10">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
