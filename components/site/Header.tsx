"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import logo from "@/public/logo.png";
import { useCart } from "@/lib/cart";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/why-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { 
    setOpen(false); 
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-gradient-navy text-white/80 text-xs">
        <div className="container mx-auto flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-gold" /> +91 98396 61544 · +91 95653 44979
            </span>
            <span className="hidden lg:inline">76 Motilal Bose Road, Naya Goan (East), Lucknow</span>
          </div>
          <span>Fri–Wed · 10:00 AM – 8:00 PM · Closed Thu</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-card" : "bg-background/60 backdrop-blur"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src={logo} 
              alt="S.A. Traders logo" 
              className="h-12 w-12 object-contain transition-transform group-hover:scale-105" 
              width={48} 
              height={48} 
            />
            <div className="leading-tight">
              <div className="font-display text-lg md:text-xl font-bold text-navy">S.A. TRADERS</div>
              <div className="text-[10px] tracking-[0.25em] text-gold uppercase">Packaging Solutions</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const isActive = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-navy [&>span]:scale-x-100" : "text-foreground/80 hover:text-navy"
                  }`}
                >
                  {n.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-gold transition-transform origin-left scale-x-0 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="h-4 w-4 text-navy" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] grid place-items-center text-[10px] font-bold rounded-full bg-gradient-gold text-navy-deep px-1">
                  {count}
                </span>
              )}
            </Link>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-navy text-white px-5 py-2.5 text-sm font-semibold shadow-card hover:shadow-elegant transition-all hover:scale-[1.03]"
            >
              Get in Touch
            </Link>
            <button
              aria-label="Menu"
              className="lg:hidden p-2 rounded-md hover:bg-secondary"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        {open && (
          <div className="lg:hidden border-t border-border glass animate-fade-in">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV.map((n) => {
                const isActive = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
                
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`px-3 py-3 rounded-lg text-sm font-medium ${
                      isActive ? "bg-secondary text-navy" : "hover:bg-secondary"
                    }`}
                  >
                    {n.label}
                  </Link>
                );
              })}
              <Link href="/contact" className="mt-2 inline-flex justify-center rounded-full bg-gradient-navy text-white px-5 py-3 text-sm font-semibold">
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}