import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowUpRight, Quote, PlayCircle, Check } from "lucide-react";
import { SiteLayout, Tag, ServiceCard, ProjectCard, PostCard, FinalCTA } from "@/components/SiteLayout";
import { services, projects, posts, testimonials, clients } from "@/lib/site-data";
import blob from "@/assets/blob.png";
import teamTable from "@/assets/team-table.jpg";
import officeStanding from "@/assets/office-standing.jpg";
import designers from "@/assets/designers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Humilux Network — Digital Marketing & Ecommerce Design Agency" },
      { name: "description", content: "We design high-converting ecommerce websites and run digital marketing that grows revenue. Book a free consultation." },
      { property: "og:title", content: "Humilux Network — Digital Marketing & Ecommerce Design Agency" },
      { property: "og:description", content: "Ecommerce website design and digital marketing that drives measurable growth." },
    ],
  }),
  component: Index,
});

const results = [
  ["$48M+", "Revenue generated for clients"],
  ["+127%", "Average conversion improvement"],
  ["6.2x", "Average advertising ROI"],
  ["+315%", "Organic traffic growth"],
  ["+210%", "E-commerce sales growth"],
];

const process = [
  ["Discovery & consultation", "We learn your business, customers and goals."],
  ["Research & strategy", "Market, competitor and audience research shape the plan."],
  ["Planning & design", "Wireframes, visuals and campaign concepts you approve."],
  ["Development & implementation", "We build, integrate and set up tracking."],
  ["Launch & optimization", "Go live, test and refine for performance."],
  ["Reporting & ongoing growth", "Clear monthly reports and continuous improvements."],
];

function Index() {
  return (
    <SiteLayout>
      {/* 01 Hero */}
      <section className="bg-hero text-ink-foreground">
        <div className="grid-lines">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Tag dark>Digital Marketing & Ecommerce Agency</Tag>
                <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] md:text-7xl">Websites that sell.<br />Marketing that grows.</h1>
                <p className="mt-6 max-w-lg text-lg text-ink-muted">We design high-converting online stores and run data-driven campaigns that turn visitors into loyal customers.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground hover:opacity-90">Book a Free Consultation <ArrowUpRight className="h-4 w-4" /></Link>
                  <Link to="/work" className="inline-flex items-center rounded-full border border-ink-muted px-6 py-3 font-bold hover:border-secondary hover:text-secondary">Explore Our Work</Link>
                </div>
                <p className="mt-8 text-sm text-ink-muted">Trusted by 350+ brands · Shopify & Google Partner</p>
              </div>
              <img src={blob} alt="Abstract glossy 3D shape" width={1024} height={1024} className="float-slow mx-auto w-full max-w-md" />
            </div>
            <div className="mt-16 grid items-center gap-8 md:grid-cols-3">
              <img src={teamTable} alt="Team collaborating" width={1024} height={640} className="h-44 w-full rounded-2xl object-cover" />
              <div className="md:px-6">
                <div className="flex justify-between text-sm"><span>Google Rating</span><span className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" />4.9</span></div>
                <p className="mt-4 text-5xl font-bold">728,000 <span className="text-secondary">+</span></p>
                <p className="mt-2 text-sm text-ink-muted">orders processed through stores we've built</p>
              </div>
              <div className="rounded-2xl border border-ink-card bg-ink-card/70 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary font-bold">SL</div>
                  <div><p className="text-sm font-bold">Sophie Laurent</p><p className="text-xs text-ink-muted">Founder, Lumière</p></div>
                </div>
                <p className="mt-4 text-lg font-bold">Revenue nearly tripled</p>
                <p className="mt-1 text-sm text-ink-muted">They rebuilt our store and the team feels like an extension of ours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Trusted by */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Trusted by growing brands worldwide</p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
            {clients.map((c) => <span key={c} className="text-center text-xl font-extrabold text-primary/60">{c}</span>)}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[["350+", "Brands served"], ["1,200+", "Projects completed"], ["20+", "Years of experience"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-card p-6 text-center"><p className="text-4xl font-extrabold text-primary">{n}</p><p className="mt-1 text-muted-foreground">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><Tag>Services</Tag><h2 className="mt-4 text-4xl font-bold md:text-5xl">Everything you need to grow online</h2></div>
          <Link to="/services" className="font-bold text-secondary">All services →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
      </section>

      {/* 04 Featured projects */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><Tag>Featured work</Tag><h2 className="mt-4 text-4xl font-bold md:text-5xl">Projects that moved the needle</h2></div>
            <Link to="/work" className="font-bold text-secondary">View portfolio →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">{projects.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
        </div>
      </section>

      {/* 05 Results */}
      <section className="bg-hero text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Tag dark>Results</Tag>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">Real numbers for real businesses</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {results.map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-ink-card bg-ink-card/60 p-6"><p className="text-4xl font-extrabold text-secondary">{n}</p><p className="mt-2 text-sm text-ink-muted">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 About */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Tag>About us</Tag>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Unique Digital Experiences That Elevate your Brand</h2>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row">
            <img src={designers} alt="Designers building an ecommerce site" loading="lazy" width={896} height={752} className="h-36 w-full rounded-2xl object-cover sm:w-52" />
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><b className="text-foreground">Who we are:</b> designers, marketers and strategists focused on ecommerce growth.</p>
              <p><b className="text-foreground">Our mission:</b> make online growth simple and predictable for ambitious brands.</p>
              <p><b className="text-foreground">Our vision:</b> every business deserves a world-class digital presence.</p>
            </div>
          </div>
          <ul className="mt-8 space-y-2">
            {["Design and marketing under one roof — no hand-offs", "Every decision backed by data and testing", "Transparent reporting you actually understand"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check className="h-5 w-5 text-secondary" />{t}</li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">Meet the team <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <img src={officeStanding} alt="Agency team in office" loading="lazy" width={768} height={960} className="h-[560px] w-full rounded-3xl object-cover" />
      </section>

      {/* 07 Process */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Tag>How we work</Tag>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Our proven 6-step process</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([t, d], i) => (
              <div key={t} className="rounded-3xl border border-border bg-background p-8">
                <span className="text-5xl font-extrabold text-secondary/40">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Tag>Testimonials</Tag>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">What our clients say</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-card p-8">
              <Quote className="h-8 w-8 text-secondary" />
              <div className="mt-3 flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />)}</div>
              <blockquote className="mt-4 text-lg">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{t.initials}</span>
                <span><b className="block">{t.name}</b><span className="text-sm text-muted-foreground">{t.company}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="relative mt-6 overflow-hidden rounded-3xl">
          <img src={teamTable} alt="Video testimonial" loading="lazy" width={1024} height={640} className="h-72 w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-ink/60 text-ink-foreground">
            <div className="text-center"><PlayCircle className="mx-auto h-16 w-16 text-secondary" /><p className="mt-3 font-bold">Watch: how EarthBrew scaled with Humilux Network</p></div>
          </div>
        </div>
      </section>

      {/* 09 Blog */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><Tag>Insights</Tag><h2 className="mt-4 text-4xl font-bold md:text-5xl">Latest from our blog</h2></div>
            <Link to="/blog" className="font-bold text-secondary">All articles →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{posts.map((p) => <PostCard key={p.slug} p={p} />)}</div>
        </div>
      </section>

      {/* 10 Final CTA */}
      <FinalCTA />
    </SiteLayout>
  );
}
