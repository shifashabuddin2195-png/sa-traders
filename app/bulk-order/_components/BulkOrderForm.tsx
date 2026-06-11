"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function BulkOrderForm() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const text = `Hello S.A. Traders, bulk order enquiry:%0A%0AName: ${fd.get("name")}%0ACompany: ${fd.get("company")}%0APhone: ${fd.get("phone")}%0AProduct: ${fd.get("product")}%0AQuantity: ${fd.get("qty")}%0ANotes: ${fd.get("notes")}`;
    window.open(`https://wa.me/919839661544?text=${text}`, "_blank");
    toast.success("Opening WhatsApp with your enquiry…");
    setTimeout(() => setSending(false), 800);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border shadow-elegant p-7 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input 
          required 
          name="name" 
          placeholder="Your name" 
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" 
        />
        <input 
          required 
          name="company" 
          placeholder="Company" 
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" 
        />
      </div>
      <input 
        required 
        name="phone" 
        placeholder="Phone / WhatsApp" 
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" 
      />
      <div className="grid grid-cols-2 gap-4">
        <input 
          required 
          name="product" 
          placeholder="Product type" 
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" 
        />
        <input 
          required 
          name="qty" 
          placeholder="Quantity (e.g. 5000)" 
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" 
        />
      </div>
      <textarea 
        name="notes" 
        placeholder="Notes (sizes, neck, colour, label…)" 
        rows={4} 
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" 
      />
      <button 
        disabled={sending} 
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-navy text-white font-semibold py-3.5 hover:scale-[1.02] transition-transform disabled:opacity-60"
      >
        <MessageCircle className="h-4 w-4" /> 
        {sending ? "Sending…" : "Send Bulk Enquiry"}
      </button>
    </form>
  );
}