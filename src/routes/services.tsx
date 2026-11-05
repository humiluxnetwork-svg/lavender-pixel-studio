import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart, Megaphone, Search, Mail, BarChart3, Palette } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ecommerce Design & Digital Marketing | UpScale" },
      { name: "description", content: "Ecommerce website design, paid ads, SEO, email marketing, branding and analytics." },
      { property: "og:title", content: "UpScale Services" },
      { property: "og:description", content: "Ecommerce website design, paid ads, SEO, email marketing, branding and analytics." },
    ],
  }),
  component: Services,
});

const items = [
  { icon: ShoppingCart, t: "Ecommerce Website Design", d: "Custom, fast, mobile-first stores built to convert." },
  { icon: Megaphone, t: "Paid Social & Search Ads", d: "Profitable campaigns on Meta, Google and TikTok." },
  { icon: Search, t: "SEO & Content", d: "Rank higher and attract buyers organically." },
  { icon: Mail, t: "Email & SMS Marketing", d: "Automations that bring customers back again." },
  { icon: Palette, t: "Branding", d: "Logos, visual identity and brand voice." },
  { icon: BarChart3, t: "Analytics & CRO", d: "Measure everything and lift your conversion rate." },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero tag="Services" title="Everything you need to sell online" text="From your first storefront to your next million in revenue." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        {items.map((s) => (
          <div key={s.t} className="rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"><s.icon className="h-5 w-5" /></div>
            <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
            <p className="mt-2 text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
