import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, PostCard } from "@/components/SiteLayout";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Humilux Network" },
      { name: "description", content: "Digital marketing tips, ecommerce growth strategies, SEO guides and design trends." },
      { property: "og:title", content: "Humilux Network Blog & Insights" },
      { property: "og:description", content: "Marketing tips, ecommerce growth, SEO and design trends." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="Blog" title="Insights to grow your business" text="Marketing tips, ecommerce strategies, SEO guides and design trends." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => <PostCard key={p.slug} p={p} />)}
      </section>
    </SiteLayout>
  ),
});
