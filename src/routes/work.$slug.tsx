import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout, Tag, FinalCTA } from "@/components/SiteLayout";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.client} Case Study — UpScale` },
          { name: "description", content: loaderData.desc },
          { property: "og:title", content: `${loaderData.client} Case Study` },
          { property: "og:description", content: loaderData.desc },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Project not found — UpScale" }, { name: "robots", content: "noindex" }],
  }),
  component: Project,
});

function Project() {
  const p = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="bg-hero text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Tag dark>{p.category}</Tag>
          <h1 className="mt-5 text-5xl font-extrabold md:text-6xl">{p.client}</h1>
          <p className="mt-4 max-w-xl text-ink-muted">{p.desc}</p>
          <img src={p.image} alt={p.client} width={1024} height={768} className="mt-12 aspect-[16/9] w-full rounded-3xl object-cover" />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:grid-cols-3">
        {p.metrics.map(([n, l]) => <div key={l} className="rounded-3xl bg-card p-8 text-center"><p className="text-5xl font-extrabold text-secondary">{n}</p><p className="mt-2 text-muted-foreground">{l}</p></div>)}
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-2">
        <div><h2 className="text-2xl font-bold text-primary">The challenge</h2><p className="mt-3 text-lg">{p.challenge}</p></div>
        <div><h2 className="text-2xl font-bold text-primary">Our solution</h2><p className="mt-3 text-lg">{p.solution}</p></div>
      </section>
      <FinalCTA />
    </SiteLayout>
  );
}
