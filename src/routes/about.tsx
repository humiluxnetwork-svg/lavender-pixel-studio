import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, FinalCTA } from "@/components/SiteLayout";
import officeStanding from "@/assets/office-standing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Humilux Network Digital Agency" },
      { name: "description", content: "Meet the team, mission and approach behind Humilux Network's ecommerce design and digital marketing." },
      { property: "og:title", content: "About Humilux Network" },
      { property: "og:description", content: "Meet the team, mission and approach behind Humilux Network." },
    ],
  }),
  component: About,
});

const team: [string, string][] = [["Ajiki Demilade", "Founder & CEO"], ["Ozioma Peter", "Head of Design"], ["Priya Shah", "Head of Marketing"], ["Noah Williams", "Lead Developer"]];

function About() {
  return (
    <SiteLayout>
      <PageHero tag="About us" title="A team obsessed with your growth" text="Designers, marketers and strategists building brands that sell online." />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={officeStanding} alt="Our team" loading="lazy" width={768} height={960} className="h-[480px] w-full rounded-3xl object-cover" />
        <div className="space-y-6">
          {[["Who we are", "For over 3 years we've helped businesses launch and scale online, combining beautiful design with performance marketing."], ["Our mission", "Make online growth simple, measurable and predictable for ambitious brands."], ["Our vision", "A world where every business, big or small, has a world-class digital presence."], ["Our approach", "We start with your customers, build a strategy around real data, then design, test and improve continuously."]].map(([h, p]) => (
            <div key={h}><h3 className="text-xl font-bold text-primary">{h}</h3><p className="mt-1 text-muted-foreground">{p}</p></div>
          ))}
        </div>
      </section>
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold">Meet the team</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(([n, r], i) => (
              <div key={n} className="rounded-3xl bg-background p-8 text-center">
                <div className={`mx-auto grid h-24 w-24 place-items-center rounded-full text-2xl font-bold text-primary-foreground ${i % 2 ? "bg-secondary" : "bg-primary"}`}>{n.split(" ").map((x) => x[0]).join("")}</div>
                <p className="mt-4 font-bold">{n}</p><p className="text-sm text-muted-foreground">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </SiteLayout>
  );
}
