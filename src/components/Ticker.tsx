import { ticker } from '@/lib/content';

export function Ticker() {
  // Duplicate for seamless loop
  const items = [...ticker, ...ticker];
  return (
    <div className="bg-red overflow-hidden py-[0.65rem]" aria-hidden>
      <div className="inline-flex animate-tick whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-condensed text-[0.76rem] font-bold tracking-[0.28em] uppercase text-white px-10"
          >
            {item}
            <span className="opacity-40 ml-10">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
