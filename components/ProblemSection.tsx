import React from 'react';
import { XCircle, FileWarning, TrendingDown, Users } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            The Uncomfortable Truth
          </h2>
          <p className="text-xl text-slate-600">
            <span className="font-bold text-brand-accent">80% of Standard Work initiatives fail.</span> Not because the teams aren't capable, but because leaders are building on the wrong foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                    <FileWarning size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Documenting Chaos</h3>
                <p className="text-slate-600 leading-relaxed">
                    Detailed work instructions for broken processes only cement the inefficiency. You cannot document your way out of process variability.
                </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                    <TrendingDown size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">The Audit Trap</h3>
                <p className="text-slate-600 leading-relaxed">
                    Organizations audit compliance yet still see the same output variability. Audits without a solid foundation are just theater.
                </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                    <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Engagement Failure</h3>
                <p className="text-slate-600 leading-relaxed">
                   When Standard Work is imposed rather than developed by the floor, it is ignored the moment the supervisor walks away.
                </p>
            </div>
        </div>

        <div className="mt-16 p-8 bg-brand-navy rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-medium text-white">
                "The problem is not the documentation. It's what comes before it."
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;