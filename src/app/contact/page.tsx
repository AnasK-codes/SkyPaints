import React from "react";
import ContactContent from "./ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Skypaints",
  description: "Get in touch with Skypaints. Have a question about paints, pricing, product selection, dealership, bulk orders, or color guidance? We are here to help.",
};

export default function ContactPage() {
  return <ContactContent />;
}
