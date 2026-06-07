
import { motion } from 'framer-motion';

const images = [
  {
    id: 1,
    url: '/drnidhi9.webp',
    alt: 'Modern Dental Chair Setup',
  },
  {
    id: 2,
    url: '/drnidhi11.webp',
    alt: 'Welcoming Reception Area',
  },
  {
    id: 3,
    url: '/drnidhi12.webp',
    alt: 'Clinic Entrance',
  },
  {
    id: 4,
    url: '/drnidhi10.webp',
    alt: 'Doctor Certificates and Awards',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Our Environment</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Clinic Gallery</h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Step into a clean, modern, and welcoming space designed to make your dental visits as comfortable as possible.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 text-center">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
