import React from 'react';

const Marquee = () => {
  const content = "⭐ 10+ Years Experience  •  🦷 Painless Root Canal  •  💎 Premium Oral Jewellery  •  🏆 ISO Certified Clinic  •  😊 5000+ Happy Patients";
  
  // We duplicate the content to make the infinite scroll seamless
  return (
    <div className="bg-slate-900 text-white py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        <span className="mx-4 text-sm font-medium tracking-wide">{content}</span>
        <span className="mx-4 text-sm font-medium tracking-wide">{content}</span>
        <span className="mx-4 text-sm font-medium tracking-wide">{content}</span>
        <span className="mx-4 text-sm font-medium tracking-wide">{content}</span>
      </div>
    </div>
  );
};

export default Marquee;
