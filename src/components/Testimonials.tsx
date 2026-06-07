import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Modi',
    review: 'Expertise and dedication to patients truly set you apart. Your professionalism and attentiveness made me feel comfortable and at ease throughout the entire appointment.',
  },
  {
    id: 2,
    name: 'Bassam Mehri',
    review: 'Nidhi Dental Clinic exceeded my expectations! Dr. Nidhi and her team are not only highly skilled professionals but also incredibly compassionate.',
  },
  {
    id: 3,
    name: 'Raheela Mehri',
    review: "Had a great experience at Dr. Nidhi's Dental Clinic. The clinic is neat, the staff is polite, and Dr. Nidhi is extremely gentle and professional.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Patient Satisfaction</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Happy Smiles, Happy Patients</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Content */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-md group">
              <img 
                src="/drnidhi8.webp" 
                alt="Happy Patient at Nidhi Dental Clinic" 
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
                <Quote size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">1000+</p>
                <p className="text-xs text-slate-500">Happy Patients</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonials List */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.review}"</p>
                <h5 className="font-bold text-slate-900">- {testimonial.name}</h5>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
