type SectionHeadingProps = {
  title: string;
  copy: string;
};

export function SectionHeading({ title, copy }: SectionHeadingProps) {
  return (
    <div className="space-y-3 text-center md:text-left">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Fs Auto Supply</p>
      <h1 className="text-3xl font-black tracking-tight text-slate sm:text-4xl md:text-5xl">{title}</h1>
      <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 md:mx-0">
        {copy}
      </p>
    </div>
  );
}

type DecorativeCardProps = {
  eyebrow: string;
  title: string;
  copy: string;
  accent: string;
};

export function DecorativeCard({
  eyebrow,
  title,
  copy,
  accent,
}: DecorativeCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-slate p-7 text-white shadow-card sm:p-8">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-400/20" />
      <div className="absolute bottom-8 right-8 h-16 w-16 rounded-3xl bg-accent/30" />
      <div className="relative space-y-5">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-200">{eyebrow}</p>
        <h2 className="text-2xl font-black leading-tight sm:text-3xl">{title}</h2>
        <p className="leading-7 text-slate-200 sm:leading-8">{copy}</p>
        <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold">
          {accent}
        </span>
      </div>
    </div>
  );
}
