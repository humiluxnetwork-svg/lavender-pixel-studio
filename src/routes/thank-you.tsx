import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WHATSAPP_URL } from "@/lib/forms";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Humilux Network" },
      { name: "description", content: "Thanks for reaching out to Humilux Network. We'll reply within one business day." },
      { property: "og:title", content: "Thank You — Humilux Network" },
      { property: "og:description", content: "Your message has been received." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <section className="mx-auto max-w-2xl px-6 py-32 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-secondary" />
        <h1 className="mt-6 text-4xl font-bold md:text-5xl">Thank you!</h1>
        <p className="mt-4 text-lg text-muted-foreground">We've received your message and will get back to you within one business day. Need a faster answer? Chat with us on WhatsApp.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground">Chat on WhatsApp</a>
          <Link to="/work" className="rounded-full border border-border px-6 py-3 font-bold hover:border-primary">See our work</Link>
          <Link to="/" className="rounded-full border border-border px-6 py-3 font-bold hover:border-primary">Back home</Link>
        </div>
      </section>
    </SiteLayout>
  ),
});
