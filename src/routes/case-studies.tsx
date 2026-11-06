import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHero, FinalCTA } from "@/components/SiteLayout";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Proven Results | Humilux Network" },
      { name: "description", content: "In-depth case studies showing how we grew revenue, leads and conversions for our clients." },
      { property: "og:title", content: "Humilux Network Case Studies" },
      { property: "og:description", content: "How we grew revenue, leads and conversions for our clients." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="Case studies" title="The story behind the results" text="Challenges, strategies and the numbers that followed." />
      <section className="mx-auto max-w-7xl space-y-8 px-6 py-24">
        {projects.map((p, i) => (
          <Link key={p.slug} to="/work/$slug" params={{ slug: p.slug }} className={`group grid items-center gap-8 overflow-hidden rounded-3xl bg-card md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
            <img src={p.image} alt={p.client} loading="lazy" width={1024} height={768} className="aspect-[4/3] h-full w-full object-cover" />
            <div className="p-8">
              <p className="text-sm font-bold uppercase text-secondary">{p.category}</p>
              <h2 className="mt-2 text-3xl font-bold">{p.client}</h2>
              <p className="mt-3 text-muted-foreground">{p.challenge}</p>
              <div className="mt-6 flex gap-6">{p.metrics.slice(0, 2).map(([n, l]) => <div key={l}><p className="text-3xl font-extrabold text-primary">{n}</p><p className="text-sm text-muted-foreground">{l}</p></div>)}</div>
              <span className="mt-6 inline-flex items-center gap-1 font-bold">Read case study <ArrowUpRight className="h-4 w-4" /></span>
            </div>
          </Link>
        ))}
      </section>
      <FinalCTA />
    </SiteLayout>
  ),
});
