import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import logo from "@/public/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-white/85 mt-24">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image 
              src={logo} 
              alt="S.A. Traders" 
              className="h-14 w-14 object-contain" 
              width={56} 
              height={56} 
              // Next.js Image handles lazy loading by default
            />
            <div>
              <div className="font-display text-xl text-white">S.A. TRADERS</div>
              <div className="text-[10px] tracking-[0.25em] text-gold uppercase">Packaging Solutions</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            Trusted dealers in Glass Bottles, PET Bottles, Plastic Packing Goods, P.P. Caps & Chemicals — serving industries with quality for over 50+ years.
          </p>
          <div className="flex gap-3 mt-6">
            {[FaInstagram, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-10 w-10 grid place-items-center rounded-full glass-dark hover:bg-gold hover:text-navy-deep transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "Home"], ["/about", "About"], ["/products", "Products"],
              ["/gallery", "Gallery"], ["/why-us", "Why Choose Us"],
              ["/bulk-order", "Bulk Orders"], ["/faq", "FAQ"],
              ["/cart", "Enquiry Cart"], ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Glass Bottles</li>
            <li>PET Bottles</li>
            <li>Chemical Bottles</li>
            <li>P.P. Caps</li>
            <li>Plastic Packing Goods</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3"><Phone className="h-4 w-4 text-gold mt-0.5" /> +91 98396 61544<br />+91 95653 44979</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-gold mt-0.5" /> satraders960@gmail.com</li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold mt-0.5" /> 76 Motilal Bose Road, Naya Goan (East), Lucknow</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} S.A. Traders & S.A. Brothers. All Rights Reserved.</p>
          <p>Crafted with precision for premium packaging.</p>
        </div>
      </div>
    </footer>
  );
}