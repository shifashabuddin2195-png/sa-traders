"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart";
// Adjust import path as needed for your project structure
import { CTABanner } from "@/app/about/page";

export function CartClient() {
  const { detailed, setQty, remove, clear, whatsappUrl, count } = useCart();

  return (
    <section className="container mx-auto px-6 py-16 md:py-24 min-h-[60vh]">
      <div className="flex items-center gap-3 mb-3">
        <span className="gold-divider" />
        <span className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Enquiry Cart</span>
      </div>
      <h1 className="font-display text-3xl md:text-5xl font-bold text-navy">Your selections</h1>
      <p className="text-muted-foreground mt-2">Review your items and send a quick enquiry to our team.</p>

      {detailed.length === 0 ? (
        <div className="mt-16 rounded-3xl bg-card border border-border p-12 text-center shadow-card">
          <ShoppingBag className="h-12 w-12 text-gold mx-auto mb-4" />
          <h2 className="font-display text-2xl text-navy">Your cart is empty</h2>
          <p className="text-muted-foreground mt-2">Add products from our catalogue to get a quick wholesale quote.</p>
          <Link href="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-navy text-white px-6 py-3 text-sm font-semibold">
            Browse Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 mt-10">
          <div className="space-y-4">
            {detailed.map((item) => (
              <div key={item.slug} className="rounded-2xl bg-card border border-border shadow-card p-4 flex gap-4 items-center">
                <Image 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="h-20 w-20 rounded-xl object-cover" 
                  width={80} 
                  height={80} 
                />
                <div className="flex-1 min-w-0">
                  <div className="font-display text-lg font-bold text-navy truncate">{item.product.name}</div>
                  <div className="text-xs text-muted-foreground">{item.product.category} · {item.product.price}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setQty(item.slug, item.qty - 1)} className="h-8 w-8 grid place-items-center rounded-full bg-secondary hover:bg-secondary/70">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-10 text-center font-semibold">{item.qty}</span>
                  <button onClick={() => setQty(item.slug, item.qty + 1)} className="h-8 w-8 grid place-items-center rounded-full bg-secondary hover:bg-secondary/70">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
                <button onClick={() => remove(item.slug)} aria-label="Remove" className="h-9 w-9 grid place-items-center rounded-full text-destructive hover:bg-destructive/10">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
            <button onClick={clear} className="text-xs text-muted-foreground hover:text-destructive">Clear all</button>
          </div>

          <aside className="rounded-3xl bg-gradient-navy text-white p-7 shadow-elegant h-fit lg:sticky lg:top-28">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Summary</div>
            <div className="flex justify-between text-sm"><span>Items</span><span className="font-semibold">{detailed.length}</span></div>
            <div className="flex justify-between text-sm mt-2"><span>Total quantity</span><span className="font-semibold">{count}</span></div>
            <p className="text-xs text-white/70 mt-5">Prices vary by quantity and customisation. Send your enquiry and our team will reply with the best wholesale quote.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold py-3.5 hover:scale-[1.03] transition-transform">
              <MessageCircle className="h-4 w-4" /> Send Enquiry on WhatsApp
            </a>
            <Link href="/contact" className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold text-navy-deep font-semibold py-3.5 hover:scale-[1.03] transition-transform">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      )}

      <div className="mt-20"><CTABanner /></div>
    </section>
  );
}