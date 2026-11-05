import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout, FinalCTA } from "@/components/SiteLayout";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = posts.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — UpScale Blog` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Article not found — UpScale" }, { name: "robots", content: "noindex" }],
  }),
  component: Post,
});

function Post() {
  const p = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-wider text-secondary">{p.category} · {p.date}</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">{p.title}</h1>
        <img src={p.image} alt={p.title} width={1024} height={768} className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover" />
        <div className="mt-10 space-y-5 text-lg leading-relaxed">
          <p>{p.excerpt}</p>
          <p>Growing online isn't about doing everything — it's about doing the right things consistently. Start by understanding where your customers come from and what stops them from buying.</p>
          <h2 className="pt-4 text-2xl font-bold text-primary">Start with the data</h2>
          <p>Set up proper analytics, identify your highest-value channels and double down on what works before experimenting with something new.</p>
          <h2 className="pt-4 text-2xl font-bold text-primary">Optimize, then scale</h2>
          <p>Small improvements to your product pages and checkout compound over time. Once your conversion rate is healthy, scaling ad spend becomes far more profitable.</p>
        </div>
      </article>
      <FinalCTA />
    </SiteLayout>
  );
}
