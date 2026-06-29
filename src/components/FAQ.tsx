const faqs = [
  {
    question: "What makes Skypaints low-VOC?",
    answer:
      "Our formulation replaces petroleum-based solvents with plant-derived alternatives, ensuring your air quality remains as pristine as our colors.",
  },
  {
    question: "How do I choose between Matte and Eggshell?",
    answer:
      "Matte is ideal for low-traffic areas and hiding wall imperfections, while Eggshell offers a subtle glow and higher washability for living spaces.",
  },
  {
    question: "What is the coverage area per litre?",
    answer:
      "Coverage varies by product. Our Premium Luxury Emulsion covers approximately 120 sq.ft per litre, while Classic Distemper covers about 80 sq.ft per litre. Two coats are recommended for best results.",
  },
  {
    question: "How many coats of paint are recommended?",
    answer:
      "We recommend 2 coats for most applications. For drastic colour changes (e.g., dark to light), 3 coats may be needed. Touch-ups can be done with a single coat.",
  },
  {
    question: "Do Skypaints products come with a warranty?",
    answer:
      "Yes. Our exterior products come with up to 15 years of weather protection warranty, and interior emulsions are backed by a quality assurance guarantee. Contact us for specific product warranty details.",
  },
  {
    question: "Can I order paint samples before buying?",
    answer:
      "Absolutely! Reach out to us via WhatsApp or our contact page to request sample shade cards or small testers for your selected colours.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "We currently deliver across Chhattisgarh, Madhya Pradesh, Maharashtra, and surrounding states. For bulk and dealer orders, we support pan-India logistics. Contact us for availability in your area.",
  },
  {
    question: "How do I become a Skypaints dealer?",
    answer:
      "We are actively looking for distribution partners. Visit our Contact page and fill out a dealer inquiry, or WhatsApp us directly with your business details and location.",
  },
  {
    question: "Is primer necessary before painting?",
    answer:
      "Yes, primer is essential for new walls (fresh plastering) as it seals the surface, improves paint adhesion, and ensures uniform colour. For repainting walls in good condition, primer may be optional.",
  },
];

export default function FAQ() {
  // FAQ Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-32 px-8 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="font-headline text-4xl text-center mb-16 text-primary">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border-b border-outline-variant/30 pb-4 group"
          >
            <summary className="flex justify-between items-center text-primary font-bold text-lg cursor-pointer list-none py-2 [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4">
                expand_more
              </span>
            </summary>
            <div className="mt-4 text-on-surface-variant leading-relaxed animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

