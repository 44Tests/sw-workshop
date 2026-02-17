import React from 'react';

const Hosts: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-navy mb-12">Meet Your Instructors</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
           {/* Host 1 - The Kaizen Ninja */}
           <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner flex-shrink-0">
                <img src="/KG.jpeg" alt="The Kaizen Ninja Representative" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">The Kaizen Ninja</h3>
              <p className="text-brand-blue font-medium mb-3">Partner</p>
              <p className="text-slate-600 text-center text-sm leading-relaxed">
                 Expert in rapid transformation and practical, floor-level problem solving for manufacturing environments.
              </p>
           </div>

           {/* Host 2 - Lean365 */}
           <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner flex-shrink-0">
                <img src="/SB.jpeg" alt="Lean365 Representative" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">Lean365.ai</h3>
              <p className="text-brand-blue font-medium mb-3">Partner</p>
              <p className="text-slate-600 text-center text-sm leading-relaxed">
                Specializing in AI-driven continuous improvement solutions that simplify complex operational challenges.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hosts;