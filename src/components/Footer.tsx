import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <a href="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
                <img 
                  src="/nidhi-dental-clinic-logo.webp" 
                  alt="Nidhi Dental Clinic Logo" 
                  className="h-16 w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Dedicated to providing world-class, painless dental care with an emphasis on patient comfort and advanced technology.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/nidhidentalclinic" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Dr. Nidhi', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Clinic Gallery', href: '#gallery' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Pediatric Dentistry (Kids-Pedo)',
                'Root Canal Treatment',
                'Invisible Aligners',
                'Teeth Whitening',
                'Jaw Cyst Surgeries',
                'Oral Jewellery'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-primary transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="https://maps.google.com/?q=Nidhi+Dental+Clinic,Killa-Pardi,Valsad,Gujarat" target="_blank" rel="noreferrer" className="text-sm leading-relaxed hover:text-blue-400 transition-colors">
                  2nd Floor, Shop No. 222-223, Rudra Arcade, Damani Zapa, Killa-Pardi, Valsad, Gujarat 396125
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <div className="text-sm flex flex-col gap-1">
                  <a href="tel:+917016193194" className="hover:text-blue-400 transition-colors">+91 70161 93194</a>
                  <a href="tel:+919712939196" className="hover:text-blue-400 transition-colors">+91 97129 39196</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:drnidhimaisuriamistry@gmail.com" className="text-sm hover:text-blue-400 transition-colors">drnidhimaisuriamistry@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between text-center w-full mt-8 gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2026 Nidhi Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500 items-center">
            Built by&nbsp;
            <span className="animate-pulse font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-widest text-lg drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] uppercase">
              R-Labs
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
