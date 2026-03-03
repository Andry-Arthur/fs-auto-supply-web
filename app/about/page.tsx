import Image from "next/image";
import { SectionHeading } from "@/components/ui";

const pillars = [
  "Fast, static-first storefront that deploys cleanly on Vercel.",
  "Simple route structure that is easy to extend with real product data.",
  "No external assets required for initial launch, reducing avoidable runtime failures.",
];

const aboutImage =
  "https://images.unsplash.com/photo-1764406102144-f0a4450a85b5?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-8 md:gap-10 md:px-10 md:py-10">
      <SectionHeading
        title="About Fs Auto Supply"
        copy="Fs Auto Supply is positioned as a dependable source for service-ready parts, clear communication, and fast ordering."
      />
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-card">
        <Image
          src={aboutImage}
          alt="Auto supply warehouse exterior"
          width={1100}
          height={520}
          className="h-64 w-full rounded-[1.5rem] object-cover sm:h-72"
        />
      </div>
      <section className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8 md:p-10">
        <p className="text-base leading-8 text-slate-700 sm:text-lg">
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
