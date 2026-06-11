import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — Bottles, Caps & Packaging | S.A. Traders",
  description: "Browse 23+ premium packaging categories: glass, PET, plastic, chemical, cosmetic, pharma bottles, caps and containers.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}