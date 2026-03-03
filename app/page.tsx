import Link from "next/link";
import { DecorativeCard, SectionHeading } from "@/components/ui";

const featuredCategories = [
  "Brake kits",
  "Filters",
  "Suspension parts",
  "Lighting",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-10 md:px-10">
      <section className="grid gap-8 rounded-[2rem] bg-white/85 p-8 shadow-card backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800">
            Ready for same-day launch
          </span>
          <div className="space-y-4">
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate sm:text-5xl">
              Reliable parts supply for shops, fleets, and daily drivers.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Fs Auto Supply is set up as a clean, fast storefront with clear
              navigation, static-friendly content, and a production-safe build
              path for Vercel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition hover:bg-brand-800"
            >
              Browse inventory
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-brand-400 hover:text-brand-800"
            >
              Request a quote
            </Link>
          </div>
        </div>
        <DecorativeCard
          eyebrow="Coverage"
          title="Parts that keep vehicles moving"
          copy="Battery, brake, filtration, lighting, and maintenance essentials presented without external image dependencies."
          accent="Operational tonight"
        />
      </section>

      <section className="space-y-8">
        <SectionHeading
          title="Top categories"
          copy="Focused product areas with placeholder visuals that will not fail during build or runtime."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredCategories.map((category, index) => (
            <article
              key={category}
              className="rounded-3xl bg-white p-6 shadow-card transition hover:-translate-y-1"
            >
              <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-brand-200 via-white to-amber-100" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                0{index + 1}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate">{category}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Structured placeholder content that can be replaced with real
                inventory later without touching route wiring.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
