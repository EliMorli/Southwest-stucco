import { PageHero } from './PageHero';
import type { Crumb } from './Breadcrumbs';

export function LegalPage({
  title,
  eyebrow,
  crumbs,
  updated,
  children,
}: {
  title: string;
  eyebrow: string;
  crumbs: Crumb[];
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} crumbs={crumbs} sub={`Last updated ${updated}.`} />
      <section className="bg-mesa-fade py-16 px-[5vw]">
        <article className="max-w-[760px] mx-auto text-bone/82 leading-[1.85] [&_h2]:font-display [&_h2]:text-bone [&_h2]:text-[1.6rem] [&_h2]:tracking-wide [&_h2]:mt-12 [&_h2]:mb-3 [&_h3]:text-bone [&_h3]:font-bold [&_h3]:text-base [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_li]:mb-1.5 [&_strong]:text-bone [&_a]:text-clay [&_a]:underline [&_a:hover]:text-sun">
          {children}
        </article>
      </section>
    </>
  );
}
