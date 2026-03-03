import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui";

const contactImage =
  "https://images.pexels.com/photos/7568413/pexels-photo-7568413.jpeg?cs=srgb&dl=pexels-cottonbro-7568413.jpg&fm=jpg";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FS Auto Supply for inventory checks, quote requests, and support for service-ready automotive parts orders.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 md:gap-10 md:px-10 md:py-10">
      <SectionHeading
        title="Contact"
        copy="Reach FS Auto Supply for quotes, inventory checks, and parts support with a simple, launch-ready contact experience."
      />
      <section className="grid items-start gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-brand-800 p-6 text-white shadow-card sm:p-8">
          <h2 className="text-2xl font-bold">Talk to the parts desk</h2>
          <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src={contactImage}
              alt="Mechanic checking spare parts on a workbench"
              width={720}
              height={420}
              className="h-52 w-full rounded-2xl object-cover sm:h-56"
            />
          </div>
          <p className="mt-4 leading-8 text-brand-100">
            FS Auto Supply is ready to help with part availability, order
            questions, and quote requests for routine service needs.
          </p>
          <div className="mt-8 space-y-3 text-sm font-medium text-brand-100">
            <p>Phone: (669) 249-0188</p>
            <p>Email: sales@fsautosupply.example</p>
            <p>Hours: Mon-Fri, 7:00 AM to 6:00 PM</p>
          </div>
          <Link
            href="/shop"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-brand-800 transition duration-200 hover:bg-brand-100 sm:w-auto"
          >
            View inventory
          </Link>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8">
          <form className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Name</span>
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                type="text"
                name="name"
                placeholder="Alex Rivera"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                type="email"
                name="email"
                placeholder="alex@example.com"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Message</span>
              <textarea
                className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                name="message"
                placeholder="Tell us what parts you need."
              />
            </label>
            <button
              type="button"
              className="w-full rounded-full bg-slate px-6 py-3 font-semibold text-white transition duration-200 hover:bg-slate-800 sm:w-auto"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
