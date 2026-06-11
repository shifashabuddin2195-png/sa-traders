import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import hero from "@/assets/hero-bottles.jpg";
// Adjust this import path depending on where you placed the PageHero component
import { PageHero } from "@/app/about/page"; 
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact S.A. Traders — Get a Quote for Premium Packaging",
  description: "Reach S.A. Traders for bulk orders, samples and custom packaging. Call, WhatsApp or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        eyebrow="Contact Us" 
        title={<>Let's Build Something <span className="text-gradient-gold">Premium</span></>} 
        subtitle="Bulk pricing, samples or custom enquiries — our team is ready to help." 
        image={hero} 
      />

      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        {/* Info cards */}
        <div className="space-y-4">
          {[
            { icon: Phone, t: "Call Us", d: "+91 98396 61544\n+91 95653 44979" },
            { icon: Mail, t: "Email Us", d: "satraders960@gmail.com" },
            { icon: MapPin, t: "Visit Us", d: "76 Motilal Bose Road,\nNaya Goan (East), Lucknow" },
            { icon: Clock, t: "Working Hours", d: "Open Fri – Wed\n10:00 AM – 8:00 PM\nClosed: Thursday" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="hover-lift rounded-2xl bg-card border border-border/50 p-6 shadow-card flex gap-4">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-gold grid place-items-center">
                <Icon className="h-5 w-5 text-navy-deep" />
              </div>
              <div>
                <div className="font-semibold text-navy">{t}</div>
                <p className="text-sm text-muted-foreground whitespace-pre-line mt-1">{d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Component Form */}
        <ContactForm />
      </section>

      {/* Map */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-3xl overflow-hidden shadow-elegant border border-border/50 aspect-[16/8] bg-muted">
          <iframe
            title="S.A. Traders location"
            src="https://www.google.com/maps?q=Lucknow,+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}