import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { sendForm } from "@/lib/forms";
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
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setError("");
    try { await sendForm("New consultation booking — Humilux Network website", e.currentTarget); navigate({ to: "/thank-you" }); }
    catch { setError("Sorry, something went wrong. Please try again."); setBusy(false); }
  }
  const f = "w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-primary";
  return (
    <SiteLayout>
      <PageHero tag="Free consultation" title="Book your free strategy call" text="30 minutes, no obligation. We'll review your store and share quick wins." />
      <section className="mx-auto max-w-2xl px-6 py-24">
        {(
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Full name" className={f} />
            <input name="email" required type="email" placeholder="Email" className={f} />
            <input name="company" placeholder="Company / website" className={f} />
            <select name="service" className={f} defaultValue=""><option value="" disabled>Service of interest</option>{services.map((s) => <option key={s.slug}>{s.title}</option>)}</select>
            <input name="preferred_date" type="date" required className={f} />
            <select name="budget" className={f} defaultValue=""><option value="" disabled>Budget</option><option>Under ₦500k</option><option>₦500k – ₦1.5M</option><option>₦1.5M – ₦5M</option><option>₦5M+</option></select>
            <textarea name="message" rows={4} placeholder="Tell us about your goals" className={`${f} sm:col-span-2`} />
            {error && <p className="text-sm font-semibold text-destructive sm:col-span-2">{error}</p>}
            <button disabled={busy} className="rounded-full bg-secondary px-8 py-3 font-bold text-secondary-foreground disabled:opacity-60 sm:col-span-2">{busy ? "Sending…" : "Book my consultation"}</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
