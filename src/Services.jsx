import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBezierCurve, 
  FaPenNib, 
  FaHashtag, 
  FaLayerGroup, 
  FaBoxOpen, 
  FaMobileAlt 
} from 'react-icons/fa';

export default function Services({ dark }) {
  const services = [
    { id: "Branding", title: "Branding", icon: <FaBezierCurve />, desc: "Complete visual identity and brand strategy." },
    { id: "Logo Design", title: "Logo Design", icon: <FaPenNib />, desc: "Unique, memorable logos that define your business." },
    { id: "Social Media", title: "Social Media", icon: <FaHashtag />, desc: "Engaging creatives for Instagram, Facebook, and more." },
    { id: "Posters", title: "Posters", icon: <FaLayerGroup />, desc: "Eye-catching print and digital poster designs." },
    { id: "Packaging", title: "Packaging", icon: <FaBoxOpen />, desc: "Premium product packaging that stands out on shelves." },
    { id: "UI-UX", title: "UI/UX", icon: <FaMobileAlt />, desc: "Modern, user-centered digital interfaces." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="services" 
      className={`py-24 transition-colors duration-500 ${
        dark ? "bg-neutral-900 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            My <span className="bg-linear-to-r from-[#f06292] to-[#a445ff] bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <p className={`max-w-xl mx-auto ${dark ? "text-neutral-400" : "text-slate-500"}`}>
            Elevating your brand with custom designs tailored to your business needs.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: dark ? "0 20px 40px rgba(0,0,0,0.6)" : "0 20px 40px rgba(0,0,0,0.05)"
              }}
              className={`relative group p-8 rounded-3xl border transition-all duration-300 overflow-hidden ${
                dark 
                  ? "bg-neutral-800/40 border-white/10 hover:border-[#f06292]/50" 
                  : "bg-white border-slate-200 hover:border-[#a445ff]/50 shadow-sm"
              }`}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-linear-to-br from-[#f06292] to-[#a445ff] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:rotate-360 ${
                dark ? "bg-white/5 text-white" : "bg-slate-100 text-[#f06292]"
              }`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f06292] transition-colors">
                {service.title}
              </h3>

              <p className={`mb-6 text-sm leading-relaxed ${dark ? "text-neutral-400" : "text-slate-500"}`}>
                {service.desc}
              </p>

              <Link 
                to={`/services/${service.id.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all ${
                  dark ? "text-[#f06292]" : "text-[#a445ff]"
                }`}
              >
                VIEW PORTFOLIO <span className="text-xl">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}