import { Metadata } from "next";
import Image from "next/image";
import { Award, Truck, Package, Shield, Headphones, Sparkles } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";
import shopCollage from "@/assets/why-choose-us-shop.jpg";
// Adjust this import path depending on where you placed these shared components
import { PageHero, CTABanner } from "@/app/about/page";

export const metadata: Metadata = {
  title: "Why Choose S.A. Traders — Trusted Packaging Supplier",
  description: "Premium quality, timely delivery, wide range and competitive pricing. Discover why brands choose S.A. Traders.",
};

const reasons = [
  { icon: Award, t: "Premium Quality", d: "Every product passes strict QA — only the best reaches your warehouse." },
  { icon: Truck, t: "Timely Delivery", d: "Reliable logistics for both bulk and regular orders, on schedule." },
  { icon: Package, t: "Wide Range", d: "Bottles, caps, jars and chemicals — your one-stop packaging partner." },
  { icon: Shield, t: "Competitive Pricing", d: "Top-tier quality at honest, transparent and affordable rates." },
  { icon: Headphones, t: "Dedicated Support", d: "Personal account managers to guide every order, every time." },
  { icon: Sparkles, t: "Custom Solutions", d: "Custom branding, sizing and private-label packaging available." },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero 
        eyebrow="Why Choose Us" 
        title={<>Reasons Brands Choose <span className="text-gradient-gold">S.A. Traders</span></>} 
        subtitle="A trusted packaging partner that grows with your brand." 
        image={warehouse} 
      />

      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map(({ icon: Icon, t, d }) => (
          <div key={t} className="group relative hover-lift rounded-3xl bg-card border border-border/50 p-8 shadow-card overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl group-hover:bg-gold/20 transition-colors" />
            <div className="relative">
              <div className="h-14 w-14 rounded-2xl bg-gradient-navy grid place-items-center mb-5">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy">{t}</h3>
              <p className="text-muted-foreground mt-3">{d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image 
              src={shopCollage} 
              alt="Inside S.A. Traders warehouse — packaging stock" 
              className="rounded-3xl shadow-elegant w-full h-auto" 
              placeholder="blur" 
              // Next.js automatically calculates width/height from the static local import
            />
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-elegant">
              <div className="font-display text-2xl font-bold text-gradient-gold">Est. 1975</div>
              <div className="text-xs text-muted-foreground">Trusted Heritage</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Step Inside</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
              A warehouse stocked for <span className="text-gradient-gold">every brand</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              From caps and jars to bottles and containers — thousands of SKUs ready to ship. Decades of stocking discipline behind every order.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {["1000+ SKUs in stock", "Bulk ready inventory", "Quality-checked lots", "Same-day dispatch"].map((x) => (
                <li key={x} className="flex items-center gap-2 text-navy/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />{x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-navy text-white py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-3 glass-dark rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-gold mb-5">
            Testimonial
          </div>
          <p className="font-display text-2xl md:text-4xl leading-snug">
            "S.A. Traders has been our reliable packaging partner for years — premium quality, on-time delivery and unmatched service."
          </p>
          <div className="mt-6 text-gold font-semibold">— A trusted partner brand</div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}