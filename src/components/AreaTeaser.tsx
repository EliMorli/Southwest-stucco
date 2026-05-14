import Link from 'next/link';
import { serviceAreas } from '@/lib/areas';

export function AreaTeaser() {
  return (
    <section className="bg-sand-fade py-24 px-[5vw] relative overflow-hidden">
      <div aria-hidden className="adobe-stripe h-[5px] absolute top-0 inset-x-0 opacity-90" />
      <div className="max-w-[1200px] mx-auto relative">
        <header className="text-center mb-12">
          <span className="eyebrow">Where We Work</span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95] text-mesa mt-3">
            Calabasas Born.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #8C3A1E 0%, #C2562B 60%, #E07B4A 100%)',
              }}
            >
              All of LA Served.
            </span>
          </h2>
          <p className="text-mesa/65 mt-4 max-w-[620px] mx-auto leading-[1.7]">
            Headquartered in Calabasas, we crew up daily for projects across the West Valley,
            Conejo Valley, Westside, and the broader Los Angeles basin.
          </p>
        </header>

        <ul className="list-none m-0 p-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {serviceAreas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/service-areas/${a.slug}`}
                className="block bg-bone border border-terracotta/15 rounded-xl px-4 py-3 text-mesa font-bold no-underline hover:border-terracotta hover:text-terracotta transition-colors shadow-[0_2px_0_rgba(140,58,30,0.05)]"
              >
                <span className="block text-sm">{a.city}</span>
                <span className="block text-[0.72rem] font-semibold text-mesa/55 mt-0.5">
                  {a.zips[0]} · {a.drivingMinutes === 0 ? 'HQ' : `${a.drivingMinutes} min`}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <Link href="/service-areas" className="btn-red">View Service Area Map</Link>
        </div>
      </div>
    </section>
  );
}
