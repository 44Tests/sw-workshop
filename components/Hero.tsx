import React from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-brand-light pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-semibold mb-6">
              <AlertCircle size={16} />
              <span>Don't miss out: March 12, 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-tight mb-6">
              Master Standard Work <br/> in <span className="text-brand-blue">2 Hours</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Your documentation is likely making things worse. Join us to discover the practical framework built from real manufacturing floor experience—not theory.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 text-slate-700 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                  <Calendar className="text-brand-blue" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Date</p>
                  <p className="font-bold">March 12, 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                  <Clock className="text-brand-blue" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Time</p>
                  <p className="font-bold">10:00 AM EST</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-500 font-medium">Join leaders from various industries</p>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Save your seat</h3>
              <p className="text-slate-500 mb-6 text-sm">Free interactive virtual workshop. Limited spots.</p>
              <RegistrationForm />
            </div>
          </div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default Hero;