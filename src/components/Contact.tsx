import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    slot: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dynamic WhatsApp Logic
    const message = `🏥 *New Appointment Request*\n\nHello Dr. Nidhi, I would like to book a dental appointment.\n\n👤 *Name:* ${formData.name}\n📱 *Phone:* ${formData.phone}\n📅 *Date:* ${formData.date}\n⏰ *Slot:* ${formData.slot}\n\nPlease confirm my availability. Thank you!`;
    const whatsappUrl = `https://wa.me/917016193194?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Card UI Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* Left Side: Clinic Info - Dark Theme */}
          <div className="w-full md:w-5/12 bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex-grow flex flex-col justify-center">
              {/* Logo & Branding */}
              <div className="mb-10">
                <img 
                  src="/nidhi-dental-clinic-logo.webp" 
                  alt="Nidhi Dental Clinic" 
                  className="h-16 w-auto mb-4 bg-white/10 p-2 rounded-xl backdrop-blur-sm"
                />
                <h3 className="text-2xl font-bold">Nidhi Dental Clinic</h3>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                  Experience world-class, painless dental care with an emphasis on patient comfort and advanced technology.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-primary-light mt-1 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Clinic Location</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      2nd Floor, Shop No. 222-223,<br />
                      Rudra Arcade, Damani Zapa,<br />
                      Killa-Pardi, Valsad, Gujarat 396125
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-primary-light mt-1 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Phone Numbers</h5>
                    <p className="text-slate-300 text-sm">
                      +91 70161 93194<br />
                      +91 97129 39196
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-primary-light shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Email Address</h5>
                    <p className="text-slate-300 text-sm break-all">drnidhimaisuriamistry@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-primary-light mt-1 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Clinic Hours</h5>
                    <p className="text-slate-300 text-sm">
                      Mon-Sat: 10:00 AM - 01:00 PM | 05:00 PM - 07:30 PM<br />
                      <span className="text-rose-400 font-medium">Sunday: Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Booking Form - Light Theme */}
          <div className="w-full md:w-7/12 bg-white p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h4 className="text-3xl font-extrabold text-slate-900 mb-2">Book an Appointment</h4>
              <p className="text-slate-500">Fill in your details and we'll confirm your slot shortly.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Mobile Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="date" className="text-sm font-semibold text-slate-700">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="slot" className="text-sm font-semibold text-slate-700">Time Slot</label>
                  <select 
                    id="slot" 
                    name="slot" 
                    required
                    value={formData.slot}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
                  >
                    <option value="" disabled>Select a slot</option>
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Evening (5 PM - 7:30 PM)">Evening (5 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle size={20} />
                  <span>Confirm Booking via WhatsApp</span>
                </button>
                <p className="text-xs text-center text-slate-500 mt-3 font-medium">
                  You will be safely redirected to WhatsApp.
                </p>
              </div>
              
            </form>
          </div>
          
        </div>
      </div>

      {/* Google Maps Integration */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <iframe 
          src="https://maps.google.com/maps?q=Nidhi+Dental+Clinic+Killa+Pardi&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 md:h-96 border-0 rounded-xl shadow-lg mb-8"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nidhi Dental Clinic Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
