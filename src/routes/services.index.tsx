import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, ServiceCard, FinalCTA } from "@/components/SiteLayout";
import { services, serviceCategories } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Ecommerce Design & Digital Marketing | Humilux Network" },
      { name: "description", content: "E-commerce stores, digital marketing, branding and website design — every service explained simply." },
      { property: "og:title", content: "Humilux Network Services" },
      { property: "og:description", content: "E-commerce stores, digital marketing, branding and website design — every service explained simply." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="Services" title="Everything you need to sell online" text="From your first storefront to your next million in revenue." />
      {serviceCategories.map((c) => (
        <section key={c.tag} className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary">{c.tag}</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">{c.title}</h2>
            <p className="mt-3 text-lg text-muted-foreground">{c.intro}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.items.map((i) => (
              <div key={i.title} className="rounded-3xl border border-border bg-card p-7">
                <h3 className="text-lg font-bold">{i.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{i.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Explore our core services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
      </section>
      <FinalCTA />
    </SiteLayout>
  ),
});
