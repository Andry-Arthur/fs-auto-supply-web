import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui";

const products = [
  {
    name: "Fleet Brake Service Kit",
    detail: "Pads, rotors, hardware, and fluid bundle for reliable scheduled maintenance.",
    image:
      "https://images.pexels.com/photos/7564863/pexels-photo-7564863.jpeg?cs=srgb&dl=pexels-cottonbro-7564863.jpg&fm=jpg",
  },
  {
    name: "High-Flow Intake Filters",
    detail: "Workshop-friendly replacement filters for routine service intervals.",
    image:
      "https://images.pexels.com/photos/7568413/pexels-photo-7568413.jpeg?cs=srgb&dl=pexels-cottonbro-7568413.jpg&fm=jpg",
  },
  {
    name: "LED Road Visibility Pack",
    detail: "Bulbs and support accessories for improved nighttime coverage.",
    image:
      "https://images.unsplash.com/photo-1764406102144-f0a4450a85b5?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  },
  {
    name: "Suspension Refresh Bundle",
    detail: "Core front-end parts assembled for quick quoting and ordering.",
    image:
      "https://images.pexels.com/photos/32391493/pexels-photo-32391493.jpeg?cs=srgb&dl=pexels-bulat369-1243575272-32391493.jpg&fm=jpg",
  },
];

const shopBanner =
  "https://images.pexels.com/photos/32391493/pexels-photo-32391493.jpeg?cs=srgb&dl=pexels-bulat369-1243575272-32391493.jpg&fm=jpg";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse FS Auto Supply product categories including brake kits, filters, lighting, and suspension parts for service-ready automotive orders.",
};

export default function ShopPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 md:gap-10 md:px-10 md:py-10">
      <SectionHeading
        title="Shop"
        copy="A clean catalog view for FS Auto Supply with service-ready inventory highlights and straightforward browsing."
      />
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-card">
        <Image
          src={shopBanner}
          alt="Mechanic working in an auto repair shop"
          width={1200}
          height={520}
          className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 md:h-80"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.name}
            className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card sm:p-7"
          >
            <div className="mb-5 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-3">
              <Image
                src={product.image}
                alt={`${product.name} product photo`}
                width={720}
                height={420}
                className="h-48 w-full rounded-xl object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-slate">{product.name}</h2>
            <p className="mt-3 leading-7 text-slate-600">{product.detail}</p>
            <span className="mt-5 inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800">
              Ready to quote
            </span>
          </article>
        ))}
      </div>
    </main>
  );
}
