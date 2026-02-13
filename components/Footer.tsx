import React from 'react';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Lean365.ai & The Kaizen Ninja. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <button type="button" onClick={() => onPrivacyClick?.()} className="hover:text-white transition-colors">
            Privacy Policy
          </button>
          <button type="button" onClick={() => onTermsClick?.()} className="hover:text-white transition-colors">
            Terms of Service
          </button>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;