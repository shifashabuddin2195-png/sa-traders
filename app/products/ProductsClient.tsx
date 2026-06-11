"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, MessageCircle, Filter, Package2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import hero from "@/assets/hero-bottles.jpg";
import { products, categories, type Category, type Product } from "@/app/data/products";
import { useCart } from "@/lib/cart";
import Image from "next/image";
import { CTABanner, PageHero } from "@/components/site/PageShared";

const CATS: ("All" | Category)[] = ["All", ...categories.map((c) => c.name)];

export default function ProductsClient() {
  const [cat, setCat] = useState<"All" | Category>("All");
  const [q, setQ] = useState("");
  const { add } = useCart();

  const filtered = useMemo(() => {
    return products.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        (q === "" || p.name.toLowerCase().includes(q.toLowerCase()) || p.tagline.toLowerCase().includes(q.toLowerCase())),
    );
  }, [cat, q]);

  return (
    <>
      <PageHero
        eyebrow="Our Catalogue"
        title={<>Premium Packaging <span className="text-gradient-gold">for Every Brand</span></>}
        subtitle="Browse our complete range of 200+ packaging SKUs across 23+ categories."
        image={hero}
      />

      {/* Filters */}
      <section className="container mx-auto px-6 -mt-12 relative z-10">
        <div className="glass rounded-3xl shadow-elegant p-5 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search bottles, caps, jars…"
                className="w-full rounded-full border border-border bg-background pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Filter className="h-4 w-4" /> {filtered.length} products
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  cat === c
                    ? "bg-gradient-navy text-white shadow-card"
                    : "bg-secondary text-foreground/70 hover:bg-secondary/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">
            <Package2 className="h-12 w-12 mx-auto mb-3 text-gold" />
            No products match your search.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <ProductCard 
                key={p.slug} 
                p={p} 
                delay={i * 40} 
                onAdd={() => { 
                  add(p.slug); 
                  toast.success(`${p.name} added to cart`); 
                }} 
              />
            ))}
          </div>
        )}
      </section>

      <CTABanner />
    </>
  );
}

function ProductCard({ p, delay, onAdd }: { p: Product; delay: number; onAdd: () => void }) {
  const waUrl = `https://wa.me/919839661544?text=${encodeURIComponent(`Hi, I'd like to enquire about: ${p.name} (${p.price}, ${p.moq}).`)}`;
  
  return (
    <div
      className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 shadow-card hover-lift animate-fade-up flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-soft">
        <Image
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width={600}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
        {p.badge && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-gradient-gold text-navy-deep text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-glow">
            <Sparkles className="h-3 w-3" /> {p.badge}
          </div>
        )}
        <div className="absolute top-3 right-3 glass text-[10px] tracking-widest uppercase font-semibold text-navy rounded-full px-2.5 py-1">
          {p.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-navy">{p.name}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.tagline}</p>
        
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="font-semibold text-gold">{p.price}</span>
          <span className="text-muted-foreground">{p.moq}</span>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={onAdd}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-navy text-white text-xs font-semibold py-2.5 hover:scale-[1.03] transition-transform"
          >
            <ShoppingCart className="h-3.5 w-3.5" /> Add
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] text-white text-xs font-semibold py-2.5 hover:scale-[1.03] transition-transform"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Enquire
          </a>
        </div>
        
        <Link
          href="/contact"
          className="mt-2 text-center text-xs font-semibold text-navy/70 hover:text-gold transition-colors"
        >
          Request a quote →
        </Link>
      </div>
    </div>
  );
}