import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHero, FinalCTA } from "@/components/SiteLayout";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — UpScale` },
          { name: "description", content: loaderData.short },
          { property: "og:title", content: `${loaderData.title} — UpScale` },
          { property: "og:description", content: loaderData.short },
        ]
      : [{ title: "Service not found — UpScale" }, { name: "robots", content: "noindex" }],
  }),
  component: Service,
});

function Service() {
  const s = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHero tag="Service" title={s.title} text={s.short} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <p className="text-xl leading-relaxed">{s.body}</p>
        <div className="rounded-3xl bg-card p-8">
          <h3 className="text-xl font-bold">What's included</h3>
          <ul className="mt-5 space-y-3">{s.features.map((f) => <li key={f} className="flex items-center gap-2"><Check className="h-5 w-5 text-secondary" />{f}</li>)}</ul>
          <Link to="/book" className="mt-8 inline-block rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground">Book a Free Consultation</Link>
        </div>
      </section>
      <FinalCTA />
    </SiteLayout>
  );
}
