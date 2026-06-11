import { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ — S.A. Traders Packaging",
  description: "Frequently asked questions about our bottles, caps, MOQs, customisation, lead times and delivery.",
};

export default function FAQPage() {
  return <FAQClient />;
}