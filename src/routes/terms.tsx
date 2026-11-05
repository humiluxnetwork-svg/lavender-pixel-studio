import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — UpScale" },
      { name: "description", content: "The terms that apply when you use the UpScale website and services." },
      { property: "og:title", content: "UpScale Terms & Conditions" },
      { property: "og:description", content: "The terms that apply when you use UpScale's website and services." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="Legal" title="Terms & Conditions" text="Last updated November 2026." />
      <section className="mx-auto max-w-3xl space-y-5 px-6 py-20 text-lg text-muted-foreground">
        <p>By using this website you agree to these terms. Content on this site is provided for general information only.</p>
        <p>Project scope, fees and timelines are agreed in a separate written proposal before any work begins.</p>
        <p>All website content, branding and designs remain the property of UpScale unless transferred in writing.</p>
      </section>
    </SiteLayout>
  ),
});
