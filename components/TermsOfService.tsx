import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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

        <h1 className="text-3xl font-bold text-brand-navy mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: February 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Acceptance of Terms</h2>
            <p>
              By registering for this workshop through this website, you agree to these Terms of Service. If you do not agree, please do not submit your registration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Registration & Eligibility</h2>
            <p>
              Registration is subject to availability. You agree to provide accurate and complete information when registering. We reserve the right to refuse or cancel a registration if we believe information provided is inaccurate or if the workshop is full or cancelled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Workshop Conduct</h2>
            <p>
              By attending the workshop, you agree to participate in a respectful and professional manner. We reserve the right to remove any participant who disrupts the session or violates these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Content & Materials</h2>
            <p>
              Workshop content and materials provided are for your personal or internal business use in connection with the event. You may not redistribute, resell, or commercially exploit the materials without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Cancellation & Changes</h2>
            <p>
              We may need to reschedule or cancel the workshop due to unforeseen circumstances. In that case, we will notify you using the contact information you provided and, where applicable, offer an alternative date or a refund as appropriate. We are not liable for any indirect or consequential losses arising from cancellation or rescheduling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Limitation of Liability</h2>
            <p>
              This workshop is provided for educational and informational purposes. We do not guarantee any specific business or operational outcomes. To the fullest extent permitted by law, our liability in connection with your registration or attendance is limited to the amount you paid (if any) for the workshop.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy mt-8 mb-3">Contact</h2>
            <p>
              For questions about these terms, please use the contact or support link in the footer of this site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
