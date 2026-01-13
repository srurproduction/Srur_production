import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

export default function ServiceDetail({ dark }) {
  const { name } = useParams();
  const formattedName = name.replace(/-/g, ' ');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);
  
  const imageList = [1, 2, 3, 4, 5, 6].map(num => ({
    id: num,
    path: `/assets/${name}/${num}.jpg`,
    title: `${formattedName} Project ${num}`
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section 
      className={`py-24 min-h-screen transition-colors duration-500 ${
        dark ? "bg-neutral-900 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className={`flex items-center gap-2 font-bold transition-colors ${
              dark ? "text-neutral-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <FaArrowLeft /> BACK TO HOME
          </Link>
        </motion.div>

        <header className="text-center mb-16">
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-black capitalize mb-4"
          >
            {formattedName} <span className="bg-linear-to-r from-[#f06292] to-[#a445ff] bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#f06292] to-[#a445ff] mx-auto rounded-full" />
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {imageList.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className={`overflow-hidden rounded-3xl border-2 transition-all duration-500 ${
                dark ? "border-white/10 group-hover:border-[#f06292]/50" : "border-slate-200 group-hover:border-[#a445ff]/50"
              }`}>
                <img
                  src={project.path}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x800?text=Project+Coming+Soon";
                  }}
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white">
                    <p className="text-xs font-bold tracking-widest uppercase mb-1 text-[#f06292]">Featured Work</p>
                    <h4 className="text-xl font-bold uppercase">{project.title}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mt-20 text-center p-12 rounded-3xl border-2 border-dashed ${
            dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-100/50"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Want a similar design for your business?</h3>
          <Link 
            to="/"
            className="inline-block px-10 py-4 rounded-full font-black text-white shadow-xl hover:scale-105 transition-transform"
            style={{ background: 'linear-gradient(to right, #f06292, #a445ff)' }}
          >
            LET'S WORK TOGETHER
          </Link>
        </motion.div>
      </div>
    </section>
  );
}