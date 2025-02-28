import React from "react";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-6 py-2">
        <section className="bg-secondary p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold text-primary">
            Contact Us
          </h2>
        </section>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
