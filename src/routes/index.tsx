import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Users, Lightbulb, ShieldCheck, ArrowUpRight, ShoppingCart, Megaphone, Search } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import blob from "@/assets/blob.png";
import teamTable from "@/assets/team-table.jpg";
import officeStanding from "@/assets/office-standing.jpg";
import designers from "@/assets/designers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UpScale — Digital Marketing & Ecommerce Design Agency" },
      { name: "description", content: "Smarter marketing, faster results. We design ecommerce websites and run digital marketing that grows brands." },
      { property: "og:title", content: "UpScale — Digital Marketing & Ecommerce Design Agency" },
      { property: "og:description", content: "Ecommerce website design and digital marketing that drives measurable growth." },
    ],
  }),
  component: Index,
});

const values = [
  { icon: Users, title: "Growth Through Collaboration", text: "We partner closely with your team so every campaign and store reflects your goals." },
  { icon: Lightbulb, title: "Insight-Powered Strategic Decisions", text: "Data guides every design choice and ad dollar we spend for you." },
  { icon: ShieldCheck, title: "Trust Begins With True Integrity", text: "Transparent reporting, honest timelines and results you can verify." },
];

const services = [
  { icon: ShoppingCart, title: "Ecommerce Website Design", text: "High-converting online stores built for speed and sales." },
  { icon: Megaphone, title: "Social & Paid Ads", text: "Campaigns on Meta, Google and TikTok that turn clicks into customers." },
  { icon: Search, title: "SEO & Content", text: "Get found by buyers already searching for what you sell." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-hero text-ink-foreground">
        <div className="grid-lines">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="rounded-full border border-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">Digital Marketing Agency</span>
                <h1 className="mt-6 text-6xl font-extrabold leading-[1.02] md:text-7xl">Smarter marketing<br />Faster results</h1>
                <div className="mt-10 flex items-center gap-8">
                  <p className="border-r border-ink-card pr-8 font-semibold leading-tight">December<br />Stats.</p>
                  <div><p className="text-2xl font-bold">8M +</p><p className="text-xs text-ink-muted">Monthly visits</p></div>
                  <div><p className="text-2xl font-bold">2.1 M</p><p className="text-xs text-ink-muted">Social followers</p></div>
                </div>
              </div>
              <img src={blob} alt="Abstract glossy 3D shape" width={1024} height={1024} className="float-slow mx-auto w-full max-w-md" />
            </div>
            <div className="mt-16 grid items-center gap-8 md:grid-cols-3">
              <img src={teamTable} alt="Team collaborating" width={1024} height={640} className="h-44 w-full rounded-2xl object-cover" />
              <div className="md:px-6">
                <div className="flex justify-between text-sm"><span>Google Rating</span><span className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" />4.8</span></div>
                <p className="mt-4 text-5xl font-bold">728,000 <span className="text-secondary">+</span></p>
                <p className="mt-2 text-sm text-ink-muted">customers in over 120 countries growing their businesses with UpScale</p>
              </div>
              <div className="rounded-2xl border border-ink-card bg-ink-card/70 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary font-bold">MN</div>
                  <div><p className="text-sm font-bold">Michael Nguyen</p><p className="text-xs text-ink-muted">Business Owner</p></div>
                </div>
                <p className="mt-4 text-lg font-bold">Strategic Planning</p>
                <p className="mt-1 text-sm text-ink-muted">This agency rebuilt our online store and doubled our sales within six months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title}>
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"><v.icon className="h-5 w-5" /></div>
            <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
            <p className="mt-2 text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="rounded-full border border-foreground px-3 py-1 text-xs font-bold uppercase">About us</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Unique Digital Experiences That Elevate your Brand</h2>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row">
            <img src={designers} alt="Designers building an ecommerce site" loading="lazy" width={896} height={752} className="h-36 w-full rounded-2xl object-cover sm:w-52" />
            <div>
              <p className="font-bold">We design ecommerce experiences and run marketing that drives business growth</p>
              <p className="mt-3 text-sm text-muted-foreground">We create solutions that enhance customer engagement, streamline operations and drive measurable growth — whether it's designing a seamless store, launching campaigns or optimizing conversions.</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {[["20+", "Years of experience"], ["100%", "Client satisfaction rate"]].map(([n, l]) => (
              <div key={n} className="border-b border-border pb-4">
                <div className="flex items-center gap-3"><span className="text-5xl font-semibold">{n}</span><span className="max-w-24 text-sm">{l}</span></div>
                <div className="-mb-4 mt-4 h-1 w-10 bg-secondary" />
              </div>
            ))}
          </div>
        </div>
        <img src={officeStanding} alt="Agency team in office" loading="lazy" width={768} height={960} className="h-[520px] w-full rounded-3xl object-cover" />
      </section>

      {/* Services */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold">What we do</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl border border-border bg-background p-8 transition hover:-translate-y-1 hover:border-primary">
                <s.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="bg-hero grid items-center gap-10 rounded-3xl p-10 text-ink-foreground md:grid-cols-2 md:p-14">
          <div>
            <h2 className="text-4xl font-bold leading-tight">Your next big product<br />starts right here today.</h2>
            <p className="mt-4 text-ink-muted">Turn ideas into real products faster with a streamlined workflow that keeps your team aligned and moving forward.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground">
              Get started today <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl bg-card p-8 text-card-foreground">
            <p className="text-5xl font-semibold">6.4K</p>
            <div className="mt-10 flex -space-x-2">
              {["A", "B", "C", "D", "E"].map((x, i) => (
                <span key={x} className={`grid h-9 w-9 place-items-center rounded-full border-2 border-card text-xs font-bold text-primary-foreground ${i % 2 ? "bg-secondary" : "bg-primary"}`}>{x}</span>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Chosen by 4,500+ brands globally</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
