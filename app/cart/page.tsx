import { Metadata } from "next";
import { CartClient } from "./CartClient";

export const metadata: Metadata = {
  title: "Your Enquiry Cart — S.A. Traders",
  description: "Review your selected packaging products and send your bulk enquiry on WhatsApp.",
};

export default function CartPage() {
  return <CartClient />;
}