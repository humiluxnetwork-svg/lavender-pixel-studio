import fashion from "@/assets/project-fashion.jpg";
import beauty from "@/assets/project-beauty.jpg";
import analytics from "@/assets/project-analytics.jpg";
import coffee from "@/assets/project-coffee.jpg";
import designers from "@/assets/designers.jpg";
import teamTable from "@/assets/team-table.jpg";

export const services = [
  { slug: "ecommerce-website-design", icon: "ShoppingCart", title: "Ecommerce Website Design", short: "High-converting online stores on Shopify, WooCommerce and custom builds.", body: "We design and build online stores that look stunning and sell. Every layout, product page and checkout step is crafted to reduce friction and lift conversion.", features: ["Custom store design", "Shopify & WooCommerce builds", "Product page optimization", "Fast, mobile-first checkout"] },
  { slug: "digital-marketing", icon: "Megaphone", title: "Paid Ads & Social Media", short: "Profitable campaigns across Meta, Google and TikTok.", body: "Data-driven ad campaigns that find your best customers and scale what works, with creative that stops the scroll.", features: ["Meta & Instagram ads", "Google Search & Shopping", "TikTok campaigns", "Creative production"] },
  { slug: "seo", icon: "Search", title: "SEO & Content", short: "Rank higher and win customers already searching for you.", body: "Technical SEO, content strategy and link building that compound into long-term organic growth.", features: ["Technical audits", "Keyword strategy", "Content writing", "Local SEO"] },
  { slug: "email-marketing", icon: "Mail", title: "Email & SMS Marketing", short: "Automations that turn one-time buyers into loyal fans.", body: "Welcome flows, abandoned cart, win-back and campaigns that drive repeat revenue on autopilot.", features: ["Flow automation", "Campaign calendars", "List growth", "Segmentation"] },
  { slug: "branding", icon: "Palette", title: "Branding & Identity", short: "Logos, visual identity and voice that people remember.", body: "We craft brands with a clear story and a distinctive look, ready for every channel.", features: ["Logo design", "Brand guidelines", "Packaging", "Tone of voice"] },
  { slug: "conversion-optimization", icon: "BarChart3", title: "Analytics & CRO", short: "Measure everything and grow your conversion rate.", body: "Tracking setup, A/B testing and UX research to get more sales from the traffic you already have.", features: ["Analytics setup", "A/B testing", "Heatmaps & UX research", "Monthly reporting"] },
] as const;

export const projects = [
  { slug: "lumiere-fashion", client: "Lumière", category: "Ecommerce Design", image: fashion, desc: "A full Shopify redesign for a premium womenswear label.", result: "+182% online revenue", challenge: "An outdated store with a slow, confusing checkout was losing mobile shoppers.", solution: "We rebuilt the store mobile-first, simplified navigation and launched a one-page checkout.", metrics: [["182%", "Revenue growth"], ["3.9%", "Conversion rate"], ["-48%", "Cart abandonment"]] },
  { slug: "lumea-skincare", client: "Luméa Skincare", category: "Branding & Store", image: beauty, desc: "Brand identity and DTC store for a clean skincare startup.", result: "$1.2M first-year sales", challenge: "A new brand needed to stand out in a crowded beauty market.", solution: "We created a calm, natural identity and a storytelling-led store with subscription options.", metrics: [["$1.2M", "Year-one sales"], ["38%", "Repeat customers"], ["4.6x", "Ad ROAS"]] },
  { slug: "marketo-analytics", client: "Marketo", category: "Performance Marketing", image: analytics, desc: "Paid search and CRO program for a SaaS marketing tool.", result: "+240% qualified leads", challenge: "High ad spend wasn't turning into qualified demos.", solution: "We restructured campaigns, rebuilt landing pages and introduced weekly A/B tests.", metrics: [["240%", "More leads"], ["-41%", "Cost per lead"], ["5.2x", "ROI"]] },
  { slug: "earthbrew-coffee", client: "EarthBrew", category: "Social & Ecommerce", image: coffee, desc: "Social ads and mobile store for an organic coffee roaster.", result: "5.8x return on ad spend", challenge: "Strong product, but no predictable way to acquire customers online.", solution: "UGC-style ads on Meta and TikTok paired with a fast subscription storefront.", metrics: [["5.8x", "ROAS"], ["+310%", "Social followers"], ["+95%", "Subscriptions"]] },
] as const;

export const posts = [
  { slug: "ecommerce-growth-strategies-2026", category: "E-commerce Growth", title: "7 Ecommerce Growth Strategies That Work in 2026", excerpt: "Practical tactics our clients use to grow revenue without doubling ad spend.", image: fashion, date: "Oct 28, 2026" },
  { slug: "website-design-trends", category: "Website Design", title: "Website Design Trends Shaping Online Stores", excerpt: "From immersive product pages to micro-interactions — what's converting now.", image: designers, date: "Oct 14, 2026" },
  { slug: "seo-guide-for-online-stores", category: "SEO Guides", title: "The Beginner's SEO Guide for Online Stores", excerpt: "How to get your products found on Google, step by step.", image: analytics, date: "Sep 30, 2026" },
  { slug: "digital-marketing-tips-small-business", category: "Marketing Tips", title: "10 Digital Marketing Tips for Small Businesses", excerpt: "Simple wins you can implement this week to attract more customers.", image: teamTable, date: "Sep 12, 2026" },
] as const;

export const testimonials = [
  { name: "Sophie Laurent", company: "Founder, Lumière", quote: "They rebuilt our store and our revenue nearly tripled. The team feels like an extension of ours.", initials: "SL" },
  { name: "Daniel Okafor", company: "CMO, Marketo", quote: "Clear reporting, honest advice and results that keep compounding month after month.", initials: "DO" },
  { name: "Mia Chen", company: "Co-founder, EarthBrew", quote: "Their ads finally made our growth predictable. Best marketing decision we've made.", initials: "MC" },
] as const;

export const clients = ["Lumière", "Luméa", "Marketo", "EarthBrew", "Nova", "Kinfolk", "Orbit", "Velora"];
