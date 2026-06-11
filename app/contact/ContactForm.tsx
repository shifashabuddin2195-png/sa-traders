"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border/50 p-8 md:p-10 shadow-elegant">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-navy">Send Us a Message</h3>
      <p className="text-muted-foreground mt-2 text-sm">Fill the form and our team will reach out shortly.</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
        <Field label="Subject" name="subject" required className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">Message</label>
          <textarea 
            name="message" 
            rows={5} 
            required 
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 transition" 
            placeholder="Tell us about your packaging requirements..." 
          />
        </div>
      </div>

      <button 
        disabled={sending} 
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-navy text-white font-semibold px-7 py-4 shadow-card hover:scale-[1.03] transition disabled:opacity-60"
      >
        {sending ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
      </button>
    </form>
  );
}

// Helper component for form fields
function Field({ 
  label, 
  name, 
  type = "text", 
  required, 
  className = "" 
}: { 
  label: string; 
  name: string; 
  type?: string; 
  required?: boolean; 
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 transition"
      />
    </div>
  );
}