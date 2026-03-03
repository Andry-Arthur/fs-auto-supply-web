import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DecorativeCard, SectionHeading } from "@/components/ui";

const featuredCategories = [
  {
    name: "Brake kits",
    image:
      "https://images.pexels.com/photos/7564863/pexels-photo-7564863.jpeg?cs=srgb&dl=pexels-cottonbro-7564863.jpg&fm=jpg",
  },
  {
    name: "Filters",
    image:
      "https://images.pexels.com/photos/7568413/pexels-photo-7568413.jpeg?cs=srgb&dl=pexels-cottonbro-7568413.jpg&fm=jpg",
  },
  {
    name: "Suspension parts",
    image:
      "https://images.pexels.com/photos/32391493/pexels-photo-32391493.jpeg?cs=srgb&dl=pexels-bulat369-1243575272-32391493.jpg&fm=jpg",
  },
  {
    name: "Lighting",
    image:
      "https://images.unsplash.com/photo-1764406102144-f0a4450a85b5?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  },
];

const heroImage =
  "https://images.pexels.com/photos/7564863/pexels-photo-7564863.jpeg?cs=srgb&dl=pexels-cottonbro-7564863.jpg&fm=jpg";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore FS Auto Supply for dependable automotive parts, service-ready inventory, and fast quote support for shops, fleets, and daily drivers.",
};

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-6 sm:px-6 sm:py-8 md:gap-16 md:px-10 md:py-10">
      <section className="grid gap-8 rounded-[2rem] bg-white/90 p-5 shadow-card backdrop-blur sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800">
            Ready for launch
          </span>
          <div className="space-y-4">
            <h1 className="max-w-xl text-3xl font-black tracking-tight text-slate sm:text-4xl md:text-5xl">
              Reliable parts supply for shops, fleets, and daily drivers.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              FS Auto Supply is set up as a clean, fast storefront with clear
              navigation, static-friendly content, and a production-safe build
              path for Vercel.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/shop"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-brand-800 sm:w-auto"
            >
              Browse inventory
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition duration-200 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-800 sm:w-auto"
            >
              Request a quote
            </Link>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-brand-100 bg-brand-50/70 p-2">
            <Image
              src={heroImage}
              alt="Mechanic working under an open vehicle hood"
              width={960}
              height={540}
              className="h-56 w-full rounded-[1.25rem] object-cover sm:h-72 md:h-80"
              priority
            />
          </div>
        </div>
        <DecorativeCard
          eyebrow="Coverage"
          title="Parts that keep vehicles moving"
          copy="Battery, brake, filtration, lighting, and maintenance essentials presented with clean photography and strong branded framing."
          accent="Operational tonight"
        />
      </section>

      <section className="space-y-8">
        <SectionHeading
          title="Top categories"
          copy="Focused product areas presented with stable visual blocks that keep the storefront clean and dependable."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredCategories.map((category, index) => (
            <article
              key={category.name}
              className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1"
            >
              <div className="mb-5 overflow-hidden rounded-2xl border border-brand-100 bg-brand-50 p-3">
                <Image
                  src={category.image}
                  alt={`${category.name} service photo`}
                  width={720}
                  height={420}
                  className="h-40 w-full rounded-xl object-cover"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                0{index + 1}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate">{category.name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Clear category presentation built for quick browsing and easy
                expansion as FS Auto Supply adds more inventory.
              </p>
              <Link
                href="/shop"
                className="mt-5 inline-flex text-sm font-semibold text-brand-800 transition duration-200 hover:text-brand-600"
              >
                Explore products
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
