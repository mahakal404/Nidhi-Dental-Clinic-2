import { motion } from 'framer-motion';
import { Baby, Gem, Stethoscope, Smile, Sparkles, Syringe } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Kids-Pedo',
    subtitle: 'Pediatric Dentistry',
    description: 'Specialized, gentle care for children to ensure their early dental experiences are positive and pain-free.',
    icon: Baby,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    image: '/drnidhi5.webp',
  },
  {
    id: 2,
    title: 'Oral Jewellery',
    subtitle: 'Diamond on Teeth',
    description: 'Add a sparkle to your smile with safe, non-invasive oral diamonds and crystals applied by experts.',
    icon: Gem,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    image: '/diamond.webp',
  },
  {
    id: 3,
    title: 'Root Canal & Extraction',
    subtitle: 'Painless Procedures',
    description: 'Advanced root canal treatments and safe extractions to relieve pain and preserve your dental health.',
    icon: Stethoscope,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    image: '/drnidhi2.webp',
  },
  {
    id: 4,
    title: 'Invisible Aligners',
    subtitle: 'Clear Orthodontics',
    description: 'Straighten your teeth discreetly with custom-made clear aligners, without the need for traditional metal braces.',
    icon: Smile,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 5,
    title: 'Whitening & Scaling',
    subtitle: 'Cosmetic Dentistry',
    description: 'Professional scaling to remove plaque and advanced whitening treatments for a radiant, bright smile.',
    icon: Sparkles,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    id: 6,
    title: 'Jaw Cyst Surgeries & Implants',
    subtitle: 'Surgical Treatments',
    description: 'Expert surgical interventions for jaw cysts and permanent tooth replacement with high-quality implants.',
    icon: Syringe,
    color: 'text-slate-700',
    bgColor: 'bg-slate-100',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We offer a wide range of dental treatments using state-of-the-art technology to ensure your smile is healthy and beautiful.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {service.image && (
                <div className="overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-t-xl h-56 md:h-64 w-full object-cover object-[center_25%] hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              )}
              <div className="p-8 flex-grow">
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h4>
                <p className="text-sm font-medium text-primary mb-4">{service.subtitle}</p>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
