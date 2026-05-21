import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 overflow-hidden">
        {/* 1. About Hero Section */}
        <section className="relative min-h-[716px] flex items-center px-8 md:px-12 py-20 overflow-hidden group">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTbeBPZ2tduGEgh_7ArIhtV1ePbfwGxipUt0n7XaeDvwtnS_vc4MT3r3cDZAvP8HglsP6CFBcia8dlWQdBU254Tu5ep_S1jIIWdKWbIINxcx8-ENtwLsKWp5c3oTaC5yQ470UNmLVCnFAf-oz3AC2iukNptbWu-6ODZoV1foiK3sKKnCpjLNLYeTdtqembWrDFPGE_0Ou1k1xtHSZQ0I5BvMhzsT4iTP-7nCLy9Tu1BQwp6csGFEdwQFyGEFcSGBPQVJzoQY2eF3Y"
              alt="A luxurious high-ceiling living room"
              fill
              className="object-cover brightness-75 opacity-20 scale-105 transition-transform duration-[10000ms] group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl transition-all duration-1000 opacity-0 translate-y-10 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <span className="font-label text-primary font-bold tracking-[0.3em] uppercase mb-4 block">Artisan Finishes</span>
            <h1 className="font-display text-6xl md:text-8xl text-primary leading-tight mb-8">
              About <br />
              <span className="italic text-on-primary-container">Skypaints</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
              Bringing color, protection, and beauty to every home. We curate atmospheric depth for modern spaces through scientific precision and artistic vision.
            </p>
          </div>
          
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-96 h-96 rounded-full bg-secondary-fixed/30 blur-[120px] animate-pulse"></div>
          </div>
        </section>

        {/* 2. Company Story Section */}
        <section className="px-8 md:px-12 py-32 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] ambient-shadow group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0_vu26TUq3essGkTAMVspsUUxhLPNjx9jn-rkfitRIN922FJpdq4OAI79aWaGhQ2rZrQvjaON3t-fbyMZKo4bf7dRJf6TwhawSTGe7Hh_Q3ns3TgO1LYFaA0VhBvqlFNUeD5-n4diuXkiI_EZKUFFy48qPcINmiwLrb-VNIeNK2T_XAnUurGvIbVAMsYe5BVovyp7onX5rUtVdDuTQWAx_QiCiSE6FOZAVT17U7BJOJCtMCTGCE_NGU_VDgH9BX_nZ2Eaald4TCo"
                  alt="A close-up of a master artisan slowly mixing a rich, vibrant violet pigment into a smooth white paint base."
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-primary/0 transition-colors duration-700"></div>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Skypaints was created with a simple vision: to make premium painting solutions accessible, reliable, and beautiful for every home.
                </p>
                <p>
                  What started as a boutique pigment studio has evolved into a comprehensive sanctuary for homeowners. From interior wall paints to exterior protection, waterproofing, and color guidance, we help you transform your space with absolute confidence.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-4 group cursor-pointer w-fit">
                    <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></div>
                    <span className="font-label font-bold text-primary uppercase tracking-widest group-hover:text-primary-fixed-dim transition-colors duration-300">The Legacy of Light</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission and Vision Section */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-12">
            <div className="bg-surface-container-lowest p-12 rounded-xl ambient-shadow transform hover:-translate-y-2 transition-transform duration-500 border border-outline-variant/10">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
              </div>
              <h3 className="font-display text-3xl text-primary mb-6">Our Mission</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To elevate the human experience through color and protection, providing innovative surface solutions that safeguard the home while inspiring the soul.
              </p>
            </div>
            
            <div className="bg-surface-container-lowest p-12 rounded-xl ambient-shadow transform hover:-translate-y-2 transition-transform duration-500 border border-outline-variant/10">
              <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-3xl">visibility</span>
              </div>
              <h3 className="font-display text-3xl text-primary mb-6">Our Vision</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To become the global benchmark for atmospheric architecture, where every wall tells a story of durability, sustainability, and unparalleled aesthetic depth.
              </p>
            </div>
          </div>
        </section>

        {/* 4. What We Do Section */}
        <section className="px-8 md:px-12 py-32 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Our Expertise</h2>
            <p className="text-on-surface-variant text-lg">Beyond just color, we provide technical excellence for every vertical and horizontal surface in your sanctuary.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
              <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6 group-hover:scale-110 transition-transform">format_paint</span>
              <h4 className="font-headline text-2xl text-primary mb-4">Interior Painting</h4>
              <p className="text-on-surface-variant">Sophisticated finishes that define your indoor atmosphere with VOC-free purity.</p>
            </div>
            <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
              <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6 group-hover:scale-110 transition-transform">shield</span>
              <h4 className="font-headline text-2xl text-primary mb-4">Exterior Protection</h4>
              <p className="text-on-surface-variant">Weather-resistant shields that maintain curb appeal against the harshest elements.</p>
            </div>
            <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
              <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6 group-hover:scale-110 transition-transform">water_drop</span>
              <h4 className="font-headline text-2xl text-primary mb-4">Waterproofing</h4>
              <p className="text-on-surface-variant">Advanced molecular barriers to keep structural integrity and moisture at bay.</p>
            </div>
            <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
              <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6 group-hover:scale-110 transition-transform">texture</span>
              <h4 className="font-headline text-2xl text-primary mb-4">Distemper</h4>
              <p className="text-on-surface-variant">Classic matte finishes reimagined with modern durability and rich pigmentation.</p>
            </div>
            <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
              <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6 group-hover:scale-110 transition-transform">cleaning_services</span>
              <h4 className="font-headline text-2xl text-primary mb-4">Wall Cleaning</h4>
              <p className="text-on-surface-variant">Specialized restoration services that bring back the luster of your original paint.</p>
            </div>
            <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
              <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6 group-hover:scale-110 transition-transform">palette</span>
              <h4 className="font-headline text-2xl text-primary mb-4">Color Consultation</h4>
              <p className="text-on-surface-variant">Expert guidance to help you select the perfect palette for your lifestyle.</p>
            </div>
          </div>
        </section>

        {/* 5. Why Choose SkyPaint (Bento Grid Style) */}
        <section className="bg-primary text-white py-32 px-8 md:px-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-96 h-96 bg-primary-fixed rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-container rounded-full blur-[100px]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-6">Why Skypaints?</h2>
              <p className="text-on-primary-container text-xl max-w-2xl">The intersection of luxury aesthetics and engineering performance.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-secondary-container font-bold text-4xl mb-4">01</div>
                <h5 className="text-2xl font-headline mb-4">Premium Quality</h5>
                <p className="text-on-primary-container">We use high-viscosity resins and pure earth pigments for superior coverage.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-secondary-container font-bold text-4xl mb-4">02</div>
                <h5 className="text-2xl font-headline mb-4">Affordable Luxury</h5>
                <p className="text-on-primary-container">High-end aesthetics curated at price points that respect your investment.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-secondary-container font-bold text-4xl mb-4">03</div>
                <h5 className="text-2xl font-headline mb-4">Expert Guidance</h5>
                <p className="text-on-primary-container">Professional color theorists help you navigate the psychology of space.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-secondary-container font-bold text-4xl mb-4">04</div>
                <h5 className="text-2xl font-headline mb-4">Weather Protection</h5>
                <p className="text-on-primary-container">Engineered to withstand humidity, UV rays, and extreme temperature shifts.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-secondary-container font-bold text-4xl mb-4">05</div>
                <h5 className="text-2xl font-headline mb-4">Wide Product Range</h5>
                <p className="text-on-primary-container">From artisanal finishes to heavy-duty industrial coatings.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-secondary-container font-bold text-4xl mb-4">06</div>
                <h5 className="text-2xl font-headline mb-4">Customer First</h5>
                <p className="text-on-primary-container">Our relationship begins when the paint is dry, with comprehensive support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Stats Section */}
        <section className="py-24 px-8 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Happy Customers</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">1000+</div>
              <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Color Choices</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Solutions</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">5+</div>
              <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Years of Trust</div>
            </div>
          </div>
        </section>

        {/* 7. Team Section */}
        <section className="py-32 px-8 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">The Visionaries</h2>
              <p className="text-on-surface-variant text-lg">Meet the experts behind the palettes and the science of Skypaints.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 ambient-shadow">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd0FTNEJXtqSUnJTl0MWSG76tM8IGu-WNWB0lOH_v6S4rKDoScW-cbt5BJQPYEQDJrsmHzObeRWEuJhDGpwCM-AeyOIYPBRxSu6_nxsRI-sNCcy8ecW5XMQMyEcdX_aBLOkIXcasgl_7u329XlnPV1Zq1MineGwt2p6g4ka0in2gfHpGc85ruM0P2aH9mbmMFpWoDC6EvAydgC2-AQWVwPrhxHViJUVIKsoHzC_d4zkHrKI_QRTxB3Po_2nwmcXlm3Y2AYhtod_iQ"
                  alt="A professional portrait of Mustafa Malak"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h5 className="font-headline text-xl text-primary">Mustafa Malak</h5>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">Founder & Creative Lead</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 ambient-shadow">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDso8K7OvChX7qR__7ZKhJjJPyXAe-E8rQ3CBD_KQQNB6DHF8bRHNGsU5GKHwLoTPbMalmYv33UwvOALxFTg_MiZ_6nBaHXHGXmeYtVnfaQlIPDTegSJhLQ9YnaSJicCjfdG_OPLk48vsTkj4DZlC5EFLYa9wZIe1qnOmC5BDGhoAm0w8Rpn2z2DVNaK64dApoktxBov9vawcP5kv3Wd-Ui2bqPpkLsAhbUVpelWAau2kCyjP5Ijr5vXXPyrGNPdkuo0kfTv2L-NZ0"
                  alt="A portrait of Ayaan Khan"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h5 className="font-headline text-xl text-primary">Ayaan Khan</h5>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">Product Specialist</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 ambient-shadow">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY8UwyLUDgui38I0xMB5o7IepZFQz0AmGyu7GOMo4GiiMBWLTvSi_2VsO0ffF8VjJ-vLmi7YJfKKgkElBLmCMOiIxt5wEfxSoW7D1K2yKGzmGQhJUJlqp7nuLgX_MUHfgVg-72DSzEKFOWIX3vy0gn7SYkBMOu7URCjOM5_ZqwqXxuR152uHbHIMKz4QlP5rAyX66udllTYW_OZqtPkY_WFpRFk3nA5-sM6GT4l6q8zh1rzXcQbRuafL7ThG6grBMze4Q0iXnDtUo"
                  alt="A portrait of Riya Sharma"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h5 className="font-headline text-xl text-primary">Riya Sharma</h5>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">Lead Color Consultant</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 ambient-shadow">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQl6vfaBSFq-g1zQ2uCmBv7l4kqY_fhi3h76ntKjway9dmoBSNHCLDmNuPUWvfTJBRDWNux6Mxzo5Wxz6_-UHcU8ih8_lwoq-2vthupRN_8IW9kjZNSiEGm2i9QA03Xhmndnrhju4eW-b82D3K610N-VTZDJXmJwPNC5qXbk6gKKzXqmtBspGE8BIOr6OJD8XX7ONmP482UUCu5mbHufrVmGmFXzbiLKcnmCZdn0llfbF5Bac4PraWG_jY7wzgqCRgg3ZBLsf9B44"
                  alt="A professional portrait of Neha Verma"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h5 className="font-headline text-xl text-primary">Neha Verma</h5>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">Operations Director</p>
            </div>
          </div>
        </section>

        {/* 8. CTA Section */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto editorial-gradient rounded-xl p-16 md:p-24 relative overflow-hidden text-center text-white ambient-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="font-display text-4xl md:text-6xl mb-8 relative z-10 leading-tight">
              Let’s Paint Your <br />Dream Space
            </h2>
            <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12 relative z-10">
              Skypaints is here to help you choose the right products and colors for a life lived in high definition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-label font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-colors ambient-shadow">
                Explore Products
              </button>
              <button className="border border-white/20 text-white px-10 py-4 rounded-full font-label font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
