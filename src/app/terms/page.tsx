import React from "react";

export const metadata = {
  title: "Terms of Service | Skypaints",
  description: "Terms of Service for Skypaints",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-on-surface dark:prose-invert max-w-none">
          <p className="text-on-surface-variant text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-on-surface mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-on-surface-variant mb-4">
              By accessing or using our website, you agree to be bound by these
              Terms of Service and all applicable laws and regulations. If you
              do not agree with any of these terms, you are prohibited from
              using or accessing this site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-on-surface mb-4">
              2. Intellectual Property Rights
            </h2>
            <p className="text-on-surface-variant mb-4">
              Unless otherwise stated, Skypaints and/or its licensors own the
              intellectual property rights for all material on Skypaints. All
              intellectual property rights are reserved. You may access this
              from Skypaints for your own personal use subjected to restrictions
              set in these terms and conditions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-on-surface mb-4">
              3. Products and Services
            </h2>
            <p className="text-on-surface-variant mb-4">
              We reserve the right to modify or discontinue any product or
              service without notice at any time. We shall not be liable to you
              or to any third-party for any modification, price change,
              suspension or discontinuance of the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-on-surface mb-4">
              4. Governing Law
            </h2>
            <p className="text-on-surface-variant mb-4">
              These Terms shall be governed and construed in accordance with the
              laws of India, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
