import { SectionHeading } from "@/components/ui";

const pillars = [
  "Fast, static-first storefront that deploys cleanly on Vercel.",
  "Simple route structure that is easy to extend with real product data.",
  "No external assets required for initial launch, reducing avoidable runtime failures.",
];

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10 md:px-10">
      <SectionHeading
        title="About Fs Auto Supply"
        copy="This starter positions the business with a clear story and a dependable first deployment path."
      />
      <section className="rounded-[2rem] bg-white p-8 shadow-card md:p-10">
        <p className="text-lg leading-8 text-slate-700">
          Fs Auto Supply is presented as a dependable parts source focused on
          service-ready inventory, straightforward purchasing, and a clean
          digital presence that can be expanded after launch.
        </p>
        <div className="mt-8 grid gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700"
            >
              {pillar}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
