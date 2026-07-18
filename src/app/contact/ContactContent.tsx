"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export default function ContactContent() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  return (
    <>
      <Navbar />
      <main className="pb-20">
        {/* Hero Section */}
        <section className="relative z-30 min-h-[85vh] flex items-center overflow-visible">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
            <div className="flex flex-col items-start gap-8">
              <span className="px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label text-sm uppercase tracking-widest font-medium shadow-[0px_4px_20px_rgba(46,16,101,0.04)]">
                GET IN TOUCH
              </span>
              <h1 className="text-5xl lg:text-7xl font-display text-primary tracking-tight leading-tight">
                Let’s begin your
                <br />
                wall story.
              </h1>
              <p className="text-lg font-body text-on-surface-variant max-w-lg leading-relaxed">
                Have a question about paints, pricing, product selection,
                dealership, bulk orders, or color guidance? Our Skypaints team
                is here to help.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="https://wa.me/917999295796?text=Hi%20SkyPaints%2C%20I%20have%20an%20inquiry%20regarding%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-primary-container to-primary text-on-primary px-8 py-4 rounded-full font-label font-medium hover:shadow-[0px_12px_40px_rgba(46,16,101,0.15)] transition-all duration-300 flex items-center gap-2"
                >
                  <Icon name="chat" className="text-[20px]" />
                  Contact on WhatsApp
                </a>
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center border border-outline-variant/30 text-primary px-8 py-4 rounded-full font-label font-medium hover:bg-surface-container-highest transition-all duration-300"
                >
                  Send an Inquiry
                </a>
              </div>
            </div>

            <div className="relative h-[600px] w-full hidden lg:block">
              <div className="absolute inset-0 bg-surface-container-lowest rounded-xl shadow-[0px_12px_40px_rgba(46,16,101,0.08)] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image
                  alt="Skypaints Contact"
                  src="/images/contact-paintsbox.png"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-8 bg-surface-container-lowest p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-[0px_20px_40px_rgba(46,16,101,0.08)] max-w-[16rem] md:max-w-xs z-20">
                <p className="font-headline text-primary text-lg md:text-xl italic leading-relaxed">
                  “Every great finish starts with the right conversation.”
                </p>
                <p className="font-label text-on-surface-variant mt-3 md:mt-4 text-xs md:text-sm font-medium">
                  — Skypaints
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-24 bg-surface relative z-20">
          <div
            className="max-w-7xl mx-auto px-6 lg:px-12 animate-fade-in-up"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-4xl font-display text-primary mb-4">
                Reach the Skypaints team
              </h2>
              <p className="text-on-surface-variant font-body text-lg">
                Choose the easiest way to connect with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover:shadow-[0px_12px_40px_rgba(46,16,101,0.08)] transition-all duration-500 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon name="call" className="text-2xl" />
                </div>
                <h3 className="font-display text-xl text-primary mb-2">
                  WhatsApp / Phone
                </h3>
                <p className="font-body text-on-surface-variant mb-4">
                  +91 79992 95796
                </p>
                <a
                  className="text-primary font-label font-medium hover:underline mt-auto"
                  href="https://wa.me/917999295796?text=Hi%20SkyPaints%2C%20I%20have%20an%20inquiry%20regarding%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat Now
                </a>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover:shadow-[0px_12px_40px_rgba(46,16,101,0.08)] transition-all duration-500 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon name="mail" className="text-2xl" />
                </div>
                <h3 className="font-display text-xl text-primary mb-2">
                  Email
                </h3>
                <p className="font-body text-on-surface-variant mb-4">
                  skyproduct2020@gmail.com
                </p>
                <a
                  className="text-primary font-label font-medium hover:underline mt-auto"
                  href="mailto:skyproduct2020@gmail.com"
                >
                  Send Email
                </a>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover:shadow-[0px_12px_40px_rgba(46,16,101,0.08)] transition-all duration-500 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon name="location_on" className="text-2xl" />
                </div>
                <h3 className="font-display text-xl text-primary mb-2">
                  Location
                </h3>
                <p className="font-body text-on-surface-variant mb-4">
                  Rawabhata, Raipur, CG
                </p>
                <a
                  className="text-primary font-label font-medium hover:underline mt-auto"
                  href="#factories-map"
                >
                  Get Directions
                </a>
              </div>

              {/* Card 4 */}
              <div className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover:shadow-[0px_12px_40px_rgba(46,16,101,0.08)] transition-all duration-500 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon name="schedule" className="text-2xl" />
                </div>
                <h3 className="font-display text-xl text-primary mb-2">
                  Business Hours
                </h3>
                <p className="font-body text-on-surface-variant mb-4">
                  Mon - Sat: 10AM - 6PM
                </p>
                <span className="text-secondary font-label font-medium mt-auto">
                  Closed Sundays
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="inquiry-form" className="py-24 bg-surface-container-low">
          <div
            className="max-w-7xl mx-auto px-6 lg:px-12 animate-fade-in-up"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
              {/* Form */}
              <div className="lg:col-span-3 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_12px_40px_rgba(46,16,101,0.08)]">
                <h2 className="text-3xl font-display text-primary mb-8">
                  Send an Inquiry
                </h2>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("Name");
                    const phone = formData.get("Phone");
                    const email = formData.get("Email");
                    const city = formData.get("City");
                    const type = formData.get("InquiryType");
                    const interest = formData.get("ProductInterest");
                    const message = formData.get("Message");

                    const text = encodeURIComponent(
                      `*New Inquiry from ${name}*\n\n*Phone:* ${phone}\n*Email:* ${email}\n*City:* ${city}\n*Type:* ${type}\n*Interest:* ${interest}\n\n*Message:*\n${message}`,
                    );

                    window.location.href = `https://wa.me/917999295796?text=${text}`;
                    setShowInquiryModal(true);
                    e.currentTarget.reset();
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">
                        Name
                      </label>
                      <input
                        name="Name"
                        className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">
                        Phone
                      </label>
                      <input
                        name="Phone"
                        className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">
                        Email
                      </label>
                      <input
                        name="Email"
                        className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body"
                        type="email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">
                        City
                      </label>
                      <input
                        name="City"
                        className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">
                        Inquiry Type
                      </label>
                      <select
                        name="InquiryType"
                        className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>Dealership</option>
                        <option>Bulk Order</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">
                        Product Interest
                      </label>
                      <select
                        name="ProductInterest"
                        className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body appearance-none"
                      >
                        <option>Interior Paints</option>
                        <option>Exterior Paints</option>
                        <option>Primers</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">
                      Message
                    </label>
                    <textarea
                      name="Message"
                      className="w-full bg-surface-container-highest border-none rounded-[2rem] px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body resize-none"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-gradient-to-br from-primary-container to-primary text-on-primary py-4 rounded-full font-label font-medium text-lg hover:shadow-[0px_12px_40px_rgba(46,16,101,0.15)] transition-all duration-300 mt-4"
                    type="submit"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>

              {/* Quick Help Card */}
              <div className="lg:col-span-2 relative rounded-xl overflow-hidden shadow-[0px_12px_40px_rgba(46,16,101,0.12)] min-h-[400px] flex items-end p-8">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/lavender-hero-2.png')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                <div className="relative z-10 w-full text-on-primary">
                  <h3 className="text-3xl font-display mb-4">
                    Need quick help?
                  </h3>
                  <p className="font-body text-inverse-primary mb-8 opacity-90">
                    Skip the form and chat directly with our specialists.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                      <Icon name="call" className="text-secondary-fixed" />
                      <span className="font-label">+91 79992 95796</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="mail" className="text-secondary-fixed" />
                      <span className="font-label">
                        skyproduct2020@gmail.com
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/917999295796?text=Hi%20SkyPaints%2C%20I%20have%20an%20inquiry%20regarding%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 rounded-full font-label font-bold hover:bg-secondary-fixed-dim transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="chat" className="" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback & Testimonials */}
        <section className="py-24 bg-surface">
          <div
            className="max-w-7xl mx-auto px-6 lg:px-12 animate-fade-in-up"
            style={{ animationDelay: "300ms", animationFillMode: "both" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display text-primary mb-4">
                  Voices from the Atelier
                </h2>
                <p className="text-on-surface-variant font-body mb-12 text-lg">
                  Share your experience or read what others have crafted with
                  Skypaints.
                </p>
                <form
                  className="bg-surface-container p-8 rounded-xl space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("Name");
                    const contactInfo = formData.get("Contact Info");
                    const message = formData.get("Message");

                    const subject = encodeURIComponent(
                      "New Feedback for SkyPaints",
                    );
                    const body = encodeURIComponent(
                      `Name: ${name}\nContact Info: ${contactInfo}\n\nMessage:\n${message}`,
                    );

                    window.location.href = `mailto:skyproduct2020@gmail.com?subject=${subject}&body=${body}`;
                    setShowFeedbackModal(true);
                    e.currentTarget.reset();
                  }}
                >
                  <h3 className="text-xl font-display text-primary">
                    Leave Feedback
                  </h3>
                  <div>
                    <input
                      name="Name"
                      className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 font-body"
                      placeholder="Name"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <input
                      name="Contact Info"
                      className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 font-body"
                      placeholder="Contact Info"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="Message"
                      className="w-full bg-surface-container-highest border-none rounded-[2rem] px-6 py-4 font-body resize-none"
                      placeholder="Your Message"
                      rows={3}
                      required
                    ></textarea>
                  </div>
                  <button
                    className="bg-primary text-on-primary px-8 py-3 rounded-full font-label text-sm hover:opacity-90 transition-opacity"
                    type="submit"
                  >
                    Submit Feedback
                  </button>
                </form>
              </div>
              <div className="space-y-6 relative">
                {/* Decorative background element */}
                <div className="absolute -right-12 -top-12 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl -z-10"></div>

                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_40px_rgba(46,16,101,0.04)] ml-0 lg:ml-12 border border-outline-variant/10">
                  <div className="flex gap-1 text-secondary mb-3">
                    <Icon name="star" className="text-sm" />
                    <Icon name="star" className="text-sm" />
                    <Icon name="star" className="text-sm" />
                    <Icon name="star" className="text-sm" />
                    <Icon name="star" className="text-sm" />
                  </div>
                  <p className="font-body text-on-surface-variant italic mb-4">
                    &quot;The serene red shade completely transformed my living
                    space. The finish is impeccable.&quot;
                  </p>
                  <p className="font-label text-primary font-bold text-sm">
                    — Anita R.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_40px_rgba(46,16,101,0.04)] mr-0 lg:mr-12 border border-outline-variant/10">
                  <div className="flex gap-1 text-secondary mb-3">
                    <Icon name="star" className="text-sm" />
                    <Icon name="star" className="text-sm" />
                    <Icon name="star" className="text-sm" />
                    <Icon name="star" className="text-sm" />
                    <Icon name="star_half" className="text-sm" />
                  </div>
                  <p className="font-body text-on-surface-variant italic mb-4">
                    &quot;Great customer service when I needed help choosing
                    exterior paints for my new project.&quot;
                  </p>
                  <p className="font-label text-primary font-bold text-sm">
                    — Builders Co.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_40px_rgba(46,16,101,0.04)] ml-0 lg:ml-8 border border-outline-variant/10">
                  <p className="font-body text-on-surface-variant italic mb-4">
                    &quot; Fast delivery for our bulk order. The quality
                    consistency across batches is commendable.&quot;
                  </p>
                  <p className="font-label text-primary font-bold text-sm">
                    — Ravi Sharma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="factories-map" className="py-24 bg-surface-container-low">
          <div
            className="max-w-7xl mx-auto px-6 lg:px-12 animate-fade-in-up"
            style={{ animationDelay: "400ms", animationFillMode: "both" }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display text-primary mb-4">
                Find Our Factories
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Raipur Factory */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-container text-primary rounded-full flex items-center justify-center">
                    <Icon name="location_on" className="text-xl" />
                  </div>
                  <h3 className="font-headline text-2xl text-primary">
                    Raipur Factory
                  </h3>
                </div>
                <p className="font-body text-on-surface-variant mb-6 h-auto md:h-12">
                  Rawabhata Area, Raipur, Chhattisgarh <br />
                  <span className="text-sm font-label">
                    (21°19'47.9"N 81°39'32.0"E)
                  </span>
                </p>
                <div className="w-full h-[400px] bg-surface-container-highest rounded-xl overflow-hidden relative shadow-[0px_12px_40px_rgba(46,16,101,0.08)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35185.589656612385!2d81.62419916918388!3d21.327232573232124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e78ddb4cf609%3A0x71c51f6e803dd212!2sSky%20Paints!5e0!3m2!1sen!2sin!4v1779520810467!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Indore Factory */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-container text-primary rounded-full flex items-center justify-center">
                    <Icon name="location_on" className="text-xl" />
                  </div>
                  <h3 className="font-headline text-2xl text-primary">
                    Indore Factory
                  </h3>
                </div>
                <p className="font-body text-on-surface-variant mb-6 h-auto md:h-12">
                  Jawahar Tekri, opposite Vidhyanjali School, Indore, Madhya
                  Pradesh
                </p>
                <div className="w-full h-[400px] bg-surface-container-highest rounded-xl overflow-hidden relative shadow-[0px_12px_40px_rgba(46,16,101,0.08)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8217.124247290012!2d75.78814676376516!3d22.694758069696917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fe88281a2895%3A0xe8d054050e169c33!2sMQVV%2BV9W%2C%20Sinhasa%2C%20Indore%2C%20Madhya%20Pradesh%20452009!5e0!3m2!1sen!2sin!4v1779521580527!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-surface">
          <div
            className="max-w-3xl mx-auto px-6 lg:px-12 animate-fade-in-up"
            style={{ animationDelay: "500ms", animationFillMode: "both" }}
          >
            <h2 className="text-4xl font-display text-primary mb-12 text-center">
              Common Inquiries
            </h2>
            <div className="space-y-4">
              <details className="group bg-surface-container-low rounded-lg p-6 cursor-pointer open:bg-surface-container transition-colors">
                <summary className="font-label font-bold text-lg text-primary flex justify-between items-center list-none">
                  How do I get a price quote for bulk orders?
                  <Icon
                    name="expand_more"
                    className="text-outline group-open:rotate-180 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-on-surface-variant font-body">
                  Please fill out the inquiry form above selecting 'Bulk Order'
                  or contact us directly via WhatsApp with your requirements for
                  a customized quote.
                </p>
              </details>

              <details className="group bg-surface-container-low rounded-lg p-6 cursor-pointer open:bg-surface-container transition-colors">
                <summary className="font-label font-bold text-lg text-primary flex justify-between items-center list-none">
                  Do you offer dealership opportunities?
                  <Icon
                    name="expand_more"
                    className="text-outline group-open:rotate-180 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-on-surface-variant font-body">
                  Yes, we are expanding our network. Select 'Dealership' in the
                  contact form, and our regional manager will reach out to you
                  with details.
                </p>
              </details>

              <details className="group bg-surface-container-low rounded-lg p-6 cursor-pointer open:bg-surface-container transition-colors">
                <summary className="font-label font-bold text-lg text-primary flex justify-between items-center list-none">
                  Can I get help choosing the right paint for my project?
                  <Icon
                    name="expand_more"
                    className="text-outline group-open:rotate-180 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-on-surface-variant font-body">
                  Absolutely. Our color consultants are available via email or
                  WhatsApp to help you choose the perfect palette and product
                  type for your specific needs.
                </p>
              </details>

              <details className="group bg-surface-container-low rounded-lg p-6 cursor-pointer open:bg-surface-container transition-colors">
                <summary className="font-label font-bold text-lg text-primary flex justify-between items-center list-none">
                  Where can I find your products locally?
                  <Icon
                    name="expand_more"
                    className="text-outline group-open:rotate-180 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-on-surface-variant font-body">
                  You can use our 'Store Locator' linked in the footer, or
                  contact us with your pin code for the nearest authorized
                  dealer.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
          <div
            className="max-w-4xl mx-auto px-6 relative z-10 text-center text-on-primary animate-fade-in-up"
            style={{ animationDelay: "600ms", animationFillMode: "both" }}
          >
            <h2 className="text-5xl font-display mb-6">
              Need product pricing or dealer support?
            </h2>
            <p className="text-xl font-body text-inverse-primary mb-12 opacity-90 max-w-2xl mx-auto">
              Our experts are ready to assist you with tailored solutions for
              your next masterpiece.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://wa.me/917999295796?text=Hi%20SkyPaints%2C%20I%20have%20an%20inquiry%20regarding%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-label font-bold hover:bg-secondary-fixed-dim transition-colors flex items-center gap-2 shadow-xl"
              >
                <Icon name="chat" className="" />
                WhatsApp Skypaints
              </a>
              <a
                href="#inquiry-form"
                className="bg-transparent border border-outline-variant/30 text-on-primary px-8 py-4 rounded-full font-label font-medium hover:bg-white/10 transition-colors"
              >
                Send Inquiry
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dim/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-2xl max-w-md w-full text-center relative animate-fade-in-up border border-outline-variant/20">
            <div className="w-20 h-20 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Icon name="check_circle" className="text-4xl" />
            </div>
            <h3 className="text-3xl font-display text-primary mb-4">
              Thank You!
            </h3>
            <p className="text-on-surface-variant font-body mb-8 text-lg">
              Your feedback has been prepared. Please hit send in your email
              client to complete the submission.
            </p>
            <button
              onClick={() => setShowFeedbackModal(false)}
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-label font-medium w-full hover:shadow-[0px_12px_40px_rgba(46,16,101,0.15)] transition-all duration-300 text-lg"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dim/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-2xl max-w-md w-full text-center relative animate-fade-in-up border border-outline-variant/20">
            <div className="w-20 h-20 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Icon name="send" className="text-4xl" />
            </div>
            <h3 className="text-3xl font-display text-primary mb-4">
              Inquiry Prepared!
            </h3>
            <p className="text-on-surface-variant font-body mb-8 text-lg">
              We are redirecting you to WhatsApp to securely send your inquiry
              to our team.
            </p>
            <button
              onClick={() => setShowInquiryModal(false)}
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-label font-medium w-full hover:shadow-[0px_12px_40px_rgba(46,16,101,0.15)] transition-all duration-300 text-lg"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}
    </>
  );
}
