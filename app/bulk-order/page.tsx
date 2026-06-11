import { Metadata } from "next";
import Link from "next/link";
import { Truck, Package, Tag, Award, ArrowRight } from "lucide-react";
import hero from "@/assets/warehouse.jpg";
// Adjust this import path depending on where you placed these shared components
import { PageHero, CTABanner } from "@/app/about/page"; 
import { BulkOrderForm } from "./_components/BulkOrderForm";

export const metadata: Metadata = {
  title: "Bulk Orders & Wholesale Pricing — S.A. Traders",
  description: "Get wholesale pricing on bulk packaging orders. Custom moulds, private labels and pan-India delivery.",
};

const perks = [
  { icon: Tag, t: "Best Wholesale Prices", d: "Tiered pricing for bulk orders with significant discounts." },
  { icon: Package, t: "Custom Moulds & Labels", d: "Branded packaging tailored to your product line." },
  { icon: Truck, t: "Pan-India Logistics", d: "Reliable shipping across India with real-time tracking." },
  { icon: Award, t: "Dedicated Account Manager", d: "A single point of contact for your end-to-end order." },
];

export default function BulkOrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Bulk Orders"
        title={<>Wholesale Packaging at <span className="text-gradient-gold">Industry-Best Rates</span></>}
        subtitle="Get tiered pricing, custom moulds and pan-India delivery on bulk orders of 1,000+ units."
        image={hero}
      />

      <section className="container mx-auto px-6 py-20 grid md:grid-cols-4 gap-5">
        {perks.map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-3xl bg-card border border-border p-6 shadow-card hover-lift">
            <div className="h-12 w-12 rounded-2xl bg-gradient-gold grid place-items-center mb-4 shadow-glow">
              <Icon className="h-5 w-5 text-navy-deep" />
            </div>
            <div className="font-display text-lg font-bold text-navy">{t}</div>
            <p className="text-sm text-muted-foreground mt-2">{d}</p>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="gold-divider" />
            <span className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Request a Quote</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">Tell us what you need</h2>
          <p className="mt-4 text-muted-foreground">
            Share your requirements and our team will reply within 4 working hours with a tailored quote, lead times and samples.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex gap-3"><Award className="h-5 w-5 text-gold mt-0.5" /> 50+ years of trusted experience since 1975</div>
            <div className="flex gap-3"><Truck className="h-5 w-5 text-gold mt-0.5" /> Pan-India delivery, 5–7 days</div>
            <div className="flex gap-3"><Package className="h-5 w-5 text-gold mt-0.5" /> Customisation from MOQ 1,000</div>
          </div>
          <Link href="/products" className="mt-8 inline-flex items-center gap-2 text-gold font-semibold">
            Browse Catalogue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Client Component Form */}
        <BulkOrderForm />
      </section>

      <CTABanner />
    </>
  );
}