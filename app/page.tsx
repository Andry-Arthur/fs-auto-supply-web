import Image from "next/image";
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
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-8 md:gap-20 md:px-10 md:py-10">
      <section className="grid gap-8 rounded-[2rem] bg-white/85 p-6 shadow-card backdrop-blur sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800">
            Ready for launch
          </span>
          <div className="space-y-4">
            <h1 className="max-w-xl text-3xl font-black tracking-tight text-slate sm:text-4xl md:text-5xl">
              Reliable parts supply for shops, fleets, and daily drivers.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Fs Auto Supply is set up as a clean, fast storefront with clear
              navigation, static-friendly content, and a production-safe build
              path for Vercel.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-brand-800"
            >
              Browse inventory
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition duration-200 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-800"
            >
              Request a quote
            </Link>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-brand-100 bg-brand-50/70 p-2">
            <Image
              src="/hero-vehicle.svg"
              alt="Illustration of a service truck and auto parts"
              width={960}
              height={540}
              className="h-auto w-full rounded-[1.25rem]"
              priority
            />
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
          copy="Focused product areas presented with stable visual blocks that keep the storefront clean and dependable."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredCategories.map((category, index) => (
            <article
              key={category}
              className="rounded-3xl bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1"
            >
              <div className="mb-5 overflow-hidden rounded-2xl border border-brand-100 bg-brand-50 p-3">
                <Image
                  src="/category-grid.svg"
                  alt="Illustrated automotive parts display"
                  width={720}
                  height={420}
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                0{index + 1}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate">{category}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Clear category presentation built for quick browsing and easy
                expansion as Fs Auto Supply adds more inventory.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
