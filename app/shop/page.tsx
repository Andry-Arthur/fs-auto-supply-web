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
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 md:px-10">
      <SectionHeading
        title="Shop"
        copy="A stable placeholder catalog that renders without remote APIs, environment variables, or external media."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.name} className="rounded-3xl bg-white p-7 shadow-card">
            <div className="mb-5 h-48 rounded-2xl bg-gradient-to-br from-slate-900 via-brand-700 to-brand-300" />
            <h2 className="text-2xl font-bold text-slate">{product.name}</h2>
            <p className="mt-3 leading-7 text-slate-600">{product.detail}</p>
            <span className="mt-5 inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800">
              In-stock placeholder
            </span>
          </article>
        ))}
      </div>
    </main>
  );
}
