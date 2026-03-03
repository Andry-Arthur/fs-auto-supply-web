import Image from "next/image";
import { SectionHeading } from "@/components/ui";

const products = [
  {
    name: "Fleet Brake Service Kit",
    detail: "Pads, rotors, hardware, and fluid bundle for reliable scheduled maintenance.",
  },
  {
    name: "High-Flow Intake Filters",
    detail: "Workshop-friendly replacement filters for routine service intervals.",
  },
  {
    name: "LED Road Visibility Pack",
    detail: "Bulbs and support accessories for improved nighttime coverage.",
  },
  {
    name: "Suspension Refresh Bundle",
    detail: "Core front-end parts assembled for quick quoting and ordering.",
  },
];

export default function ShopPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 md:gap-10 md:px-10 md:py-10">
      <SectionHeading
        title="Shop"
        copy="A clean catalog view for Fs Auto Supply with service-ready inventory highlights and straightforward browsing."
      />
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-card">
        <Image
          src="/shop-shelf.svg"
          alt="Illustration of stocked shelves with automotive parts"
          width={1200}
          height={520}
          className="h-auto w-full rounded-[1.5rem]"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.name}
            className="rounded-3xl bg-white p-6 shadow-card sm:p-7"
          >
            <div className="mb-5 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-3">
              <Image
                src="/category-grid.svg"
                alt="Graphic of automotive parts assortment"
                width={720}
                height={420}
                className="h-auto w-full rounded-xl"
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
