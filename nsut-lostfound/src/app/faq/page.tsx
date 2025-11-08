const faqs = [
  {
    question: "Where is the Lost & Found helpdesk located?",
    answer:
      "The helpdesk operates out of the Student Affairs Office, Block A, Room 104. Collection hours are 2 PM – 5 PM on working days.",
  },
  {
    question: "How long are items stored?",
    answer:
      "Items are catalogued and stored securely for 60 days. After that, unclaimed belongings are donated to partner NGOs.",
  },
  {
    question: "What proofs do I need to claim an item?",
    answer:
      "Carry your NSUT ID card along with any contextual proof like purchase receipts, device lock screen, or photos that validate ownership.",
  },
  {
    question: "Can I report a found item online?",
    answer:
      "Yes! Use the same report form and select the 'Found Item' option. Our volunteers will reach out for collection.",
  },
  {
    question: "How do I edit or withdraw a report?",
    answer:
      "Reply to the confirmation email with your report reference number. The helpdesk team will assist you within one working day.",
  },
];

export default function FaqPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 rounded-3xl bg-surface p-6 shadow-lg shadow-primary/10 sm:p-8">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase text-primary">
          Support Centre
        </span>
        <h1 className="text-3xl font-semibold text-foreground">
          Frequently Asked Questions
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Need help navigating the NSUT Lost &amp; Found experience? Here are
          quick answers to common queries from students and staff.
        </p>
      </header>

      <section className="space-y-4">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="rounded-3xl border border-color-border bg-white p-6 shadow-md shadow-primary/5"
          >
            <h2 className="text-lg font-semibold text-foreground">
              {faq.question}
            </h2>
            <p className="mt-2 text-sm text-muted">{faq.answer}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-6 text-sm text-muted sm:p-8">
        <h3 className="text-lg font-semibold text-primary">Still confused?</h3>
        <p className="mt-2">
          Reach us at{" "}
          <a
            className="font-semibold text-primary"
            href="mailto:lostfound@nsut.ac.in"
          >
            lostfound@nsut.ac.in
          </a>{" "}
          or visit the Student Affairs Office. We are happy to assist you.
        </p>
      </section>
    </div>
  );
}
