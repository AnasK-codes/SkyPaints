import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SkyPaints for a free quote, consultation, or any questions about our painting services.",
};

const CONTACT_INFO = [
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@skypaints.com",
    href: "mailto:hello@skypaints.com",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/15551234567",
  },
  { icon: "⏰", label: "Hours", value: "Mon–Sat: 8am – 6pm" },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mx-auto mb-6">Contact</div>
          <h1 className="section-heading mb-4">
            Let&apos;s Start Your <span className="gradient-text">Project</span>
          </h1>
          <p className="section-subheading mx-auto">
            Fill out the form and we&apos;ll get back to you within 24 hours
            with a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 items-start">
            {/* Contact info sidebar */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              <h2 className="text-xl font-bold text-slate-100">Get in Touch</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                We&apos;d love to hear about your project. Reach out via any of
                the channels below, or use the form to send us a message.
              </p>
              <div className="mt-4 space-y-3">
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <div
                    key={label}
                    className="card flex items-center gap-4 py-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-xl">
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-slate-200">
                          {value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote form */}
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
