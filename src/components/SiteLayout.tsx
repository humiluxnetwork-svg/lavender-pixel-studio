import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-ink-foreground">
      <span className="grid h-8 w-8 place-items-center rounded-full border-4 border-secondary" />
      UpScale
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="bg-ink text-ink-foreground">
      <div className="border-b border-ink-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex flex-wrap gap-5">
            <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-secondary" />info@upscale.com</span>
            <span className="hidden items-center gap-1.5 sm:flex"><Phone className="h-3.5 w-3.5 text-secondary" />+1 (123) 456-7890</span>
            <span className="hidden items-center gap-1.5 md:flex"><MapPin className="h-3.5 w-3.5 text-secondary" />123 Street New York City, USA</span>
          </div>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((I, i) => <I key={i} className="h-4 w-4" />)}
          </div>
        </div>
      </div>
      <div className="border-b border-ink-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden gap-8 text-sm font-semibold md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "text-secondary" }} className="hover:text-secondary">
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="rounded-full bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground hover:opacity-90">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <Logo />
        <p className="text-sm">Digital marketing & ecommerce website design.</p>
        <p className="text-sm">© {new Date().getFullYear()} UpScale. All rights reserved.</p>
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

export function PageHero({ tag, title, text }: { tag: string; title: string; text: string }) {
  return (
    <section className="bg-hero text-ink-foreground">
      <div className="grid-lines">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <span className="rounded-full border border-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">{tag}</span>
          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-xl text-ink-muted">{text}</p>
        </div>
      </div>
    </section>
  );
}
