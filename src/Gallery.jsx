import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpandAlt, FaTimes } from 'react-icons/fa';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';

const images = [
  { id: 1, src: img1, title: "Logo Concept" },
  { id: 2, src: img2, title: "Social Media Kit" },
  { id: 3, src: img3, title: "Brand Identity" },
  { id: 4, src: img4, title: "Packaging Design" },
  { id: 5, src: img5, title: "Brochure Layout" },
  { id: 6, src: img6, title: "UI Elements" },
];

export default function Gallery({ dark }) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section 
      id="gallery" 
      className={`py-24 transition-colors duration-500 ${
        dark ? "bg-neutral-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}
          >
            Creative <span className="bg-linear-to-r from-[#f06292] to-[#a445ff] bg-clip-text text-transparent">Gallery</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-linear-to-r from-[#f06292] to-[#a445ff] mx-auto rounded-full" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl"
              onClick={() => setSelectedImg(img.src)}
            >
              <motion.img 
                src={img.src} 
                alt={img.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-auto object-cover rounded-3xl border transition-colors duration-500"
                style={{ borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}
              />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <FaExpandAlt className="text-white text-3xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform" />
                <p className="text-white font-bold tracking-widest text-sm uppercase translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                  View Image
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white text-3xl hover:text-[#f06292] transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <FaTimes />
            </button>

            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImg}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border-2 border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}