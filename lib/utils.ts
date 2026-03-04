import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}

export function calculateArea(length: number, width: number): number {
  return length * width;
}

export const SERVICES = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    description: "Transform your indoor spaces with flawless, long-lasting finishes.",
    icon: "🏠",
    href: "/services/interior-painting",
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    description: "Boost your home's curb appeal with weather-resistant exterior coatings.",
    icon: "🏡",
    href: "/services/exterior-painting",
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    description: "Protect your property from moisture, leaks, and water damage.",
    icon: "💧",
    href: "/services/waterproofing",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    text: "SkyPaints completely transformed our living room. Professional team, immaculate results, and done on schedule!",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James R.",
    role: "Property Manager",
    text: "We hired SkyPaints for 3 units — every single one came out perfect. Highly recommend for any property owner.",
    rating: 5,
    avatar: "JR",
  },
  {
    name: "Lily T.",
    role: "Homeowner",
    text: "Exterior painting done in two days. Neighbours keep complimenting the colour. Best investment we made!",
    rating: 5,
    avatar: "LT",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: 299,
    description: "Perfect for a single room refresh.",
    features: ["Up to 1 room", "1 colour choice", "2 coats", "Basic prep work", "1-year warranty"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Home",
    price: 799,
    description: "Ideal for multi-room interior projects.",
    features: [
      "Up to 5 rooms",
      "Unlimited colours",
      "2 coats",
      "Full prep & priming",
      "3-year warranty",
      "Free consultation",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Premium",
    price: 1499,
    description: "Complete interior + exterior transformation.",
    features: [
      "Full home (interior + exterior)",
      "Premium paint brands",
      "3 coats",
      "Waterproofing treatment",
      "5-year warranty",
      "Priority scheduling",
      "Free consultation",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
] as const;
