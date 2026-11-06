import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, ProjectCard, FinalCTA } from "@/components/SiteLayout";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Our Work — Portfolio | Humilux Network" },
      { name: "description", content: "Ecommerce websites, brands and campaigns we've built for growing businesses." },
      { property: "og:title", content: "Humilux Network Portfolio" },
      { property: "og:description", content: "Ecommerce websites, brands and campaigns we've built." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="Our work" title="Stores and campaigns we're proud of" text="A selection of projects for brands across fashion, beauty, food and SaaS." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </section>
      <FinalCTA />
    </SiteLayout>
  ),
});
