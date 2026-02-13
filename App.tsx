import React, { useState } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Benefits from './components/Benefits';
import Hosts from './components/Hosts';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type LegalView = 'landing' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [legalView, setLegalView] = useState<LegalView>('landing');

  if (legalView === 'privacy') {
    return <PrivacyPolicy onBack={() => setLegalView('landing')} />;
  }
  if (legalView === 'terms') {
    return <TermsOfService onBack={() => setLegalView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-blue selection:text-white">
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <img src="/lean365.svg" alt="Lean365" className="h-6 w-auto" />
             <span className="text-slate-300">|</span>
             <img src="/KN.jpg" alt="The Kaizen Ninja" className="h-6 w-auto" />
          </div>
          <a href="#register" className="hidden sm:block text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors">
            Reserve Your Spot &rarr;
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <ProblemSection />
        <Benefits />
        <Hosts />
        <div id="register" className="py-20 bg-brand-navy">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Stop Documenting Chaos. <br/>Start Building Consistency.
                </h2>
                <p className="text-slate-300 mb-10 text-lg">
                    Limited spots available for this interactive workshop.
                </p>
                <div className="bg-white rounded-2xl p-1 shadow-2xl max-w-lg mx-auto">
                    <RegistrationForm />
                </div>
            </div>
        </div>
      </main>

      <Footer onPrivacyClick={() => setLegalView('privacy')} onTermsClick={() => setLegalView('terms')} />
    </div>
  );
};

export default App;