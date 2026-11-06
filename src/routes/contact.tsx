import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { services } from "@/lib/site-data";
import { sendForm, WHATSAPP_URL } from "@/lib/forms";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Humilux Network — Start Your Project" },
      { name: "description", content: "Tell us about your store or campaign and we'll get back within one business day." },
      { property: "og:title", content: "Contact Humilux Network" },
      { property: "og:description", content: "Start your ecommerce or marketing project with Humilux Network." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const field = "w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-primary";
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setError("");
    try { await sendForm("New project inquiry — Humilux Network website", e.currentTarget); navigate({ to: "/thank-you" }); }
    catch { setError("Sorry, something went wrong. Please try again or message us on WhatsApp."); setBusy(false); }
  }
  return (
    <SiteLayout>
      <PageHero tag="Contact" title="Let's grow your brand" text="Tell us about your project and we'll reply within one business day." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Talk to us directly</h2>
          <a href="mailto:humiluxnetwork@gmail.com" className="flex items-center gap-3 rounded-2xl bg-card p-4 hover:text-secondary"><Mail className="h-5 w-5 text-secondary" />humiluxnetwork@gmail.com</a>
          <a href="tel:+2349120794635" className="flex items-center gap-3 rounded-2xl bg-card p-4 hover:text-secondary"><Phone className="h-5 w-5 text-secondary" />+234 912 079 4635</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-card p-4 hover:text-secondary"><MessageCircle className="h-5 w-5 text-secondary" />Chat on WhatsApp</a>
          <a href="https://www.instagram.com/humilux.digital/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-card p-4 hover:text-secondary"><Instagram className="h-5 w-5 text-secondary" />@humilux.digital</a>
        </div>
        <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          <input name="name" required maxLength={100} placeholder="Your name" className={field} />
          <input name="email" required type="email" maxLength={255} placeholder="Email" className={field} />
          <input name="phone" maxLength={30} placeholder="Phone / WhatsApp" className={field} />
          <input name="company" maxLength={150} placeholder="Business name / website" className={field} />
          <select name="service" className={field} defaultValue=""><option value="" disabled>Service you need</option>{services.map((s) => <option key={s.slug}>{s.title}</option>)}<option>Not sure yet</option></select>
          <select name="budget" className={field} defaultValue=""><option value="" disabled>Budget</option><option>Under ₦500k</option><option>₦500k – ₦1.5M</option><option>₦1.5M – ₦5M</option><option>₦5M+</option></select>
          <textarea name="message" required rows={5} maxLength={2000} placeholder="Tell us about your project" className={`${field} sm:col-span-2`} />
          {error && <p className="text-sm font-semibold text-destructive sm:col-span-2">{error}</p>}
          <button disabled={busy} className="rounded-full bg-secondary px-8 py-3 font-bold text-secondary-foreground hover:opacity-90 disabled:opacity-60 sm:col-span-2">{busy ? "Sending…" : "Send message"}</button>
        </form>
      </section>
    </SiteLayout>
  );
}
