import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact UpScale — Start Your Project" },
      { name: "description", content: "Tell us about your store or campaign and we'll get back within one business day." },
      { property: "og:title", content: "Contact UpScale" },
      { property: "og:description", content: "Start your ecommerce or marketing project with UpScale." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-primary";
  return (
    <SiteLayout>
      <PageHero tag="Contact" title="Let's grow your brand" text="Tell us about your project and we'll reply within one business day." />
      <section className="mx-auto max-w-2xl px-6 py-24">
        {sent ? (
          <p className="rounded-2xl bg-card p-8 text-center text-lg font-semibold">Thanks! We'll be in touch soon.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
            <input required placeholder="Your name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <textarea required rows={5} placeholder="Tell us about your project" className={field} />
            <button className="rounded-full bg-secondary px-8 py-3 font-bold text-secondary-foreground hover:opacity-90">Send message</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
