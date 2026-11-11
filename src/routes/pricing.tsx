import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { pricingGroups } from "@/lib/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages — Humilux Network" },
      { name: "description", content: "Transparent packages for ecommerce website design and digital marketing." },
      { property: "og:title", content: "Humilux Network Pricing & Packages" },
      { property: "og:description", content: "Transparent packages for ecommerce design and marketing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <SiteLayout>
      <PageHero tag="Pricing" title="Simple, transparent packages" text="Choose a starting point — every plan can be tailored to your goals." />
      {pricingGroups.map((group) => (
        <section key={group.name} className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl font-bold text-primary">{group.name}</h2>
          <p className="mt-3 text-muted-foreground">{group.description}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {group.tiers.map((tier) => (
              <article key={tier.name} className="flex min-w-0 flex-col rounded-lg border border-border bg-card p-6 lg:p-8">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="mt-5 text-4xl font-extrabold text-primary">${tier.price.toLocaleString("en-US")}</p>
                <p className="mt-1 text-sm text-muted-foreground">{group.billing === "monthly" ? "per month · USD" : "one-time · USD"}</p>
                <ul className="my-6 space-y-3">{group.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm"><Check className="h-5 w-5 shrink-0 text-secondary" />{feature}</li>)}</ul>
                <Button asChild variant="secondary" className="mt-auto w-full"><Link to="/contact">Discuss {tier.name}<ArrowUpRight /></Link></Button>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section className="mt-8 border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-primary">Custom</h2>
            <p className="mt-3 text-lg font-semibold">Your needs. Your package.</p>
            <p className="mt-3 text-muted-foreground">Request any service or combination of services — website development, marketing, branding, or something unique. Tell us what you want, your goals and your budget, and we’ll prepare a tailored quote.</p>
          </div>
          <Button asChild variant="secondary" size="lg"><Link to="/contact">Request a custom quote<ArrowUpRight /></Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
