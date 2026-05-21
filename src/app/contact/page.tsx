import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMuvSLipkz1NHAUR8J4HpQm-Ylyuo74-WgWAoERMWF6yiG26BFxN_4vlKRZRStQvrI6DYb64-e-KUh0IZaf51mpz1v7jzYQSHZs1a_7VKX953wOSCmClgnbcNIXQm0lTzyssEDK8xgKa_9BmGaRzRjF1tXb8lvmjzUNrs_gBpXH0qMl91L8LdoBp3L810TVTmfUa0VNSlXtWXfP7cFcUPuZkSH-1zUDc7Hay9kLAoulZc2sgsh2ppasNxath3GrUhF_aw9GLoaScA')" }}
          ></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
            <div className="flex flex-col items-start gap-8">
              <span className="px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label text-sm uppercase tracking-widest font-medium shadow-[0px_4px_20px_rgba(46,16,101,0.04)]">GET IN TOUCH</span>
              <h1 className="text-5xl lg:text-7xl font-display text-primary tracking-tight leading-tight">
                Let’s begin your<br />wall story.
              </h1>
              <p className="text-lg font-body text-on-surface-variant max-w-lg leading-relaxed">
                Have a question about paints, pricing, product selection, dealership, bulk orders, or color guidance? Our Skypaints team is here to help.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="bg-gradient-to-br from-primary-container to-primary text-on-primary px-8 py-4 rounded-full font-label font-medium hover:shadow-[0px_12px_40px_rgba(46,16,101,0.15)] transition-all duration-300 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Contact on WhatsApp
                </button>
                <button className="border border-outline-variant/30 text-primary px-8 py-4 rounded-full font-label font-medium hover:bg-surface-container-highest transition-all duration-300">
                  Send an Inquiry
                </button>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full hidden lg:block">
              <div className="absolute inset-0 bg-surface-container-lowest rounded-xl shadow-[0px_12px_40px_rgba(46,16,101,0.08)] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image
                  alt="Skypaints Studio"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKZ3lGOOQbxOqPYsXdQidxixXbb6Fk3pl2ll5-Pn_FshYmMjV78pB6Q_PE8VUwE25jJyMYPNnoJvr1RS5QSOoxiMa-jkN1Vrrw0ux0zKEwOSqzudYOU3hrlISRlPNDtEyGVPKeHyWaTQf7LGLjAGeU6azBd_iyx0pH27PtJIn5_ydB6KEcnDlo_Zu-IrUgFiw8jd9ocFdAKiA53GTLdZrw3VENdYu8o_dbYF6V2JQ3lNZsS29l-kJWKgD-pgv5XLj9E05gzPzU5bQ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface/90 backdrop-blur-xl p-8 rounded-lg shadow-[0px_12px_40px_rgba(46,16,101,0.12)] max-w-sm border border-outline-variant/10 transform -rotate-1">
                <p className="font-headline text-primary text-xl italic leading-relaxed">
                  “Every great finish starts with the right conversation.”
                </p>
                <p className="font-label text-on-surface-variant mt-4 text-sm font-medium">— Skypaints Studio</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-24 bg-surface relative z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-4xl font-display text-primary mb-4">Reach the Skypaints team</h2>
              <p className="text-on-surface-variant font-body text-lg">Choose the easiest way to connect with us.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover:shadow-[0px_12px_40px_rgba(46,16,101,0.08)] transition-all duration-500 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                </div>
                <h3 className="font-display text-xl text-primary mb-2">WhatsApp / Phone</h3>
                <p className="font-body text-on-surface-variant mb-4">+91 98765 43210</p>
                <a className="text-primary font-label font-medium hover:underline mt-auto" href="#">Chat Now</a>
              </div>
              
              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover:shadow-[0px_12px_40px_rgba(46,16,101,0.08)] transition-all duration-500 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <h3 className="font-display text-xl text-primary mb-2">Email</h3>
                <p className="font-body text-on-surface-variant mb-4">hello@skypaints.com</p>
                <a className="text-primary font-label font-medium hover:underline mt-auto" href="#">Send Email</a>
              </div>
              
              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover:shadow-[0px_12px_40px_rgba(46,16,101,0.08)] transition-all duration-500 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <h3 className="font-display text-xl text-primary mb-2">Location</h3>
                <p className="font-body text-on-surface-variant mb-4">Rawabhata, Raipur, CG</p>
                <a className="text-primary font-label font-medium hover:underline mt-auto" href="#">Get Directions</a>
              </div>
              
              {/* Card 4 */}
              <div className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_4px_20px_rgba(46,16,101,0.04)] hover:shadow-[0px_12px_40px_rgba(46,16,101,0.08)] transition-all duration-500 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <h3 className="font-display text-xl text-primary mb-2">Business Hours</h3>
                <p className="font-body text-on-surface-variant mb-4">Mon - Sat: 9AM - 6PM</p>
                <span className="text-secondary font-label font-medium mt-auto">Closed Sundays</span>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
              {/* Form */}
              <div className="lg:col-span-3 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_12px_40px_rgba(46,16,101,0.08)]">
                <h2 className="text-3xl font-display text-primary mb-8">Send an Inquiry</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">Name</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body" type="text" />
                    </div>
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">Phone</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body" type="tel" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">Email</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body" type="email" />
                    </div>
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">City</label>
                      <input className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body" type="text" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">Inquiry Type</label>
                      <select className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body appearance-none">
                        <option>General Inquiry</option>
                        <option>Dealership</option>
                        <option>Bulk Order</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">Product Interest</label>
                      <select className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body appearance-none">
                        <option>Interior Paints</option>
                        <option>Exterior Paints</option>
                        <option>Primers</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-label text-on-surface-variant text-sm mb-2 ml-4">Message</label>
                    <textarea className="w-full bg-surface-container-highest border-none rounded-[2rem] px-6 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-tertiary-container/10 transition-colors font-body resize-none" rows={4}></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-br from-primary-container to-primary text-on-primary py-4 rounded-full font-label font-medium text-lg hover:shadow-[0px_12px_40px_rgba(46,16,101,0.15)] transition-all duration-300 mt-4" type="submit">
                    Submit Inquiry
                  </button>
                </form>
              </div>
              
              {/* Quick Help Card */}
              <div className="lg:col-span-2 relative rounded-xl overflow-hidden shadow-[0px_12px_40px_rgba(46,16,101,0.12)] min-h-[400px] flex items-end p-8">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeOGZScxqnaxss4NjuW8aHehvBPgJ66QuETkH6X4HK-yVgjUjuL3ea5e9Hb1cKaF0dKmVAC6oGz3dOmV253l73Bvx7cgG32m6OAouB3TuhPD9dG8JNW01WP8G53DmNk3535vIgUSmHBVmObmWL1dP6du_KfWqIG-gk06MSb0kHcQ5kXaAKNtBJL05rrFt4CwLMfIqKkQZe4N_ZJbbVR1rkLupmHg2q7YuxlEuKHMbvQpFD_xJT2etMo-Q8Pzt9t6znOIVvuHwGZ0I')" }}></div>
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                <div className="relative z-10 w-full text-on-primary">
                  <h3 className="text-3xl font-display mb-4">Need quick help?</h3>
                  <p className="font-body text-inverse-primary mb-8 opacity-90">Skip the form and chat directly with our specialists.</p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary-fixed">call</span>
                      <span className="font-label">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary-fixed">mail</span>
                      <span className="font-label">support@skypaints.com</span>
                    </div>
                  </div>
                  <button className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 rounded-full font-label font-bold hover:bg-secondary-fixed-dim transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">chat</span>
                    WhatsApp Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback & Testimonials */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display text-primary mb-4">Voices from the Atelier</h2>
                <p className="text-on-surface-variant font-body mb-12 text-lg">Share your experience or read what others have crafted with Skypaints.</p>
                <form className="bg-surface-container p-8 rounded-xl space-y-6">
                  <h3 className="text-xl font-display text-primary">Leave Feedback</h3>
                  <div>
                    <input className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 font-body" placeholder="Name" type="text" />
                  </div>
                  <div>
                    <input className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 font-body" placeholder="Contact Info" type="text" />
                  </div>
                  <div>
                    <textarea className="w-full bg-surface-container-highest border-none rounded-[2rem] px-6 py-4 font-body resize-none" placeholder="Your Message" rows={3}></textarea>
                  </div>
                  <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label text-sm hover:opacity-90 transition-opacity" type="button">Submit Feedback</button>
                </form>
              </div>
              <div className="space-y-6 relative">
                {/* Decorative background element */}
                <div className="absolute -right-12 -top-12 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl -z-10"></div>
                
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_40px_rgba(46,16,101,0.04)] ml-0 lg:ml-12 border border-outline-variant/10">
                  <div className="flex gap-1 text-secondary mb-3">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body text-on-surface-variant italic mb-4">&quot;The serene lavender shade completely transformed my living space. The finish is impeccable.&quot;</p>
                  <p className="font-label text-primary font-bold text-sm">— Anita R.</p>
                </div>
                
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_40px_rgba(46,16,101,0.04)] mr-0 lg:mr-12 border border-outline-variant/10">
                  <div className="flex gap-1 text-secondary mb-3">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                  </div>
                  <p className="font-body text-on-surface-variant italic mb-4">&quot;Great customer service when I needed help choosing exterior primers for my new project.&quot;</p>
                  <p className="font-label text-primary font-bold text-sm">— Builders Co.</p>
                </div>
                
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_40px_rgba(46,16,101,0.04)] ml-0 lg:ml-8 border border-outline-variant/10">
                  <p className="font-body text-on-surface-variant italic mb-4">&quot;Prompt delivery for our bulk order. The quality consistency across batches is commendable.&quot;</p>
                  <p className="font-label text-primary font-bold text-sm">— Interior Designs LLC</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display text-primary mb-4">Find Our Studio</h2>
            </div>
            <div className="w-full h-[500px] bg-surface-container-highest rounded-xl overflow-hidden relative shadow-[0px_12px_40px_rgba(46,16,101,0.08)] flex items-center justify-center">
              {/* Minimalist Map Placeholder visually styled */}
              <div className="absolute inset-0 bg-inverse-on-surface opacity-50 bg-pattern"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg mb-4 animate-bounce">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div className="bg-surface-container-lowest py-3 px-6 rounded-full shadow-md font-label font-bold text-primary">
                  Rawabhata, Raipur, Chhattisgarh
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
            <h2 className="text-4xl font-display text-primary mb-12 text-center">Common Inquiries</h2>
            <div className="space-y-4">
              <details className="group bg-surface-container-low rounded-lg p-6 cursor-pointer open:bg-surface-container transition-colors">
                <summary className="font-label font-bold text-lg text-primary flex justify-between items-center list-none">
                  How do I get a price quote for bulk orders?
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant font-body">Please fill out the inquiry form above selecting 'Bulk Order' or contact us directly via WhatsApp with your requirements for a customized quote.</p>
              </details>
              
              <details className="group bg-surface-container-low rounded-lg p-6 cursor-pointer open:bg-surface-container transition-colors">
                <summary className="font-label font-bold text-lg text-primary flex justify-between items-center list-none">
                  Do you offer dealership opportunities?
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant font-body">Yes, we are expanding our network. Select 'Dealership' in the contact form, and our regional manager will reach out to you with details.</p>
              </details>
              
              <details className="group bg-surface-container-low rounded-lg p-6 cursor-pointer open:bg-surface-container transition-colors">
                <summary className="font-label font-bold text-lg text-primary flex justify-between items-center list-none">
                  Can I get help choosing the right paint for my project?
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant font-body">Absolutely. Our color consultants are available via email or WhatsApp to help you choose the perfect palette and product type for your specific needs.</p>
              </details>
              
              <details className="group bg-surface-container-low rounded-lg p-6 cursor-pointer open:bg-surface-container transition-colors">
                <summary className="font-label font-bold text-lg text-primary flex justify-between items-center list-none">
                  Where can I find your products locally?
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant font-body">You can use our 'Store Locator' linked in the footer, or contact us with your pin code for the nearest authorized dealer.</p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeOGZScxqnaxss4NjuW8aHehvBPgJ66QuETkH6X4HK-yVgjUjuL3ea5e9Hb1cKaF0dKmVAC6oGz3dOmV253l73Bvx7cgG32m6OAouB3TuhPD9dG8JNW01WP8G53DmNk3535vIgUSmHBVmObmWL1dP6du_KfWqIG-gk06MSb0kHcQ5kXaAKNtBJL05rrFt4CwLMfIqKkQZe4N_ZJbbVR1rkLupmHg2q7YuxlEuKHMbvQpFD_xJT2etMo-Q8Pzt9t6znOIVvuHwGZ0I')" }}></div>
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-on-primary animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <h2 className="text-5xl font-display mb-6">Need product pricing or dealer support?</h2>
            <p className="text-xl font-body text-inverse-primary mb-12 opacity-90 max-w-2xl mx-auto">Our experts are ready to assist you with tailored solutions for your next masterpiece.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-label font-bold hover:bg-secondary-fixed-dim transition-colors flex items-center gap-2 shadow-xl">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Skypaints
              </button>
              <button className="bg-transparent border border-outline-variant/30 text-on-primary px-8 py-4 rounded-full font-label font-medium hover:bg-white/10 transition-colors">
                Send Inquiry
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
