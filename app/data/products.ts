import { StaticImageData } from "next/image";

import glass from "@/public/glass-bottles.jpg";
import pet from "@/public/pet-bottles.jpg";
import chemical from "@/public/chemical-bottles.jpg";
import caps from "@/public/pp-caps.jpg";
import plastic from "@/public/plastic-goods.jpg";
import homeoGlobules from "@/public/homeo-globules.webp";
import homeoVials from "@/public/homeo-plastic-vials.webp";
import flipTopJars from "@/public/flip-top-jars.webp";
import amberPump from "@/public/amber-pump-bottle.webp";
import triggerSprayColored from "@/public/trigger-spray-colored.jpg";
import oilBottlesClear from "@/public/oil-bottles-clear.jpg";
import airlessLotion from "@/public/airless-lotion-pump.webp";
import airtightStorageSet from "@/public/airtight-storage-set.jpg";
import hdpeBottlesRange from "@/public/hdpe-bottles-range.jpg";
import wideMouthJars from "@/public/wide-mouth-jars.jpg";
import milkBottles from "@/public/milk-bottles-500.webp";
import shakeGlassBottle from "@/public/shake-glass-bottle.webp";
import amberDropper from "@/public/amber-dropper-bottle.jpg";
import chemicalHdpe from "@/public/chemical-hdpe-bottles.jpg";
import cosmeticCreamJars from "@/public/cosmetic-cream-jars.jpg";
import pharmaRange from "@/public/pharma-bottles-range.webp";
import glassTriggerSpray from "@/public/glass-trigger-spray.webp";
import lotionBottle from "@/public/lotion-bottle.avif";
import sanitizerBottles from "@/public/sanitizer-bottles.jpg";
import sprayBottleClear from "@/public/spray-bottle-clear.jpg";
import ppCapsGold from "@/public/pp-caps-gold.jpg";
import eyeDropperBottles from "@/public/eye-dropper-bottles.avif";

export type Category =
  | "Glass"
  | "PET"
  | "Plastic"
  | "Chemical"
  | "Cosmetic"
  | "Pharma"
  | "Caps"
  | "Containers";

export type Product = {
  slug: string;
  name: string;
  image: StaticImageData | string;
  category: Category;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  moq: string;
  badge?: "Featured" | "Best Seller" | "New" | "Premium";
};

export const categories: { name: Category; image: StaticImageData | string; blurb: string }[] = [
  { name: "Glass", image: shakeGlassBottle, blurb: "Crystal clarity for premium brands" },
  { name: "PET", image: oilBottlesClear, blurb: "Lightweight and shatterproof" },
  { name: "Plastic", image: hdpeBottlesRange, blurb: "Complete packaging ecosystem" },
  { name: "Chemical", image: chemicalHdpe, blurb: "Built for industrial use" },
  { name: "Cosmetic", image: cosmeticCreamJars, blurb: "Elegant cosmetic packaging" },
  { name: "Pharma", image: pharmaRange, blurb: "Sterile pharma-grade range" },
  { name: "Caps", image: ppCapsGold, blurb: "Perfect seal, every time" },
  { name: "Containers", image: airtightStorageSet, blurb: "Jars, drums & storage" },
];

export const products: Product[] = [
  { slug: "glass-bottles", name: "Glass Bottles", image: glass, category: "Glass", tagline: "Crystal clarity, premium feel", description: "Amber & flint glass bottles in a wide range of sizes for pharma, beverages, cosmetics & food.", features: ["Amber & Flint", "30ml – 1000ml", "Food & Pharma grade"], price: "From ₹8/pc", moq: "MOQ 500", badge: "Best Seller" },
  { slug: "pet-bottles", name: "PET Bottles", image: pet, category: "PET", tagline: "Lightweight, shatterproof, modern", description: "Crystal-clear PET bottles engineered for beverages, oils, sanitisers and personal care.", features: ["100% Food grade PET", "Custom moulds", "Bulk supply"], price: "From ₹3/pc", moq: "MOQ 1000", badge: "Featured" },
  { slug: "plastic-bottles", name: "Plastic Bottles", image: plastic, category: "Plastic", tagline: "Versatile and durable", description: "HDPE & LDPE bottles for industrial, household and personal care applications.", features: ["HDPE/LDPE", "Multiple necks", "Custom colors"], price: "From ₹4/pc", moq: "MOQ 500" },
  { slug: "chemical-bottles", name: "Chemical Bottles", image: chemicalHdpe, category: "Chemical", tagline: "Built for industrial strength", description: "Heavy-duty bottles for reactive, acidic and laboratory grade chemicals.", features: ["Acid resistant", "Tamper-evident", "5ml – 5L"], price: "From ₹12/pc", moq: "MOQ 200" },
  { slug: "cosmetic-bottles", name: "Cosmetic Bottles", image: cosmeticCreamJars, category: "Cosmetic", tagline: "Elegant beauty packaging", description: "Premium bottles for serums, toners and skincare lines with frosted & matte finishes.", features: ["Frosted finish", "Luxury feel", "Custom labels"], price: "From ₹10/pc", moq: "MOQ 300", badge: "Premium" },
  { slug: "pharma-bottles", name: "Pharma Bottles", image: pharmaRange, category: "Pharma", tagline: "Sterile, certified, reliable", description: "USP Type-III amber glass bottles for syrups, tablets and pharmaceutical formulations.", features: ["USP Type-III", "Tamper-proof caps", "Pharma certified"], price: "From ₹9/pc", moq: "MOQ 500" },
  { slug: "spray-bottles", name: "Spray Bottles", image: sprayBottleClear, category: "Plastic", tagline: "Smooth, precise dispense", description: "Clear PET spray bottles with fine-mist heads — ideal for cosmetics, sanitisers and household sprays.", features: ["Fine mist nozzle", "Lockable head", "30ml – 500ml"], price: "From ₹14/pc", moq: "MOQ 250", badge: "New" },
  { slug: "sanitizer-bottles", name: "Sanitizer Bottles", image: sanitizerBottles, category: "Plastic", tagline: "Hygiene-ready packaging", description: "PET sanitizer & mist bottles available in 20ml – 200ml with leak-proof pump heads.", features: ["20ml – 200ml", "Leak proof", "Food grade PET"], price: "From ₹5/pc", moq: "MOQ 500" },
  { slug: "dropper-bottles", name: "Dropper Bottles", image: amberDropper, category: "Cosmetic", tagline: "Precision serum packaging", description: "Amber and clear glass dropper bottles for essential oils, serums and tinctures.", features: ["Glass dropper", "Amber/Clear", "10ml – 100ml"], price: "From ₹16/pc", moq: "MOQ 200", badge: "Premium" },
  { slug: "juice-bottles", name: "Juice Bottles", image: milkBottles, category: "Glass", tagline: "Shelf-ready beverage bottles", description: "Clear glass juice and beverage bottles with airtight caps for premium presentation.", features: ["200ml – 1L", "Airtight cap", "Food grade"], price: "From ₹11/pc", moq: "MOQ 300" },
  { slug: "plastic-jars", name: "Plastic Jars", image: wideMouthJars, category: "Containers", tagline: "Versatile wide-mouth jars", description: "Wide-mouth PET & HDPE jars for spices, dry foods, nutraceuticals and cosmetics.", features: ["Wide mouth", "Tamper-evident", "100g – 5kg"], price: "From ₹7/pc", moq: "MOQ 300", badge: "Best Seller" },
  { slug: "hdpe-bottles", name: "HDPE Bottles", image: hdpeBottlesRange, category: "Plastic", tagline: "Tough, opaque and reliable", description: "Industrial HDPE bottles for chemicals, agro and pharma packaging.", features: ["HDPE grade", "Opaque finish", "100ml – 5L"], price: "From ₹6/pc", moq: "MOQ 500" },
  { slug: "storage-containers", name: "Storage Containers", image: airtightStorageSet, category: "Containers", tagline: "Smart kitchen & industrial storage", description: "Stackable storage containers in food and industrial grades with airtight seals.", features: ["Airtight seal", "Stackable", "Multiple sizes"], price: "From ₹15/pc", moq: "MOQ 200" },
  { slug: "lotion-bottles", name: "Lotion Bottles", image: lotionBottle, category: "Cosmetic", tagline: "Smooth-dispense beauty bottles", description: "Premium PET lotion bottles with smooth pump dispensers for personal care and skincare brands.", features: ["Premium pump", "Matte/Glossy", "100ml – 500ml"], price: "From ₹12/pc", moq: "MOQ 250", badge: "Featured" },
  { slug: "oil-bottles", name: "Oil Bottles", image: oilBottlesClear, category: "PET", tagline: "Edible & essential oil packaging", description: "Food-grade PET and glass oil bottles in elegant shapes for premium presentation.", features: ["Food grade", "Leakproof", "100ml – 5L"], price: "From ₹8/pc", moq: "MOQ 300" },
  { slug: "trigger-spray-bottles", name: "Trigger Spray Bottles", image: triggerSprayColored, category: "Plastic", tagline: "Heavy-duty cleaning spray", description: "Trigger spray bottles for household cleaners, disinfectants and gardening.", features: ["Trigger head", "500ml – 1L", "Chemical resistant"], price: "From ₹22/pc", moq: "MOQ 200" },
  { slug: "pump-bottles", name: "Pump Bottles", image: amberPump, category: "Cosmetic", tagline: "Premium pump dispensing", description: "Luxury pump bottles for shampoos, conditioners, lotions and liquid soaps.", features: ["Premium pump", "Luxury finish", "200ml – 1L"], price: "From ₹18/pc", moq: "MOQ 250" },
  { slug: "flip-top-caps", name: "Flip Top Caps", image: caps, category: "Caps", tagline: "Quick-access closures", description: "Flip-top caps for sanitisers, shampoos and edible oils in multiple neck sizes.", features: ["All neck sizes", "Vibrant colors", "Leak-proof"], price: "From ₹1.5/pc", moq: "MOQ 1000" },
  { slug: "pp-caps", name: "P.P. Caps", image: ppCapsGold, category: "Caps", tagline: "Perfect seal, every time", description: "Premium metallic & polypropylene caps in gold, silver and custom colours — airtight finish for every neck size.", features: ["Gold / Silver / Custom", "All neck sizes", "Tamper-proof"], price: "From ₹1/pc", moq: "MOQ 1000", badge: "Best Seller" },
  { slug: "wide-mouth-containers", name: "Wide Mouth Containers", image: plastic, category: "Containers", tagline: "Easy-fill, easy-access", description: "Wide-mouth containers ideal for protein, supplements, spices and dry foods.", features: ["Easy fill", "PET/HDPE", "200g – 2kg"], price: "From ₹14/pc", moq: "MOQ 200" },
  { slug: "eye-dropper-bottles", name: "Eye Dropper Bottles", image: eyeDropperBottles, category: "Pharma", tagline: "Precision eye-drop packaging", description: "Sterile eye dropper bottles with fine-tip nozzles — ideal for ophthalmic, pharma and serum formulations.", features: ["Fine-tip nozzle", "Sterile grade", "5ml – 30ml"], price: "From ₹4/pc", moq: "MOQ 500", badge: "New" },
  { slug: "homeo-globules", name: "Homeopathic Globules Bottles", image: homeoGlobules, category: "Pharma", tagline: "Amber glass for homeopathy", description: "Premium amber glass bottles for homeopathic globules, pills and dilutions — UV protected.", features: ["Amber glass", "UV protected", "5g – 100g"], price: "From ₹7/pc", moq: "MOQ 500", badge: "Best Seller" },
  { slug: "homeo-dispensing-vials", name: "Homeopathic Dispensing Vials", image: homeoVials, category: "Pharma", tagline: "Colour-cap dispensing vials", description: "Transparent plastic dispensing vials with vibrant colour caps for homeopathic clinics and pharmacies.", features: ["Colour caps", "Leak-proof", "2 dram – 4 dram"], price: "From ₹2/pc", moq: "MOQ 1000", badge: "New" },
  { slug: "flip-top-cream-jars", name: "Flip Top Cream Jars", image: flipTopJars, category: "Cosmetic", tagline: "Hinged-lid cream jars", description: "White plastic cream and balm jars with attached flip-top lids — ideal for ointments and cosmetics.", features: ["Attached flip lid", "Food/Cosmetic grade", "10g – 100g"], price: "From ₹6/pc", moq: "MOQ 500" },
  { slug: "airless-pump-bottles", name: "Airless Pump Bottles", image: airlessLotion, category: "Cosmetic", tagline: "Premium airless skincare", description: "Refillable airless pump bottles for serums, lotions and premium skincare formulations.", features: ["Airless tech", "Refillable", "30ml / 50ml / 100ml"], price: "From ₹35/pc", moq: "MOQ 200", badge: "Premium" },
  { slug: "shake-glass-bottles", name: "Shake & Milk Glass Bottles", image: shakeGlassBottle, category: "Glass", tagline: "Dairy, shakes & beverages", description: "Premium clear glass bottles with metal lug caps — perfect for milk, shakes, smoothies and juices.", features: ["Metal lug cap", "200ml – 500ml", "Food grade"], price: "From ₹13/pc", moq: "MOQ 300", badge: "New" },
  { slug: "glass-trigger-spray", name: "Glass Trigger Spray Bottles", image: glassTriggerSpray, category: "Glass", tagline: "Refillable glass sprayers", description: "Reusable clear glass spray bottles with heavy-duty trigger heads for cleaners and beauty mists.", features: ["Glass body", "Heavy-duty trigger", "250ml – 500ml"], price: "From ₹45/pc", moq: "MOQ 100", badge: "Premium" },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}