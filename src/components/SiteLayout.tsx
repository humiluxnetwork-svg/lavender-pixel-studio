import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import * as Icons from "lucide-react";
import logoAsset from "@/assets/humilux-logo.png.asset.json";
import { Mail, Phone, Instagram, ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { services, projects, posts } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Our Work" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;

const more = [
  { to: "/pricing", label: "Pricing" },
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ" },
  { to: "/book", label: "Book a Consultation" },
] as const;

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;
  return <C className={className} />;
}

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-ink-foreground">
      <img src={logoAsset.url} alt="Humilux Network logo" className="h-10 w-10 rounded-full" />
      <span className="leading-none">HUMILUX <span className="text-secondary">NETWORK</span></span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-ink text-ink-foreground">
      <div className="border-b border-ink-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex flex-wrap gap-5">
            <a href="mailto:humiluxnetwork@gmail.com" className="flex items-center gap-1.5 hover:text-secondary"><Mail className="h-3.5 w-3.5 text-secondary" />humiluxnetwork@gmail.com</a>
            <a href="tel:+2349120794635" className="hidden items-center gap-1.5 hover:text-secondary sm:flex"><Phone className="h-3.5 w-3.5 text-secondary" />+234 912 079 4635</a>
          </div>
          <a href="https://www.instagram.com/humilux.digital/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-secondary"><Instagram className="h-4 w-4" /><span className="hidden sm:inline">@humilux.digital</span></a>
        </div>
      </div>
      <div className="border-b border-ink-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} activeProps={{ className: "text-secondary" }} className="hover:text-secondary">{n.label}</Link>
            ))}
            <div className="group relative">
              <button className="flex items-center gap-1 hover:text-secondary">Pages <ChevronDown className="h-4 w-4" /></button>
              <div className="invisible absolute right-0 top-full z-50 w-56 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-ink-card bg-ink-card p-2 shadow-xl">
                  {more.map((m) => <Link key={m.to} to={m.to} className="block rounded-lg px-3 py-2 hover:bg-ink hover:text-secondary">{m.label}</Link>)}
                </div>
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/book" className="hidden rounded-full bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground hover:opacity-90 sm:inline-block">Get Started</Link>
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-ink-card px-6 py-4 font-semibold lg:hidden">
            {[...nav, ...more].map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 hover:text-secondary">{n.label}</Link>)}
          </nav>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm">A digital marketing and ecommerce website design agency helping brands grow online with beautiful stores and campaigns that convert.</p>
          <div className="mt-5 space-y-2 text-sm">
            <a href="mailto:humiluxnetwork@gmail.com" className="flex items-center gap-2 hover:text-secondary"><Mail className="h-4 w-4 text-secondary" />humiluxnetwork@gmail.com</a>
            <a href="tel:+2349120794635" className="flex items-center gap-2 hover:text-secondary"><Phone className="h-4 w-4 text-secondary" />+234 912 079 4635</a>
          </div>
          <div className="mt-5 flex gap-3"><a href="https://www.instagram.com/humilux.digital/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-ink-card text-ink-foreground hover:bg-secondary"><Instagram className="h-4 w-4" /></a></div>
        </div>
        <div>
          <h4 className="font-bold text-ink-foreground">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm">{[...nav.slice(1), ...more].map((n) => <li key={n.to}><Link to={n.to} className="hover:text-secondary">{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="font-bold text-ink-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">{services.map((s) => <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-secondary">{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="font-bold text-ink-foreground">Newsletter</h4>
          <p className="mt-4 text-sm">Growth tips straight to your inbox.</p>
          {subscribed ? <p className="mt-4 text-sm font-semibold text-secondary">Thanks for subscribing!</p> : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="mt-4 flex flex-col gap-2">
              <input required type="email" placeholder="Your email" className="rounded-full border border-ink-card bg-ink-card px-4 py-2.5 text-sm text-ink-foreground outline-none focus:border-secondary" />
              <button className="rounded-full bg-secondary px-4 py-2.5 text-sm font-bold text-secondary-foreground">Subscribe</button>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-ink-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Humilux Network. All rights reserved.</p>
          <div className="flex gap-5"><Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link><Link to="/terms" className="hover:text-secondary">Terms & Conditions</Link></div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Tag({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${dark ? "border-secondary text-secondary" : "border-primary text-primary"}`}>{children}</span>;
}

export function PageHero({ tag, title, text }: { tag: string; title: string; text: string }) {
  return (
    <section className="bg-hero text-ink-foreground">
      <div className="grid-lines">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Tag dark>{tag}</Tag>
          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-xl text-ink-muted">{text}</p>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ s }: { s: (typeof services)[number] }) {
  return (
    <Link to="/services/$slug" params={{ slug: s.slug }} className="group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"><Icon name={s.icon} className="h-5 w-5" /></div>
      <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
      <p className="mt-2 text-muted-foreground">{s.short}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-secondary">Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
    </Link>
  );
}

export function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <Link to="/work/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-3xl border border-border bg-card">
      <div className="overflow-hidden"><img src={p.image} alt={`${p.client} project`} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></div>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm"><span className="font-bold">{p.client}</span><span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary">{p.category}</span></div>
        <p className="mt-3 text-muted-foreground">{p.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-secondary">{p.result}</span>
          <span className="inline-flex items-center gap-1 text-sm font-bold">View Case Study <ArrowUpRight className="h-4 w-4" /></span>
        </div>
      </div>
    </Link>
  );
}

export function PostCard({ p }: { p: (typeof posts)[number] }) {
  return (
    <Link to="/blog/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-3xl border border-border bg-card">
      <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768} className="aspect-[16/10] w-full object-cover" />
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-secondary">{p.category} · {p.date}</p>
        <h3 className="mt-2 text-lg font-bold group-hover:text-primary">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
      </div>
    </Link>
  );
}

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="bg-hero grid items-center gap-10 rounded-3xl p-10 text-ink-foreground md:grid-cols-2 md:p-14">
        <div>
          <h2 className="text-4xl font-bold leading-tight">Ready to grow your brand online?</h2>
          <p className="mt-4 text-ink-muted">Tell us about your goals and we'll map out a clear plan to get you there — no pressure, no jargon.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground">Let's Talk About Your Project <ArrowUpRight className="h-4 w-4" /></Link>
            <Link to="/book" className="inline-flex items-center rounded-full border border-ink-muted px-6 py-3 font-bold">Book a consultation</Link>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-8 text-card-foreground">
          <p className="text-5xl font-semibold">350+</p>
          <div className="mt-8 flex -space-x-2">
            {["SL", "DO", "MC", "AK", "JR"].map((x, i) => <span key={x} className={`grid h-10 w-10 place-items-center rounded-full border-2 border-card text-xs font-bold text-primary-foreground ${i % 2 ? "bg-secondary" : "bg-primary"}`}>{x}</span>)}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Brands growing with Humilux Network worldwide</p>
        </div>
      </div>
    </section>
  );
}
