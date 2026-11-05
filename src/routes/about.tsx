import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import officeStanding from "@/assets/office-standing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About UpScale — Our Agency Story" },
      { name: "description", content: "Meet the team behind UpScale's ecommerce design and digital marketing." },
      { property: "og:title", content: "About UpScale" },
      { property: "og:description", content: "Meet the team behind UpScale's ecommerce design and digital marketing." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="About us" title="A team obsessed with your growth" text="Designers, marketers and strategists building brands that sell online." />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={officeStanding} alt="Our team" loading="lazy" width={768} height={960} className="h-[480px] w-full rounded-3xl object-cover" />
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>For over 20 years we've helped businesses launch and scale online stores, combining beautiful design with performance marketing.</p>
          <p>Every project starts with your customers: who they are, what they need, and how we can make buying from you effortless.</p>
        </div>
      </section>
    </SiteLayout>
  ),
});
