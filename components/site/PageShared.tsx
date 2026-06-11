import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, CheckCircle2, Award, Heart, Target, Eye } from "lucide-react";

export function PageHero({ 
  eyebrow, 
  title, 
  subtitle, 
  image 
}: { 
  eyebrow: string; 
  title: React.ReactNode; 
  subtitle?: string; 
  image: StaticImageData | string; 
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-25">
        <Image 
          src={image} 
          alt="" 
          className="w-full h-full object-cover" 
          width={1600} 
          height={800} 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep" />
      <div className="container mx-auto relative px-6 py-24 md:py-32 text-center max-w-3xl">
        <div className="inline-flex items-center gap-3 glass-dark rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-gold mb-5">
          {eyebrow}
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-white/75 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}


export function CTABanner() {
  return (
    <section className="container mx-auto px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-14 text-white shadow-elegant">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl md:text-4xl font-bold">Let's package something exceptional together.</h3>
            <p className="text-white/75 mt-3">Reach out for samples, bulk pricing or custom enquiries.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy-deep font-semibold px-7 py-4 shadow-glow hover:scale-[1.04] transition-transform whitespace-nowrap">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}