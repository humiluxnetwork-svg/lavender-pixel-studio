import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join UpScale" },
      { name: "description", content: "Join a team of designers and marketers helping brands grow online." },
      { property: "og:title", content: "Careers at UpScale" },
      { property: "og:description", content: "Join a team of designers and marketers helping brands grow online." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="Careers" title="Build the future of ecommerce with us" text="Remote-friendly, growth-focused and always learning." />
      <section className="mx-auto max-w-4xl space-y-4 px-6 py-24">
        {[["Senior UI/UX Designer", "Remote · Full-time"], ["Paid Media Specialist", "New York · Full-time"], ["Shopify Developer", "Remote · Contract"], ["SEO Content Writer", "Remote · Part-time"]].map(([r, m]) => (
          <div key={r} className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-card p-6">
            <div><h3 className="text-lg font-bold">{r}</h3><p className="text-sm text-muted-foreground">{m}</p></div>
            <Link to="/contact" className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground">Apply</Link>
          </div>
        ))}
      </section>
    </SiteLayout>
  ),
});
