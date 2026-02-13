import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-navy font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to workshop
        </button>

        <h1 className="text-3xl font-bold text-brand-navy mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: February 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Information We Collect</h2>
            <p>
              When you register for our workshop, we collect the information you provide, such as your name, email address, company name (if provided), and any optional details you choose to share. We use this information solely to manage your registration, send you event details and reminders, and communicate with you about the workshop.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">How We Use Your Information</h2>
            <p>
              We use your contact information to confirm your registration, send workshop materials or follow-up communications related to the event, and respond to your inquiries. We do not sell, rent, or share your personal information with third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Data Retention & Security</h2>
            <p>
              We retain your registration data only as long as needed for the purposes described above or as required by law. We take reasonable steps to protect your personal information from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Cookies & Usage Data</h2>
            <p>
              Our registration page may use minimal technical cookies or similar technologies to ensure the site functions correctly. We do not use tracking or advertising cookies for this workshop registration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of the personal information we hold about you in connection with your registration. Contact us using the details provided on this site or in your confirmation email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Contact</h2>
            <p>
              For questions about this privacy policy or your personal data, please use the contact or support link in the footer of this site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
