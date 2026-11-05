import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, FinalCTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — UpScale" },
      { name: "description", content: "Answers to common questions about our ecommerce design and marketing services." },
      { property: "og:title", content: "UpScale FAQ" },
      { property: "og:description", content: "Common questions about our services, pricing and process." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="FAQ" title="Frequently asked questions" text="Can't find your answer? Just get in touch." />
      <section className="mx-auto max-w-3xl space-y-4 px-6 py-24">
        {[
          ["How long does a website project take?", "Most ecommerce stores take 4–8 weeks from kickoff to launch."],
          ["Which platforms do you work with?", "Shopify, WooCommerce, Webflow and fully custom builds."],
          ["Do you offer ongoing marketing?", "Yes — monthly retainers for ads, SEO, email and optimization."],
          ["How do you report results?", "You get a clear monthly report and a live dashboard."],
          ["Is the first consultation free?", "Yes, your first 30-minute strategy call is completely free."],
        ].map(([q, a]) => (
          <details key={q} className="group rounded-2xl bg-card p-6">
            <summary className="cursor-pointer list-none text-lg font-bold marker:hidden">{q}</summary>
            <p className="mt-3 text-muted-foreground">{a}</p>
          </details>
        ))}
      </section>
      <FinalCTA />
    </SiteLayout>
  ),
});
