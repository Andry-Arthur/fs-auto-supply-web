import Link from "next/link";
import { SectionHeading } from "@/components/ui";

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10 md:px-10">
      <SectionHeading
        title="Contact"
        copy="Static contact details and a launch-safe inquiry form layout with no backend dependency."
      />
      <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-brand-800 p-8 text-white shadow-card">
          <h2 className="text-2xl font-bold">Talk to the parts desk</h2>
          <p className="mt-4 leading-8 text-brand-100">
            This is a placeholder contact block ready to be swapped with real
            business details after deployment.
          </p>
          <div className="mt-8 space-y-3 text-sm font-medium text-brand-100">
            <p>Phone: (555) 010-2026</p>
            <p>Email: sales@fsautosupply.example</p>
            <p>Hours: Mon-Fri, 7:00 AM to 6:00 PM</p>
          </div>
          <Link
            href="/shop"
            className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-brand-800"
          >
            View inventory
          </Link>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-card">
          <form className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Name</span>
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
                type="text"
                name="name"
                placeholder="Alex Rivera"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
                type="email"
                name="email"
                placeholder="alex@example.com"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Message</span>
              <textarea
                className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
                name="message"
                placeholder="Tell us what parts you need."
              />
            </label>
            <button
              type="button"
              className="rounded-full bg-slate px-6 py-3 font-semibold text-white"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
