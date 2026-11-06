import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages — Humilux Network" },
      { name: "description", content: "Transparent packages for ecommerce website design and digital marketing." },
      { property: "og:title", content: "Humilux Network Pricing & Packages" },
      { property: "og:description", content: "Transparent packages for ecommerce design and marketing." },
    ],
  }),
  component: Pricing,
});

const plans = [
  { name: "Starter", price: "$2,500", note: "one-time", items: ["5-page website or Shopify store", "Mobile-first design", "Basic SEO setup", "2 rounds of revisions"] },
  { name: "Growth", price: "$1,800", note: "/ month", featured: true, items: ["Paid ads management", "SEO & content (4 posts)", "Email automation", "Monthly reporting", "Conversion optimization"] },
  { name: "Scale", price: "Custom", note: "", items: ["Custom ecommerce build", "Full-funnel marketing", "Dedicated strategist", "Weekly reporting", "Priority support"] },
];

function Pricing() {
  return (
    <SiteLayout>
      <PageHero tag="Pricing" title="Simple, transparent packages" text="Choose a starting point — every plan can be tailored to your goals." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-3xl p-8 ${p.featured ? "bg-hero text-ink-foreground" : "border border-border bg-card"}`}>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="mt-4 text-5xl font-extrabold">{p.price}<span className="text-base font-medium opacity-70"> {p.note}</span></p>
            <ul className="mt-6 space-y-3">{p.items.map((i) => <li key={i} className="flex items-center gap-2"><Check className="h-5 w-5 text-secondary" />{i}</li>)}</ul>
            <Link to="/book" className="mt-8 block rounded-full bg-secondary py-3 text-center font-bold text-secondary-foreground">Get started</Link>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
