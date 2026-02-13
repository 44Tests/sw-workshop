import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const CAROUSEL_IMAGES = ['/1.png', '/2.png', '/3.png', '/4.png'];

const Benefits: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    "The simplest method to build Standard Work that anyone in your organization can execute today.",
    "The common pitfalls that cause failure (and precisely how to prevent them).",
    "The true foundation that drives consistent results in any operation.",
    "A practical framework built from real manufacturing floor experience."
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">
              Cut through the complexity. <br/> Focus on what actually works.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Join us for a 2-hour interactive workshop. We aren't selling software or complicated certifications. We are sharing a proven methodology to stop the variability that kills performance.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="flex-shrink-0 text-brand-blue mt-1" size={24} />
                  <p className="text-slate-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
               <a href="#register" className="inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-navy transition-colors">
                  Reserve your spot now <ArrowRight size={20} />
               </a>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-transparent opacity-10 rounded-2xl transform rotate-3 -z-10"></div>
             <div className="relative rounded-2xl shadow-2xl border-4 border-white overflow-hidden aspect-[4/3] bg-slate-100">
               {CAROUSEL_IMAGES.map((src, index) => (
                 <img
                   key={src}
                   src={src}
                   alt={`Workshop slide ${index + 1}`}
                   className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                     index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                   }`}
                 />
               ))}
               <button
                 type="button"
                 onClick={() => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)}
                 className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 shadow-md hover:bg-white text-brand-navy transition-colors"
                 aria-label="Previous slide"
               >
                 <ChevronLeft size={24} />
               </button>
               <button
                 type="button"
                 onClick={() => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)}
                 className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 shadow-md hover:bg-white text-brand-navy transition-colors"
                 aria-label="Next slide"
               >
                 <ChevronRight size={24} />
               </button>
               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                 {CAROUSEL_IMAGES.map((_, index) => (
                   <button
                     key={index}
                     type="button"
                     onClick={() => setCurrentSlide(index)}
                     className={`w-2.5 h-2.5 rounded-full transition-colors ${
                       index === currentSlide ? 'bg-white shadow' : 'bg-white/60 hover:bg-white/80'
                     }`}
                     aria-label={`Go to slide ${index + 1}`}
                   />
                 ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;