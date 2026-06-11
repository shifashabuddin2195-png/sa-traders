import { Metadata } from "next";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, CheckCircle2, Award, Heart, Target, Eye } from "lucide-react";
import warehouse from "@/public/why-choose-us-shop.jpg";
import hero from "@/public/hero-bottles.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABanner, PageHero } from "@/components/site/PageShared";

export const metadata: Metadata = {
  title: "About S.A. Traders — Trusted Packaging Partner",
  description: "Learn about S.A. Traders & S.A. Brothers — 50+ years of premium packaging expertise serving brands across India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero 
        eyebrow="About Us" 
        title={<>Crafting Trust in <span className="text-gradient-gold">Premium Packaging</span></>} 
        subtitle="Three generations of dedication to quality, reliability and brand excellence." 
        image={hero} 
      />

      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Image 
          src={warehouse} 
          alt="Warehouse" 
          className="rounded-3xl shadow-elegant" 
          // Next.js Image handles lazy loading by default
          width={1200} 
          height={900} 
        />
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="gold-divider" />
            <span className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Our Story</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">
            A Legacy of <span className="text-gradient-gold">Quality</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            S.A. Traders &amp; S.A. Brothers is a trusted name in the field of Glass Bottles, PET Bottles, Plastic Packing Goods, P.P. Caps &amp; Chemicals. Established in 1975, with more than <strong>50 years of experience</strong> and three generations of dedication, we have grown into one of Lucknow's most reliable packaging suppliers — serving pharma, cosmetic, food, beverage and chemical brands with the same trust our founders started with.
          </p>
          <p className="mt-4 text-muted-foreground">
            From small startups to large established brands, our packaging solutions help businesses present their products with confidence, consistency and class.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Pan-India distribution network",
              "Premium hand-picked materials",
              "Strict quality assurance",
              "Custom bulk orders & private labels",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold" /> 
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gradient-soft py-24">
        <div className="container mx-auto px-6">
          <SectionHeading eyebrow="Our Values" title={<>What Drives <span className="text-gradient-gold">S.A. Traders</span></>} />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, t: "Our Mission", d: "Deliver premium-grade packaging that elevates every brand we serve, with uncompromising quality and on-time reliability." },
              { icon: Eye, t: "Our Vision", d: "To be India's most trusted packaging partner — known for elegance, durability and a perfect customer experience." },
              { icon: Heart, t: "Our Promise", d: "Honest pricing, transparent service and a relationship that grows with your business." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="hover-lift rounded-3xl bg-card border border-border/50 p-8 shadow-card">
                <div className="h-14 w-14 rounded-2xl bg-gradient-gold grid place-items-center mb-5">
                  <Icon className="h-6 w-6 text-navy-deep" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{t}</h3>
                <p className="text-muted-foreground mt-3">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["50+ Years", "Heritage Since 1975"], 
            ["100K+", "Satisfied Customers"], 
            ["1000+", "Products"], 
            ["Pan-India", "Shipping Reach"]
          ].map(([n, l]) => (
            <div key={l} className="rounded-3xl bg-gradient-navy text-white p-8 text-center shadow-card hover-lift">
              <Award className="h-8 w-8 mx-auto text-gold mb-3" />
              <div className="font-display text-4xl font-bold">{n}</div>
              <div className="text-white/70 text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

// Reusable Components


