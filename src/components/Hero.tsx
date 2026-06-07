import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Stethoscope, Baby } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/30 -z-10 rounded-bl-[100px] md:rounded-bl-[200px]" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Accepting New Patients
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Healthy Teeth & <span className="text-primary">Beautiful Smiles</span> Start Here!
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Experience world-class, painless dental care with Dr. Nidhi. We combine advanced technology with a compassionate, kid-friendly environment to give you the perfect smile you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Calendar size={20} />
                Book Appointment
              </a>
              <a 
                href="#services" 
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-full">
                <ShieldCheck className="text-emerald-500" size={18} /> Painless Treatments
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-full">
                <Stethoscope className="text-primary" size={18} /> Advanced Tech
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-full">
                <Baby className="text-rose-400" size={18} /> Kid-Friendly
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-square lg:aspect-[4/3] group">
              {/* Hero Section Image */}
              <img 
                src="/drnidhi7.webp" 
                alt="Dr. Nidhi Maisuria Mistry - Friendly Dentist at Nidhi Dental Clinic" 
                className="w-full max-w-md mx-auto md:max-w-full md:aspect-square object-cover object-top rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center font-bold text-xl">
                5★
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Top Rated</p>
                <p className="text-xs text-slate-500">Dental Clinic in Pardi</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
