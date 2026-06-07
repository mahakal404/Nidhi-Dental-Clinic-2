import React from 'react';
import { Star, Stethoscope, Diamond, Award, Heart } from 'lucide-react';

const Marquee = () => {
  const items = [
    { text: "10+ Years Experience", Icon: Star },
    { text: "Painless Root Canal", Icon: Stethoscope },
    { text: "Premium Oral Jewellery", Icon: Diamond },
    { text: "ISO Certified Clinic", Icon: Award },
    { text: "5000+ Happy Patients", Icon: Heart },
  ];
  
  // We duplicate the content to make the infinite scroll seamless
  return (
    <div className="bg-slate-900 text-white py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee items-center gap-12 pr-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            {items.map((item, j) => (
              <span key={j} className="flex items-center gap-2 text-sm font-medium tracking-wide">
                <item.Icon className="w-5 h-5 text-slate-300" />
                {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
