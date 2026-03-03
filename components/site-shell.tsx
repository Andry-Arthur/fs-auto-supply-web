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
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10">
          <Link
            href="/"
            className="text-center text-base font-black uppercase tracking-[0.2em] text-brand-800 sm:text-lg md:text-left"
          >
            Fs Auto Supply
          </Link>
          <nav className="flex w-full flex-wrap items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white p-2 shadow-sm md:w-auto md:justify-end md:rounded-full">
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
      {children}
      <footer className="border-t border-slate-200/80 bg-white/85">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">Fs Auto Supply</p>
            <p>Dependable automotive parts supply for service-ready orders and fast quotes.</p>
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
