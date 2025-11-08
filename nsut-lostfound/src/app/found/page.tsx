const foundItems = [
  {
    id: 1,
    title: "Black Lenovo Backpack",
    category: "Bags & Accessories",
    location: "Main Library - 2nd Floor",
    date: "12 Feb 2025",
    claimCode: "NSUT-2381",
    icon: "🎒",
    description:
      "Contains a ME-202 notes register and a silver water bottle. Found near the charging station.",
  },
  {
    id: 2,
    title: "Apple AirPods (2nd Gen)",
    category: "Electronics",
    location: "ECE Block - Lab 214",
    date: "10 Feb 2025",
    claimCode: "NSUT-2375",
    icon: "🎧",
    description:
      "White charging case with a faded sticker at the back. Battery at 54% when submitted.",
  },
  {
    id: 3,
    title: "Silver Analog Watch",
    category: "Personal Items",
    location: "Basketball Court",
    date: "09 Feb 2025",
    claimCode: "NSUT-2369",
    icon: "⌚️",
    description:
      "Strap slightly worn out with initials R.K. engraved. Handed over by sports coordinator.",
  },
  {
    id: 4,
    title: "Tan Leather Wallet",
    category: "Wallets & Keys",
    location: "Hostel H1 Cafeteria",
    date: "07 Feb 2025",
    claimCode: "NSUT-2358",
    icon: "👛",
    description:
      "Contains NSUT ID (Roll: 2023UCS1234) and metro card. Cash safely stored with admin.",
  },
  {
    id: 5,
    title: "Engineering Graphics Toolkit",
    category: "Books & Stationery",
    location: "Drawing Hall - Block C",
    date: "05 Feb 2025",
    claimCode: "NSUT-2344",
    icon: "📐",
    description:
      "Complete drafter set in a black pouch with name tag partially peeled.",
  },
  {
    id: 6,
    title: "Blue Water Bottle",
    category: "Daily Essentials",
    location: "Admin Block Reception",
    date: "04 Feb 2025",
    claimCode: "NSUT-2338",
    icon: "🧴",
    description:
      "Steel bottle with NSUT fest stickers. Found during evening cleaning round.",
  },
];

export default function FoundItemsPage() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-3 rounded-3xl bg-surface p-6 shadow-lg shadow-primary/10 sm:p-8">
        <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase text-primary">
          Found Items Dashboard
        </span>
        <h1 className="text-3xl font-semibold text-foreground">
          Recovered belongings awaiting their owners
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Browse items handed over to the NSUT Lost &amp; Found helpdesk. Carry
          your NSUT ID card and the claim code mentioned to collect from the
          Student Affairs office between 2 PM - 5 PM.
        </p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <input
            type="search"
            placeholder="Search by item name, location, or claim code..."
            className="w-full rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:flex-1"
          />
          <select
            className="w-full rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:w-60"
            defaultValue=""
          >
            <option value="" disabled>
              Filter by category
            </option>
            <option>All categories</option>
            <option>Electronics</option>
            <option>Bags & Accessories</option>
            <option>Books & Stationery</option>
            <option>Wallets & Keys</option>
            <option>Personal Items</option>
            <option>Daily Essentials</option>
          </select>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {foundItems.map((item) => (
          <article
            key={item.id}
            className="flex h-full flex-col gap-4 rounded-3xl border border-color-border bg-white p-6 shadow-md shadow-primary/10 transition hover:-translate-y-1 hover:shadow-primary/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    {item.category}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1">
                    {item.location}
                  </span>
                  <span className="rounded-full bg-primary/5 px-3 py-1">
                    Found on {item.date}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted">{item.description}</p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Claim Code: {item.claimCode}
              </div>
              <button
                type="button"
                className="w-full rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
              >
                Claim Instructions
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-6 text-sm text-muted sm:p-8">
        <h3 className="text-lg font-semibold text-primary">
          Collection Window
        </h3>
        <p className="mt-2">
          Visit the Student Affairs Helpdesk (Block A, Room 104) between 2 PM -
          5 PM on working days. Carry your NSUT ID card, the claim code, and any
          proof that helps validate ownership (purchase receipt, device lock
          screen, etc.).
        </p>
      </section>
    </div>
  );
}
