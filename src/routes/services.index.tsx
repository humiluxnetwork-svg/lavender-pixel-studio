import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, ServiceCard, FinalCTA } from "@/components/SiteLayout";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Ecommerce Design & Digital Marketing | UpScale" },
      { name: "description", content: "Ecommerce website design, paid ads, SEO, email marketing, branding and analytics." },
      { property: "og:title", content: "UpScale Services" },
      { property: "og:description", content: "Ecommerce website design, paid ads, SEO, email marketing, branding and analytics." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="Services" title="Everything you need to sell online" text="From your first storefront to your next million in revenue." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
      </section>
      <FinalCTA />
    </SiteLayout>
  ),
});
