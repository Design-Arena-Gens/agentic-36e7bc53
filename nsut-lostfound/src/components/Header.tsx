import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/report", label: "Report" },
  { href: "/found", label: "Found Items" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="border-b border-color-border/60 bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-primary/10">
            <Image
              src="/nsut-badge.svg"
              alt="NSUT emblem"
              fill
              priority
              sizes="48px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              NSUT
            </span>
            <span className="text-lg font-semibold text-foreground">
              Lost &amp; Found Portal
            </span>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm font-medium sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/report"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Report Lost Item
          </Link>
        </nav>
      </div>
    </header>
  );
}
