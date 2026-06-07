import { motion } from 'framer-motion';
import { Award, Heart, UserCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Content */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
              {/* Image of Dr. Nidhi */}
              <img 
                src="/drnidhi1.webp" 
                alt="Dr. Nidhi Maisuria Mistry" 
                className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="text-center">
                <span className="block text-3xl font-extrabold text-primary">10+</span>
                <span className="block text-sm font-medium text-slate-500">Years of<br/>Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-2 inline-block px-3 py-1 bg-primary-light/50 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
              Meet The Doctor
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Dr. Nidhi Maisuria Mistry
            </h2>
            <p className="text-lg text-primary font-medium mb-6 flex items-center gap-2">
              <Award size={20} />
              B.D.S. Dental Surgeon
            </p>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Dr. Nidhi is a highly skilled and compassionate dental professional dedicated to providing the highest quality of care to her patients. With a patient-centric approach, she ensures every visit is comfortable, transparent, and pain-free.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Specializing in both general and cosmetic dentistry, she takes pride in restoring smiles and confidence. Her expertise ranges from complex root canal treatments to kid-friendly pediatric care, ensuring that families in and around Valsad receive world-class dental treatments locally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Patient First</h4>
                  <p className="text-sm text-slate-500 mt-1">Personalized care tailored to your needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Expert Team</h4>
                  <p className="text-sm text-slate-500 mt-1">Highly qualified and friendly staff.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
