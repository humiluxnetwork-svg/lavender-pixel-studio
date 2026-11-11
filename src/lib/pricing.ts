export const pricingGroups = [
  {
    name: "Website Development",
    billing: "one-time",
    description: "Websites and online stores designed around your business.",
    features: ["Website or Shopify store design", "Mobile-friendly pages", "Search engine setup", "Project scope agreed before work begins"],
    tiers: [{ name: "Basic", price: 800 }, { name: "Standard", price: 1300 }, { name: "Premium", price: 2000 }],
  },
  {
    name: "Growth",
    billing: "monthly",
    description: "Ongoing marketing to help your business reach more customers.",
    features: ["Marketing strategy", "Campaign management", "Performance reporting", "Services agreed around your goals"],
    tiers: [{ name: "Basic", price: 600 }, { name: "Standard", price: 1200 }, { name: "Premium", price: 1800 }],
  },
] as const;