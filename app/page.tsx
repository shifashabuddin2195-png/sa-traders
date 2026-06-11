import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Award, Truck, Package, Shield, MessageCircle,
  CheckCircle2, Star, Users, Sparkles, Globe2, Factory, Quote,
  HelpCircle, Plus
} from "lucide-react";

// In Next.js, importing an image returns an object, so we will use .src below.
import hero from "@/public/hero-bottles.jpg";
import warehouse from "@/public/why-choose-us-shop.jpg";

import { SectionHeading } from "@/components/site/SectionHeading";
import { categories, products } from "./data/products";
import Image from "next/image";

export const metadata: Metadata = {
  title: "S.A. Traders — Premium Glass & PET Bottle Packaging Solutions",
  description: "Premium glass bottles, PET bottles, chemical bottles, P.P. caps and plastic packing goods. Trusted packaging partner since 1975 — over 50+ years of heritage.",
};

const trustBrands = [
  "Pharma Co.", "Aroma Labs", "Pure Spring", "Nova Chem",
  "Crystal Foods", "Apex Beverages", "Lumière", "GreenLeaf",
  "Halcyon", "Meridian", "Aqualis", "Sunbloom",
];

const testimonials = [
  {
    quote: "S.A. Traders has been our packaging partner for years. Quality is unmatched and delivery always on time.",
    name: "Rohan Mehta",
    role: "Founder, Pure Spring Beverages",
  },
  {
    quote: "From PET bottles to specialty caps — every order is consistent, premium and elegantly finished.",
    name: "Anjali Rao",
    role: "Operations Head, Aroma Labs",
  },
  {
    quote: "A truly international standard supplier. Their glass bottles elevated our entire product line.",
    name: "Karan Shah",
    role: "Brand Director, Lumière Cosmetics",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-mesh bg-noise text-white">
        {/* ambient orbs */}
        <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gold/25 blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-primary/40 blur-[140px] animate-float" style={{ animationDelay: "1.6s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full border border-white/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full border border-white/5 animate-spin-slow" style={{ animationDirection: "reverse" }} />

        <div className="container mx-auto relative px-6 pt-24 pb-32 md:pt-32 md:pb-44 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass-dark rounded-full pl-1.5 pr-4 py-1.5 text-xs tracking-[0.18em] uppercase mb-7">
              <span className="grid place-items-center h-6 w-6 rounded-full bg-gradient-gold text-navy-deep">
                <Sparkles className="h-3 w-3" />
              </span>
              <span className="text-white/85">Trusted Since 1975 · 50+ Years of Heritage</span>
            </div>
            <h1 className="font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-balance">
              Packaging,<br />
              <span className="text-gradient-gold">refined to perfection.</span>
            </h1>
            <p className="mt-7 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              Premium glass bottles, PET containers, P.P. caps and chemical packaging — engineered for brands that refuse to compromise on quality, consistency, and craft.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy-deep font-semibold px-7 py-4 shadow-glow hover:scale-[1.04] transition-transform animate-pulse-glow">
                Explore Products <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full glass-dark text-white font-semibold px-7 py-4 hover:bg-white/15 transition-colors">
                <MessageCircle className="h-4 w-4" /> Request a Quote
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-white/60">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> ISO Standard Materials</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Pan-India Logistics</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Custom Bulk Orders</div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in">
            <div className="absolute -inset-10 bg-gold/25 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] overflow-hidden ring-gold-glow">
              <img src={hero.src} alt="Premium bottles arrangement" className="w-full h-[34rem] object-cover" width={1200} height={900} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-4 shadow-elegant animate-float">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-gold grid place-items-center"><Award className="h-5 w-5 text-navy-deep" /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">ISO Standard</div>
                  <div className="font-semibold text-navy text-sm">Quality Assured</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elegant animate-float" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-navy grid place-items-center"><Globe2 className="h-5 w-5 text-gold" /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Since 1975</div>
                  <div className="font-semibold text-navy text-sm">50+ Yrs Trusted</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-10 glass-dark rounded-2xl p-4 shadow-elegant max-w-[180px]">
              <div className="flex gap-1 text-gold mb-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold" />)}
              </div>
              <p className="text-xs text-white/85 leading-snug">"Premium quality, every single shipment."</p>
            </div>
          </div>
        </div>

        {/* curve transition */}
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 left-0 w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden>
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="var(--background)" />
        </svg>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-6 -mt-16 relative z-10">
        <div className="glass rounded-3xl shadow-elegant grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60 overflow-hidden">
          {[
            { icon: Award, n: "50+ Years", l: "Heritage Since 1975" },
            { icon: Users, n: "100K+", l: "Satisfied Customers" },
            { icon: Package, n: "1000+", l: "Products" },
            { icon: Shield, n: "100%", l: "Quality Assured" },
          ].map(({ icon: Icon, n, l }) => (
            <div key={l} className="p-6 md:p-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-gold grid place-items-center shrink-0 shadow-glow">
                <Icon className="h-6 w-6 text-navy-deep" />
              </div>
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-navy">{n}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="container mx-auto px-6 mt-20">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Trusted by leading brands across industries</span>
        </div>
        <div className="relative overflow-hidden mask-fade">
          <div className="marquee-track gap-12 py-4">
            {[...trustBrands, ...trustBrands].map((b, i) => (
              <div key={i} className="flex items-center gap-3 whitespace-nowrap text-navy/60 hover:text-navy transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight">{b}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Shop by Category"
          title={<>A category for <span className="text-gradient-gold">every brand</span></>}
          subtitle="From premium glass to industrial drums — explore packaging built for every industry."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <Link
              key={c.name}
              href="/products"
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <Image src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Category</div>
                <div className="font-display text-xl font-bold">{c.name}</div>
                <p className="text-xs text-white/70 mt-1">{c.blurb}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">
                  Browse <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="container mx-auto px-6 pb-24">
        <SectionHeading
          eyebrow="Best Sellers & Featured"
          title={<>Customer <span className="text-gradient-gold">favourites</span></>}
          subtitle="The bottles, caps and containers our wholesale clients reorder the most."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.filter((p) => p.badge).slice(0, 8).map((p, i) => (
            <Link
              key={p.slug}
              href="/products"
              className="group card-tilt relative rounded-3xl overflow-hidden bg-card shadow-card border border-border/50 animate-fade-up flex flex-col"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-soft">
                <Image src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                {p.badge && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-gradient-gold text-navy-deep text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-glow">
                    <Sparkles className="h-3 w-3" /> {p.badge}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-navy">{p.name}</h3>
                <div className="mt-1 flex items-center justify-between text-xs">
                  <span className="font-semibold text-gold">{p.price}</span>
                  <span className="text-muted-foreground">{p.moq}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-gradient-navy text-white px-7 py-3.5 text-sm font-semibold hover:scale-[1.04] transition-transform">
            View Full Catalogue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-gradient-soft py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Our Process"
            title={<>From sourcing to <span className="text-gradient-gold">your shelves</span></>}
            subtitle="A meticulously refined supply chain that guarantees premium quality, every single time."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Factory, t: "Sourcing", d: "Hand-picked premium materials from certified manufacturers." },
              { icon: Shield, t: "Quality Check", d: "Multi-stage QA to meet international packaging standards." },
              { icon: Package, t: "Custom Orders", d: "Bulk and custom solutions tailored to your brand needs." },
              { icon: Truck, t: "Fast Delivery", d: "Reliable pan-India logistics with real-time tracking." },
            ].map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="relative group rounded-3xl bg-card border border-border/60 p-7 hover-lift">
                <div className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-gradient-gold grid place-items-center text-navy-deep text-sm font-bold shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="h-12 w-12 rounded-2xl bg-gradient-navy grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <div className="font-display text-xl font-bold text-navy">{t}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative bg-mesh bg-noise text-white overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center relative">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Why Choose Us</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Quality you can <span className="text-gradient-gold">truly trust</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Over 50 years and three generations of trust in the packaging industry. We deliver premium materials with the reliability your brand deserves — straight from our flagship Lucknow store.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Award, t: "Premium Quality", d: "High-grade materials for every packaging need." },
                { icon: Truck, t: "Timely Delivery", d: "On-time logistics for bulk and regular orders." },
                { icon: Package, t: "Wide Range", d: "Bottles, caps and packaging — all under one roof." },
                { icon: Shield, t: "Competitive Pricing", d: "Best quality at the most affordable rates." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="glass-dark rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <div className="h-11 w-11 rounded-xl bg-gradient-gold grid place-items-center mb-3">
                    <Icon className="h-5 w-5 text-navy-deep" />
                  </div>
                  <div className="font-semibold">{t}</div>
                  <p className="text-sm text-white/70 mt-1">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gold/15 blur-3xl rounded-full" />
            <img src={warehouse.src} alt="Inside S.A. Traders store — packaging stocked floor to ceiling" className="relative rounded-3xl shadow-elegant border border-white/10" loading="lazy" width={1400} height={900} />
            <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-5 max-w-[230px]">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}
              </div>
              <p className="text-sm text-white/85 mt-2">"Reliable supplier with consistent premium quality."</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What our <span className="text-gradient-gold">clients say</span></>}
          subtitle="Trusted by hundreds of brands across pharma, beverages, cosmetics and chemicals."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative rounded-3xl bg-card border border-border/60 p-8 shadow-card hover-lift">
              <Quote className="absolute -top-4 left-6 h-10 w-10 text-gold fill-gold/20" />
              <div className="flex gap-1 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border/60">
                <div className="font-semibold text-navy">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BULK ORDER STRIP */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-navy text-white p-10 md:p-14 shadow-elegant">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3 py-1 text-[11px] tracking-widest uppercase mb-4">
                <Package className="h-3 w-3 text-gold" /> Wholesale Pricing
              </div>
              <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight text-balance">
                Bulk orders? Get the <span className="text-gradient-gold">best wholesale rates</span> today.
              </h3>
              <p className="text-white/75 mt-3 max-w-xl">Tiered pricing, custom moulds and dedicated account managers for orders of 1,000+ units.</p>
            </div>
            <Link href="/bulk-order" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy-deep font-semibold px-7 py-4 shadow-glow hover:scale-[1.04] transition-transform whitespace-nowrap">
              Request Bulk Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="container mx-auto px-6 pb-24">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Frequently <span className="text-gradient-gold">asked questions</span></>}
          subtitle="Quick answers about MOQs, customisation, lead times and delivery."
        />
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            { q: "What is your minimum order quantity?", a: "MOQs start from 500 units for most bottles and 1,000 for caps." },
            { q: "Do you offer customisation?", a: "Yes — custom moulds, colours, frosting and private labels for bulk clients." },
            { q: "What are your lead times?", a: "Stock items ship in 2–4 days; custom orders in 7–15 working days." },
            { q: "Do you deliver pan-India?", a: "Yes, we ship across India with reliable real-time tracking." },
          ].map((f) => (
            <div key={f.q} className="rounded-2xl bg-card border border-border p-6 shadow-card hover-lift">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-navy">{f.q}</div>
                  <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors">
            See all FAQs <Plus className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <img src={warehouse.src} alt="Warehouse" className="rounded-3xl shadow-card" loading="lazy" width={1200} height={900} />
          <div className="absolute -top-6 -left-6 glass rounded-2xl p-5 shadow-elegant">
            <div className="font-display text-3xl font-bold text-gradient-gold">50+ Yrs</div>
            <div className="text-xs text-muted-foreground">Since 1975</div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-elegant">
            <div className="font-display text-3xl font-bold text-gradient-gold">100K+</div>
            <div className="text-xs text-muted-foreground">Satisfied Customers</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="gold-divider" />
            <span className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">About Us</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight text-balance">
            S.A. Traders<span className="text-gold">.</span> S.A. Brothers<span className="text-gold">.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            A trusted name in glass bottles, PET bottles, plastic packing goods, P.P. caps and chemicals. Established in 1975, with more than <strong>50 years of dedicated service</strong> and three generations behind every order, we deliver quality products and reliable customer experiences to brands across the country.
          </p>
          <ul className="mt-6 space-y-3">
            {["Pan-India distribution network", "Hand-picked premium materials", "Custom bulk orders welcome"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-foreground/80"><CheckCircle2 className="h-5 w-5 text-gold" /> {t}</li>
            ))}
          </ul>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-navy text-white px-6 py-3 text-sm font-semibold hover:scale-[1.04] transition-transform">
            Know More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-mesh bg-noise p-10 md:p-16 text-white shadow-elegant">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3 py-1 text-[11px] tracking-widest uppercase mb-5">
                <Sparkles className="h-3 w-3 text-gold" /> Let's Build Together
              </div>
              <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight text-balance">
                Ready to package your brand with <span className="text-gradient-gold">premium quality</span>?
              </h3>
              <p className="text-white/75 mt-3">Get in touch today for bulk pricing, samples and custom enquiries.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy-deep font-semibold px-7 py-4 shadow-glow hover:scale-[1.04] transition-transform whitespace-nowrap">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}