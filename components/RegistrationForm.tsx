import React, { useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-2">You're In!</h3>
        <p className="text-slate-600 mb-6">
          We've sent a calendar invitation and details to your email. See you on March 12th.
        </p>
        <button 
            onClick={() => setIsSuccess(false)}
            className="text-brand-blue font-medium hover:underline text-sm"
        >
            Register another person
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
            <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
            <input 
                required 
                id="firstName"
                type="text" 
                placeholder="Jane" 
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
            />
        </div>
        <div className="space-y-1">
            <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
            <input 
                required 
                id="lastName"
                type="text" 
                placeholder="Doe" 
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
            />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email</label>
        <input 
            required 
            id="email"
            type="email" 
            placeholder="jane@company.com" 
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="title" className="text-sm font-medium text-slate-700">Job Title</label>
        <input 
            required 
            id="title"
            type="text" 
            placeholder="Operations Manager" 
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
            <>
                <Loader2 className="animate-spin" size={20} /> Registering...
            </>
        ) : (
            "Complete Registration"
        )}
      </button>

      <p className="text-xs text-center text-slate-400 mt-4">
        By registering, you agree to receive workshop updates. We respect your privacy.
      </p>
    </form>
  );
};

export default RegistrationForm;