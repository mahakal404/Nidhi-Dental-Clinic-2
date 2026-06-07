import { useState } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      <div className="bg-blue-600 text-white text-xs md:text-sm py-2 px-4 text-center font-semibold tracking-wide flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline-block shrink-0"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
        <span>Special Offer: Free Dental Checkup in March of Every Year! Book your slot today.</span>
      </div>
      <nav className="w-full glass transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
              <img 
                src="/nidhi-dental-clinic-logo-h.webp" 
                alt="Nidhi Dental Clinic Logo" 
                className="h-8 w-8 md:h-14 md:w-14 object-contain rounded-full shrink-0"
              />
              <span className="text-[15px] sm:text-lg md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-cyan-500 bg-[length:200%_auto] tracking-tight animate-[gradient_3s_linear_infinite] whitespace-nowrap">
                Nidhi Dental Clinic
              </span>
            </a>
          </div>

          {/* Desktop Menu & CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-3 md:gap-6">
              <a href="tel:+917016193194" className="flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900 transition-colors">
                <Phone size={20} />
                <span className="hidden md:block">+91 70161 93194</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-primary-light/30 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-full shadow-md transition-all"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
