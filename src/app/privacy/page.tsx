import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Skypaints',
  description: 'Privacy Policy for Skypaints',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8">Privacy Policy</h1>
        
        <div className="prose prose-on-surface dark:prose-invert max-w-none">
          <p className="text-on-surface-variant text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-on-surface mb-4">1. Information We Collect</h2>
            <p className="text-on-surface-variant mb-4">
              At Skypaints, we collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-on-surface mb-4">2. How We Use Your Information</h2>
            <p className="text-on-surface-variant mb-4">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and send you technical notices, updates, and administrative messages.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-on-surface mb-4">3. Information Sharing</h2>
            <p className="text-on-surface-variant mb-4">
              We do not share or sell your personal information with third parties for their direct marketing purposes. We may share your information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-on-surface mb-4">4. Contact Us</h2>
            <p className="text-on-surface-variant mb-4">
              If you have any questions about this Privacy Policy, please contact us at support@skypaints.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
