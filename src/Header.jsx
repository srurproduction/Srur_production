import React from 'react';
import { motion } from 'framer-motion';
import pic from './assets/pic.jpg';

export default function Header({ dark }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="home"
      className={`relative transition-colors duration-500 overflow-hidden pt-24 lg:pt-0 min-h-[90vh] flex items-center ${dark ? "bg-neutral-900 text-white" : "bg-slate-50 text-slate-900"
        }`}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className={`absolute top-0 right-[10%] w-72 h-72 rotate-45 z-0 pointer-events-none blur-[120px] rounded-full ${dark ? "bg-yellow-400" : "bg-purple-300"
          }`}
      />

      <div className="container mx-auto px-6 py-12 lg:py-32 relative z-10">
        <header className="flex flex-col md:flex-row items-center justify-between gap-12 mt-10 md:mt-0">
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-medium mb-2 ${dark ? 'text-white' : 'text-slate-700'}`}
            >
              Hello I'm 👋
            </motion.h1>

            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-9xl font-extrabold mb-4 bg-linear-to-r from-[#f06292] to-[#a445ff] bg-clip-text text-transparent italic tracking-tighter"
              style={{ fontFamily: '"Tangerine", cursive' }}
            >
              Uganvi Raja
            </motion.h1>

            <motion.h4
              variants={itemVariants}
              className={`text-2xl font-bold mb-6 tracking-wide ${dark ? 'text-neutral-300' : 'text-slate-500'}`}
            >
              Graphic Designer
            </motion.h4>

            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed mb-8 max-w-2xl transition-colors duration-500 ${dark ? 'text-neutral-400' : 'text-slate-600'
                }`}
            >
              👉 I'm a passionate graphic designer and video editor offering creative,
              high-quality design services online. I specialize in{" "}
              <strong className={dark ? "text-white" : "text-slate-950"}>logo design</strong>,{" "}
              <strong className={dark ? "text-white" : "text-slate-950"}>branding</strong>,{" "}
              <strong className={dark ? "text-white" : "text-slate-950"}>social media graphics</strong>,
              brochures, packaging, and much more.
              <span className="block mt-4">
                My goal is to help businesses visually communicate their message and stand out
                with professional, custom designs.
              </span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="https://wa.me/917324963502"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(240,98,146,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white shadow-lg"
                style={{ background: 'linear-gradient(to right, #f06292, #a445ff)' }}
              >
                <i className="fa-brands fa-whatsapp text-xl"></i> Contact Me
              </motion.a>

              <motion.a
                href="./Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold shadow-md transition-colors ${dark
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-slate-900 text-white hover:bg-black"
                  }`}
              >
                <i className="fa-solid fa-download"></i> Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/3 flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="p-1.5 rounded-full bg-linear-to-tr from-orange-400 via-pink-600 to-indigo-600 shadow-2xl"
              >
                <motion.img
                  src={pic}
                  alt="profile"
                  whileHover={{ scale: 0.95 }}
                  animate={{ rotate: -360 }}
                  transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 0.3 } }}
                  className={`w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 ${dark ? "border-neutral-900" : "border-slate-50"
                    }`}
                />
              </motion.div>

              <div className={`absolute inset-0 blur-3xl opacity-30 -z-10 rounded-full transition-colors duration-500 ${dark ? "bg-purple-500" : "bg-pink-300"
                }`} />
            </div>
          </motion.div>

        </header>
      </div>
    </section>
  );
}