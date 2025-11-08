import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Quick Search",
    description:
      "Filter through reported items instantly by category, location, or date.",
    icon: "🔍",
  },
  {
    title: "Easy Reporting",
    description:
      "Log lost belongings with guided prompts and helpful tips for faster recovery.",
    icon: "📝",
  },
  {
    title: "Verified Claims",
    description:
      "Every claim is cross-checked by the NSUT admin desk to ensure rightful returns.",
    icon: "✅",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid gap-10 rounded-3xl bg-gradient-to-br from-surface via-surface to-primary/5 px-6 py-12 shadow-lg shadow-primary/10 md:grid-cols-2 md:items-center md:px-10 md:py-16">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Netaji Subhas University of Technology
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Lost &amp; Found Portal - NSUT
          </h1>
          <p className="text-lg text-muted sm:text-xl">
            Report lost items or claim found belongings easily. Stay connected
            with your campus community and reunite items with their owners in
            just a few steps.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/report"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Report Lost Item
            </Link>
            <Link
              href="/found"
              className="rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/60"
            >
              View Found Items
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 hidden rounded-[2.5rem] bg-primary/20 blur-3xl md:block" />
          <div className="relative rounded-[2.5rem] border border-primary/20 bg-white/90 p-4 shadow-xl shadow-primary/20 backdrop-blur">
            <Image
              src="/hero-illustration.svg"
              alt="Students searching for belongings on campus"
              width={520}
              height={360}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="flex h-full flex-col gap-4 rounded-3xl border border-color-border/60 bg-surface p-6 shadow-sm shadow-primary/5 transition hover:-translate-y-1 hover:shadow-primary/20"
          >
            <span className="text-3xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="text-sm text-muted">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-white shadow-lg shadow-primary/25 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Found or Lost Something? Get Started!
            </h2>
            <p className="text-base text-white/80">
              Submit a report in under two minutes or explore recovered items
              submitted by fellow Spartans. Our verification desk keeps every
              claim secure.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Link
              href="/report"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-primary transition hover:bg-accent hover:text-[#1f2c45]"
            >
              Start Reporting
            </Link>
            <Link
              href="/found"
              className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse Found Items
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
