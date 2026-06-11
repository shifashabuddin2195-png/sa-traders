import { Metadata } from "next";
import Image from "next/image";
import hero from "@/assets/hero-bottles.jpg";
import warehouse from "@/assets/warehouse.jpg";
import about from "@/assets/about-warehouse.jpg";
import glass from "@/assets/glass-bottles.jpg";
import pet from "@/assets/pet-bottles.jpg";
import chem from "@/assets/chemical-bottles.jpg";
import caps from "@/assets/pp-caps.jpg";
import plastic from "@/assets/plastic-goods.jpg";
// Adjust this import path depending on where you placed these shared components
import { PageHero, CTABanner } from "@/app/about/page";

export const metadata: Metadata = {
  title: "Gallery — S.A. Traders Packaging Showcase",
  description: "Visual showcase of our premium packaging range, warehouse and product collections.",
};

const items = [
  { src: hero, span: "lg:col-span-2 lg:row-span-2", label: "Premium Bottle Collection" },
  { src: glass, label: "Glass Bottles" },
  { src: pet, label: "PET Bottles" },
  { src: warehouse, span: "lg:col-span-2", label: "Our Warehouse" },
  { src: chem, label: "Chemical Bottles" },
  { src: caps, label: "P.P. Caps" },
  { src: plastic, label: "Plastic Packing" },
  { src: about, span: "lg:col-span-2", label: "Inventory" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero 
        eyebrow="Gallery" 
        title={<>A Glimpse of Our <span className="text-gradient-gold">Craftsmanship</span></>} 
        subtitle="From shelf-ready products to our spacious warehouse — explore the world of S.A. Traders." 
        image={warehouse} 
      />

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl shadow-card hover-lift ${it.span ?? ""}`}>
              <Image 
                src={it.src} 
                alt={it.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                // When using static imports (e.g., from "@/assets/..."), 
                // Next.js automatically calculates and injects the width and height.
                placeholder="blur" // Bonus: Next.js can automatically show a blurred placeholder for local images!
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <div className="text-xs text-gold tracking-widest uppercase">S.A. Traders</div>
                <div className="font-display text-lg text-white">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}