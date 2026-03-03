import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type SiteShellProps = Readonly<{
  children: React.ReactNode;
}>;

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
        <div className="absolute left-[-7rem] top-36 rotate-[-8deg] opacity-15 blur-[0.5px]">
          <Image
            src="/hero-vehicle.svg"
            alt=""
            width={320}
            height={180}
            className="h-auto w-72"
          />
        </div>
        <div className="absolute right-[-6rem] top-[28rem] rotate-[6deg] opacity-10 blur-[0.5px]">
          <Image
            src="/shop-shelf.svg"
            alt=""
            width={320}
            height={180}
            className="h-auto w-80"
          />
        </div>
        <div className="absolute left-[-5rem] bottom-52 rotate-[8deg] opacity-10 blur-[0.5px]">
          <Image
            src="/about-warehouse.svg"
            alt=""
            width={300}
            height={170}
            className="h-auto w-72"
          />
        </div>
        <div className="absolute right-[-5rem] bottom-24 rotate-[-6deg] opacity-15 blur-[0.5px]">
          <Image
            src="/contact-delivery.svg"
            alt=""
            width={280}
            height={160}
            className="h-auto w-64"
          />
        </div>
      </div>
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <Link
            href="/"
            className="text-center text-base font-black uppercase tracking-[0.2em] text-brand-800 sm:text-lg md:text-left"
          >
            Fs Auto Supply
          </Link>
          <nav className="grid w-full grid-cols-2 gap-2 rounded-3xl border border-slate-200 bg-white p-2 shadow-sm sm:flex sm:flex-wrap sm:items-center sm:justify-center md:w-auto md:justify-end md:rounded-full">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-w-[88px] rounded-full px-4 py-2 text-center text-sm font-semibold text-slate-700 transition duration-200 hover:bg-brand-50 hover:text-brand-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="relative z-10">{children}</div>
      <footer className="border-t border-slate-200/80 bg-white/90">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">Fs Auto Supply</p>
            <p className="max-w-xl">
              Dependable automotive parts supply for service-ready orders, fast quotes,
              and consistent support.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-brand-200 px-5 py-3 font-semibold text-brand-800 transition duration-200 hover:border-brand-400 hover:bg-brand-50 md:w-auto"
          >
            Contact the parts desk
          </Link>
        </div>
      </footer>
    </div>
  );
}
