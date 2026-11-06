import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Free Consultation — Humilux Network" },
      { name: "description", content: "Book a free 30-minute strategy call with our ecommerce and marketing experts." },
      { property: "og:title", content: "Book a Free Consultation" },
      { property: "og:description", content: "Free 30-minute strategy call with Humilux Network." },
    ],
  }),
  component: Book,
});

function Book() {
  const [sent, setSent] = useState(false);
  const f = "w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-primary";
  return (
    <SiteLayout>
      <PageHero tag="Free consultation" title="Book your free strategy call" text="30 minutes, no obligation. We'll review your store and share quick wins." />
      <section className="mx-auto max-w-2xl px-6 py-24">
        {sent ? <p className="rounded-2xl bg-card p-8 text-center text-lg font-semibold">Thanks! We'll email you to confirm a time.</p> : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className={f} />
            <input required type="email" placeholder="Email" className={f} />
            <input placeholder="Company / website" className={f} />
            <select className={f} defaultValue=""><option value="" disabled>Service of interest</option>{services.map((s) => <option key={s.slug}>{s.title}</option>)}</select>
            <input type="date" required className={f} />
            <select className={f} defaultValue=""><option value="" disabled>Monthly budget</option><option>Under $2k</option><option>$2k–$5k</option><option>$5k–$15k</option><option>$15k+</option></select>
            <textarea rows={4} placeholder="Tell us about your goals" className={`${f} sm:col-span-2`} />
            <button className="rounded-full bg-secondary px-8 py-3 font-bold text-secondary-foreground sm:col-span-2">Book my consultation</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
