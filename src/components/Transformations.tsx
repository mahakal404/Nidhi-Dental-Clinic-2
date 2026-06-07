import { motion } from 'framer-motion';

const transformations = [
  {
    id: 1,
    image: '/gap-closure.webp',
    title: 'Midline Gap Closure',
    description: 'Painless aesthetic correction for a confident and perfect smile.'
  },
  {
    id: 2,
    image: '/old-man-dentures.webp',
    title: 'Complete Dentures',
    description: 'Restoring a natural smile, facial structure, and full chewing ability.'
  },
  {
    id: 3,
    image: '/dental-crown.webp',
    title: 'Metal Crown Placement',
    description: 'Affordable, durable, and precise tooth replacement after root canal.'
  },
  {
    id: 4,
    image: '/diamond.webp',
    title: 'Oral Jewellery',
    description: 'Adding a safe, non-invasive and stylish sparkle to your teeth.'
  }
];

const Transformations = () => {
  return (
    <section id="transformations" className="py-20 bg-blue-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Before & After</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Real Results. Real Smiles.</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
            See the life-changing dental transformations crafted by Dr. Nidhi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-grow">
                <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
