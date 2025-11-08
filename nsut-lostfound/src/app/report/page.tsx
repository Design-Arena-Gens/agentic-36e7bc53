'use client';

import { useState } from "react";

const categories = [
  "ID Cards & Documents",
  "Electronics",
  "Bags & Accessories",
  "Clothing",
  "Books & Stationery",
  "Keys & Wallets",
  "Others",
];

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
      <section className="space-y-6 rounded-3xl border border-color-border/70 bg-surface p-6 shadow-lg shadow-primary/10 sm:p-8">
        <header className="space-y-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase text-primary">
            Report Lost Item
          </span>
          <h1 className="text-3xl font-semibold text-foreground">
            Tell us what you lost
          </h1>
          <p className="text-sm text-muted">
            Share as many details as you can. The student affairs team uses this
            information to match recovered items with their rightful owners.
          </p>
        </header>

        <form
          className="grid gap-6 md:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            const form = event.currentTarget;
            form.reset();
            setTimeout(() => setSubmitted(false), 4000);
          }}
        >
          <div className="md:col-span-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
              Item Name
              <input
                required
                name="itemName"
                placeholder="Eg. Black Dell Laptop"
                className="rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                type="text"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
            Category
            <select
              name="category"
              required
              className="rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              defaultValue=""
            >
              <option value="" disabled>
                Choose a category
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
            Date Lost
            <input
              required
              name="dateLost"
              type="date"
              className="rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </label>

  <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90 md:col-span-2">
    Location Last Seen
    <input
      required
      name="location"
      placeholder="Eg. Library Block, Ground Floor"
      className="rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      type="text"
    />
  </label>

  <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90 md:col-span-2">
    Detailed Description
    <textarea
      required
      name="description"
      placeholder="Mention distinguishing marks, contents, or other identifiers."
      className="h-32 rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
    />
  </label>

  <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
    Upload Photo (optional)
    <input
      name="photo"
      accept="image/*"
      type="file"
      className="rounded-2xl border border-dashed border-color-border bg-white px-4 py-[0.65rem] text-sm shadow-sm file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-primary-dark"
    />
  </label>

  <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
    Student / Staff ID
    <input
      required
      name="idNumber"
      placeholder="NSUT roll number or staff code"
      className="rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      type="text"
    />
  </label>

  <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
    Contact Email
    <input
      required
      name="email"
      placeholder="you@nsut.ac.in"
      className="rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      type="email"
    />
  </label>

  <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
    Contact Number
    <input
      required
      name="phone"
      placeholder="+91 98765 43210"
      className="rounded-2xl border border-color-border bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      type="tel"
    />
  </label>

  <label className="flex items-start gap-3 rounded-2xl bg-primary/5 p-4 text-sm text-muted md:col-span-2">
    <input
      required
      type="checkbox"
      name="verification"
      className="mt-1 h-5 w-5 rounded border border-primary/60 text-primary focus:ring-primary"
    />
    <span>
      I confirm that the details shared are accurate to the best of my
      knowledge and agree to present valid NSUT identification while claiming
      the item.
    </span>
  </label>

  <div className="md:col-span-2">
    <button
      type="submit"
      className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      Submit Report
    </button>
    {submitted && (
      <p className="mt-3 rounded-2xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
        Thank you! Your report has been sent to the NSUT Lost &amp; Found desk.
        The team will contact you within 24 hours.
      </p>
    )}
  </div>
</form>
      </section>

      <aside className="flex flex-col gap-6 rounded-3xl border border-color-border/70 bg-white/70 p-6 shadow-lg shadow-primary/10 sm:p-8">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Tips for faster recovery
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>• Share identifiable marks such as stickers or engravings.</li>
            <li>• Mention the time window when you last had the item.</li>
            <li>• Upload clear photos if available from your gallery.</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-primary/10 p-5">
          <h3 className="text-base font-semibold text-primary">
            Verification process
          </h3>
          <p className="mt-2 text-sm text-muted">
            After we locate your belonging, you&apos;ll receive an email to
            schedule collection from the Student Affairs Helpdesk. Carry your
            NSUT ID card and the reference number shared with the confirmation
            mail.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-primary/40 p-5 text-sm text-muted">
          <p>
            Need urgent help? Reach the Lost &amp; Found helpline at{" "}
            <a className="font-semibold text-primary" href="tel:+911123421234">
              +91 11 2342 1234
            </a>{" "}
            or email{" "}
            <a
              className="font-semibold text-primary"
              href="mailto:lostfound@nsut.ac.in"
            >
              lostfound@nsut.ac.in
            </a>
            .
          </p>
        </div>
      </aside>
    </div>
  );
}
