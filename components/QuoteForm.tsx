"use client";

import { useState, FormEvent } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};
const SERVICES = [
  "Interior Painting",
  "Exterior Painting",
  "Waterproofing",
  "Other",
];

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    openWhatsApp({
      name: form.name,
      service: form.service,
      message: form.message,
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-slate-100 mb-2">
          We&apos;ve received your request!
        </h3>
        <p className="text-slate-400 text-sm">
          Our team will reach out within 24 hours. Check your WhatsApp!
        </p>
        <button
          className="mt-6 btn-secondary"
          onClick={() => {
            setSubmitted(false);
            setForm(INITIAL);
          }}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <h3 className="text-xl font-bold text-slate-100">Request a Free Quote</h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-1.5 block text-xs font-medium text-slate-400"
            htmlFor="name"
          >
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="input-field"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="mb-1.5 block text-xs font-medium text-slate-400"
            htmlFor="phone"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+1 555 000 0000"
            className="input-field"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label
          className="mb-1.5 block text-xs font-medium text-slate-400"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="input-field"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          className="mb-1.5 block text-xs font-medium text-slate-400"
          htmlFor="service"
        >
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          required
          className="input-field bg-slate-800/60 cursor-pointer"
          value={form.service}
          onChange={handleChange}
        >
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          className="mb-1.5 block text-xs font-medium text-slate-400"
          htmlFor="message"
        >
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project…"
          className="input-field resize-none"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn-primary w-full justify-center py-3">
        Send via WhatsApp 💬
      </button>
    </form>
  );
}
