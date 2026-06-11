"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import hero from "@/assets/hero-bottles.jpg";
import { CTABanner, PageHero } from "../about/page";

const FAQS = [
  { q: "What is the minimum order quantity (MOQ)?", a: "MOQ varies by product — most bottles start at 500 units, caps at 1000 units. Custom moulds typically start at 5,000 units." },
  { q: "Do you offer customisation and private labels?", a: "Yes. We provide custom shapes, colours, frosting, screen printing and private label design support for bulk clients." },
  { q: "What are your lead times?", a: "Stock items ship in 2–4 working days. Custom orders typically take 7–15 working days depending on complexity." },
  { q: "Do you deliver pan-India?", a: "Yes — we have a trusted logistics network covering all major Indian cities with real-time tracking." },
  { q: "Can I get samples before ordering?", a: "Absolutely. We dispatch product samples on request to help you evaluate quality before placing a bulk order." },
  { q: "Are your bottles food and pharma grade?", a: "Yes — our glass and PET bottles are food-grade certified, and we offer USP Type-III amber glass for pharma applications." },
  { q: "What payment methods do you accept?", a: "We accept bank transfer (NEFT/RTGS), UPI and cheque. Credit terms are available for established clients." },
  { q: "Do you export internationally?", a: "Yes, we serve international clients with appropriate documentation and freight forwarding partnerships." },
];

export default function FAQClient() {
  const [open, setOpen] = useState<number | null>(0);
  
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions, <span className="text-gradient-gold">answered</span></>}
        subtitle="Everything you need to know before placing your first order."
        image={hero}
      />

      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl bg-card border border-border shadow-card overflow-hidden transition-all">
                <button 
                  onClick={() => setOpen(isOpen ? null : i)} 
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base md:text-lg font-semibold text-navy">
                    {f.q}
                  </span>
                  <span className="h-8 w-8 grid place-items-center rounded-full bg-gradient-gold text-navy-deep shrink-0 transition-transform">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}