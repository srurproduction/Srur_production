import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import client1 from './assets/client1.jpg';
import client2 from './assets/client2.jpg';
import client3 from './assets/client3.jpg';

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Startup Founder",
    review: "Uganvi brought our brand to life with an incredible logo and packaging design. Her creativity and attention to detail are unmatched!",
    img: client1
  },
  {
    name: "Sneha Kapoor",
    role: "Social Media Manager",
    review: "Loved working with her! The reels and Instagram creatives were vibrant, trendy, and exactly what we needed for our campaign.",
    img: client2
  },
  {
    name: "Dev Rana",
    role: "Event Organizer",
    review: "Posters and invites were designed beautifully and delivered on time. Uganvi truly understands client vision and turns it into art!",
    img: client3
  }
];

export default function Testimonials({ dark }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="testimonials" 
      className={`py-24 transition-colors duration-500 overflow-hidden ${
        dark ? "bg-neutral-900 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            What <span className="bg-linear-to-r from-[#f06292] to-[#a445ff] bg-clip-text text-transparent">Clients Say</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-linear-to-r from-[#f06292] to-[#a445ff] mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl transition-all duration-300 shadow-xl border ${
                dark 
                ? "bg-neutral-800/40 border-white/5 hover:bg-neutral-800/60" 
                : "bg-white border-slate-200 hover:shadow-2xl"
              }`}
            >
              <FaQuoteLeft className={`absolute top-6 right-8 text-4xl opacity-5 ${
                dark ? "text-white" : "text-black"
              }`} />

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#f06292]" 
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                    <div className="bg-[#f06292] w-3 h-3 rounded-full" />
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-lg leading-tight">{item.name}</h5>
                  <p className={`text-sm ${dark ? "text-neutral-500" : "text-slate-500"}`}>
                    {item.role}
                  </p>
                </div>
              </div>

              <p className={`italic leading-relaxed mb-6 ${dark ? "text-neutral-400" : "text-slate-600"}`}>
                "{item.review}"
              </p>

              <div className="flex gap-1 text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}