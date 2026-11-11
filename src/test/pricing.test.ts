import { describe, expect, it } from "vitest";
import { pricingGroups } from "@/lib/pricing";

describe("Confirmed package prices", () => {
  it("offers Website Development Basic, Standard and Premium at the confirmed amounts", () => {
    expect(pricingGroups[0].name).toBe("Website Development");
    expect(pricingGroups[0].tiers).toEqual([{ name: "Basic", price: 800 }, { name: "Standard", price: 1300 }, { name: "Premium", price: 2000 }]);
  });
  it("offers Growth Basic, Standard and Premium at the confirmed monthly amounts", () => {
    expect(pricingGroups[1].tiers).toEqual([{ name: "Basic", price: 600 }, { name: "Standard", price: 1200 }, { name: "Premium", price: 1800 }]);
    expect(pricingGroups[1].billing).toBe("monthly");
  });
});