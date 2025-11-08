export function Footer() {
  return (
    <footer className="border-t border-color-border/60 bg-surface/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Netaji Subhas University of Technology.
          All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:lostfound@nsut.ac.in"
            className="transition hover:text-primary"
          >
            lostfound@nsut.ac.in
          </a>
          <a
            href="tel:+911123421234"
            className="transition hover:text-primary"
          >
            +91 11 2342 1234
          </a>
        </div>
      </div>
    </footer>
  );
}
