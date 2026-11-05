import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — UpScale" },
      { name: "description", content: "How UpScale collects, uses and protects your information." },
      { property: "og:title", content: "UpScale Privacy Policy" },
      { property: "og:description", content: "How UpScale collects, uses and protects your information." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero tag="Legal" title="Privacy Policy" text="Last updated November 2026." />
      <section className="mx-auto max-w-3xl space-y-5 px-6 py-20 text-lg text-muted-foreground">
        <p>We collect only the information you give us through our forms — such as your name, email and project details — to respond to your enquiry and provide our services.</p>
        <p>We never sell your data. We may use trusted tools for analytics and email, which process data on our behalf.</p>
        <p>You can request access to or deletion of your data at any time by emailing info@upscale.com.</p>
      </section>
    </SiteLayout>
  ),
});
