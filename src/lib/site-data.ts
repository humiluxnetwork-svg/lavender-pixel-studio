import fashion from "@/assets/project-fashion.jpg";
import beauty from "@/assets/project-beauty.jpg";
import analytics from "@/assets/project-analytics.jpg";
import coffee from "@/assets/project-coffee.jpg";
import designers from "@/assets/designers.jpg";
import teamTable from "@/assets/team-table.jpg";
import jewelry from "@/assets/project-jewelry.jpg";
import furniture from "@/assets/project-furniture.jpg";
import fitness from "@/assets/project-fitness.jpg";
import pets from "@/assets/project-pets.jpg";
import sneakers from "@/assets/project-sneakers.jpg";
import plants from "@/assets/project-plants.jpg";
import haircare from "@/assets/project-haircare.jpg";
import baby from "@/assets/project-baby.jpg";
import watches from "@/assets/project-watches.jpg";
import bakery from "@/assets/project-bakery.jpg";

export const services = [
  { slug: "ecommerce-website-design", icon: "ShoppingCart", title: "Ecommerce Website Design", short: "High-converting online stores on Shopify, WooCommerce and custom builds.", body: "We design and build online stores that look stunning and sell. Every layout, product page and checkout step is crafted to reduce friction and lift conversion.", features: ["Custom store design", "Shopify & WooCommerce builds", "Product page optimization", "Fast, mobile-first checkout"] },
  { slug: "digital-marketing", icon: "Megaphone", title: "Paid Ads & Social Media", short: "Profitable campaigns across Meta, Google and TikTok.", body: "Data-driven ad campaigns that find your best customers and scale what works, with creative that stops the scroll.", features: ["Meta & Instagram ads", "Google Search & Shopping", "TikTok campaigns", "Creative production"] },
  { slug: "seo", icon: "Search", title: "SEO & Content", short: "Rank higher and win customers already searching for you.", body: "Technical SEO, content strategy and link building that compound into long-term organic growth.", features: ["Technical audits", "Keyword strategy", "Content writing", "Local SEO"] },
  { slug: "email-marketing", icon: "Mail", title: "Email & SMS Marketing", short: "Automations that turn one-time buyers into loyal fans.", body: "Welcome flows, abandoned cart, win-back and campaigns that drive repeat revenue on autopilot.", features: ["Flow automation", "Campaign calendars", "List growth", "Segmentation"] },
  { slug: "branding", icon: "Palette", title: "Branding & Identity", short: "Logos, visual identity and voice that people remember.", body: "We craft brands with a clear story and a distinctive look, ready for every channel.", features: ["Logo design", "Brand guidelines", "Packaging", "Tone of voice"] },
  { slug: "conversion-optimization", icon: "BarChart3", title: "Analytics & CRO", short: "Measure everything and grow your conversion rate.", body: "Tracking setup, A/B testing and UX research to get more sales from the traffic you already have.", features: ["Analytics setup", "A/B testing", "Heatmaps & UX research", "Monthly reporting"] },
] as const;

export const serviceCategories = [
  {
    tag: "A",
    title: "E-commerce Design & Development",
    intro: "We build online stores that look great and make it easy for people to buy.",
    items: [
      { title: "Shopify store design and development", desc: "We set up and design your shop on Shopify — the world's most popular online store builder — so you can start selling fast without touching any code." },
      { title: "WooCommerce development", desc: "We build your store on WooCommerce, which runs inside WordPress — a great fit if you already have a WordPress site or want full control of your own data." },
      { title: "Custom e-commerce websites", desc: "For stores with special needs, we build a store from scratch that is designed exactly around how you sell — nothing generic, nothing off the shelf." },
      { title: "E-commerce redesign", desc: "If your current store looks dated or isn't selling, we give it a fresh look and a smoother buying experience — without losing your products, customers or search rankings." },
      { title: "Product page design", desc: "We design the page people see before buying, so it shows your product clearly, answers their questions and convinces them to press 'Add to cart'." },
      { title: "Conversion rate optimization (CRO)", desc: "We watch how visitors move through your store, find the exact spot where they give up, and make changes so more of them actually buy." },
      { title: "Payment and checkout integration", desc: "We connect every way your customers want to pay — cards, PayPal, Apple Pay, mobile money — and make checkout quick and worry-free." },
      { title: "Website maintenance and support", desc: "We keep your store updated, backed up and running smoothly, and fix problems fast so you never lose a sale to a broken page." },
    ],
  },
  {
    tag: "B",
    title: "Digital Marketing",
    intro: "We bring the right people to your store — and turn them into buyers.",
    items: [
      { title: "Search engine optimization (SEO)", desc: "We help your website show up on Google when people search for what you sell — so customers find you on their own, without you paying for every click." },
      { title: "Google Ads and PPC campaigns", desc: "We create ads that appear at the top of Google the moment someone searches. You only pay when someone clicks, which makes it great for fast sales." },
      { title: "Meta Ads (Facebook and Instagram)", desc: "We run ads on Facebook and Instagram that put your products in front of the right people while they scroll — with pictures and videos that make them stop and look." },
      { title: "Social media marketing", desc: "We manage your social pages for you — planning what to post, growing your followers and turning fans into paying customers." },
      { title: "Email marketing", desc: "We send the right message to the right customer at the right time — welcome notes, cart reminders, special offers — so people come back and buy again." },
      { title: "Content marketing", desc: "We write helpful articles, guides and posts that attract the right people, answer their questions and build trust before they buy." },
      { title: "Influencer marketing", desc: "We connect you with trusted creators whose followers match your customers, and manage the whole collaboration from idea to results." },
      { title: "Marketing automation", desc: "We set up tools that do your repetitive marketing work for you — like sending emails and following up with leads — automatically, even while you sleep." },
      { title: "Lead generation", desc: "We find people who are genuinely interested in what you sell, collect their contact details and hand you a list you can follow up with and close." },
    ],
  },
  {
    tag: "C",
    title: "Branding & Creative Design",
    intro: "We give your business a look and a voice people recognize and remember.",
    items: [
      { title: "Brand identity development", desc: "We create the complete look and feel of your brand — colors, fonts, logo, photography style — so people recognize you instantly, everywhere." },
      { title: "Logo design", desc: "We design a memorable logo that tells people who you are and what you stand for in a single glance." },
      { title: "Brand strategy", desc: "We help you decide who your brand is for, what it stands for and how to talk about it — the plan behind every design choice that follows." },
      { title: "Graphic design", desc: "We design all the everyday visuals your business needs: flyers, banners, business cards, pitch decks and more — all matching your brand." },
      { title: "Social media creatives", desc: "We design eye-catching posts, stories and reels graphics that stop the scroll and make people pay attention to your brand." },
      { title: "Marketing campaign design", desc: "We design the visuals for your whole campaign — from the first ad click to the checkout page — so everything looks consistent and convincing." },
      { title: "Packaging design", desc: "We design your product packaging so it stands out on the shelf, feels good in the customer's hands and gets chosen over competitors." },
      { title: "Brand guidelines", desc: "We write a simple rulebook for your brand — exactly how your logo, colors and fonts may be used — so everything you ever publish looks consistent." },
    ],
  },
  {
    tag: "D",
    title: "Website Design & Development",
    intro: "We build fast, beautiful websites that work perfectly on every device.",
    items: [
      { title: "Corporate website design", desc: "We design polished, professional websites for companies — the kind that builds trust with clients, partners and investors from the first second." },
      { title: "Landing page design", desc: "We design single pages built around one clear goal — getting a visitor to sign up, call or buy — with nothing there to distract them." },
      { title: "UI/UX design", desc: "We design how your website or app looks and how easy it is to use, so visitors enjoy being there and get things done without any confusion." },
      { title: "Website development", desc: "We turn designs into a real, working website — fast, secure, and easy for you to update without needing a developer every time." },
      { title: "Responsive web design", desc: "We make sure your website looks and works perfectly on every screen — phone, tablet and computer — because most visitors will arrive on a phone." },
      { title: "Web application development", desc: "We build online tools beyond normal websites — booking systems, customer portals, dashboards and member areas — tailored to how you work." },
      { title: "Website speed optimization", desc: "We make slow websites load in a blink, because every extra second of waiting loses visitors — and every lost visitor is a lost sale." },
      { title: "Website maintenance", desc: "We keep your website updated, secure and problem-free in the background, so you can focus on running your business." },
    ],
  },
] as const;

export const projects = [
  { slug: "lumiere-fashion", client: "Lumière", category: "Ecommerce Design", image: fashion, desc: "A full Shopify redesign for a premium womenswear label.", result: "+182% online revenue", challenge: "An outdated store with a slow, confusing checkout was losing mobile shoppers.", solution: "We rebuilt the store mobile-first, simplified navigation and launched a one-page checkout.", metrics: [["182%", "Revenue growth"], ["3.9%", "Conversion rate"], ["-48%", "Cart abandonment"]] },
  { slug: "lumea-skincare", client: "Luméa Skincare", category: "Branding & Store", image: beauty, desc: "Brand identity and DTC store for a clean skincare startup.", result: "$1.2M first-year sales", challenge: "A new brand needed to stand out in a crowded beauty market.", solution: "We created a calm, natural identity and a storytelling-led store with subscription options.", metrics: [["$1.2M", "Year-one sales"], ["38%", "Repeat customers"], ["4.6x", "Ad ROAS"]] },
  { slug: "marketo-analytics", client: "Marketo", category: "Performance Marketing", image: analytics, desc: "Paid search and CRO program for a SaaS marketing tool.", result: "+240% qualified leads", challenge: "High ad spend wasn't turning into qualified demos.", solution: "We restructured campaigns, rebuilt landing pages and introduced weekly A/B tests.", metrics: [["240%", "More leads"], ["-41%", "Cost per lead"], ["5.2x", "ROI"]] },
  { slug: "earthbrew-coffee", client: "EarthBrew", category: "Social & Ecommerce", image: coffee, desc: "Social ads and mobile store for an organic coffee roaster.", result: "5.8x return on ad spend", challenge: "Strong product, but no predictable way to acquire customers online.", solution: "UGC-style ads on Meta and TikTok paired with a fast subscription storefront.", metrics: [["5.8x", "ROAS"], ["+310%", "Social followers"], ["+95%", "Subscriptions"]] },
  { slug: "aurielle-jewelry", client: "Aurielle", category: "Shopify Concept", image: jewelry, desc: "A luxury Shopify store for a handcrafted fine jewelry brand.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept features an elegant, editorial-style store with rich product storytelling, gift guides and a seamless one-page checkout.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
  { slug: "nordend-living", client: "Nordend Living", category: "Shopify Concept", image: furniture, desc: "A calm, minimal Shopify store for a Scandinavian furniture maker.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept includes a spacious, photography-led store with detailed product pages, room inspiration galleries and clear delivery information.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
  { slug: "sparq-fitness", client: "SPARQ", category: "Shopify Concept", image: fitness, desc: "A bold, high-energy Shopify store for a premium fitness apparel brand.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept explores a dark, dynamic mobile-first store with lookbook-style collections, size guides and lightning-fast checkout.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
  { slug: "paws-and-play", client: "Paws & Play", category: "Shopify Concept", image: pets, desc: "A playful Shopify store for a pet supplies brand loved by pet parents.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept organizes the store around pet types and needs, added friendly filtering and launched a subscribe-and-save program.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
  { slug: "soleculture-sneakers", client: "SoleCulture", category: "Shopify Concept", image: sneakers, desc: "A streetwear-style Shopify store for a limited-edition sneaker brand.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept includes a drop-ready store with countdown pages, queue-proof performance and instant mobile checkout.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
  { slug: "bloomwild-plants", client: "BloomWild", category: "Shopify Concept", image: plants, desc: "A fresh, botanical Shopify store for an online houseplant shop.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept features a warm, green store with care-level filters, plant care guides and a happiness guarantee front and center.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
  { slug: "velvet-hair", client: "Velvet Hair Co.", category: "Shopify Concept", image: haircare, desc: "A silky-smooth Shopify store for a premium haircare and extensions brand.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept includes visual shade matchers, before-and-after galleries and a guided quiz that recommends the perfect product.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
  { slug: "littleones-baby", client: "LittleOnes", category: "Shopify Concept", image: baby, desc: "A soft, trustworthy Shopify store for a baby essentials brand.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept explores a gentle, reassuring store with safety certifications, real parent reviews and age-based shopping journeys.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
  { slug: "chrono-and-co", client: "Chrono & Co.", category: "Shopify Concept", image: watches, desc: "A refined Shopify store for a minimalist watch brand.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept features a sleek, detail-focused store with macro product photography, craftsmanship stories and flexible payment options.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
  { slug: "bakebox-treats", client: "BakeBox", category: "Shopify Concept", image: bakery, desc: "A delicious Shopify store for an artisan baked-goods subscription box.", result: "Concept store design", challenge: "This illustrative concept explores a clear and engaging shopping experience. It is not a live client store or a verified case study.", solution: "The concept structures the store around a simple 3-step subscription flow with mouth-watering photography and flexible plans.", metrics: [["Shopify", "Platform concept"], ["Mobile", "Design focus"], ["Concept", "Illustrative project"]] },
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
