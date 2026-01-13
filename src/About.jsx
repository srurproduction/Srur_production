import React from "react";
import { motion } from "framer-motion";
import { FaPalette, FaCoffee, FaSmile, FaClock } from "react-icons/fa";

export default function About({ dark }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const stats = [
    { icon: <FaPalette />, value: "70+", label: "Design Projects" },
    { icon: <FaCoffee />, value: "∞", label: "Cups of Coffee" },
    { icon: <FaSmile />, value: "30+", label: "Happy Clients" },
    { icon: <FaClock />, value: "2+", label: "Years Experience" },
  ];

  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-500 ${
        dark ? "bg-neutral-900 text-white" : "bg-white text-slate-800"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-16"
        >
          About <span className="bg-linear-to-r from-[#f06292] to-[#a445ff] bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6" style={{ fontFamily: '"Tangerine", cursive' }}>
              Hi, I'm <strong className="text-[#f06292]">Uganvi Raja</strong>, a passionate Graphic Designer and video Editor who loves turning ideas into vibrant visuals.
            </p>
            <div className={`space-y-4 text-lg ${dark ? "text-neutral-400" : "text-slate-600"}`}>
              <p>
                I specialize in <strong className={dark ? "text-white" : "text-slate-900"}>branding, logo design, and social media creatives</strong>. 
                I blend modern aesthetics with meaningful design, constantly exploring new trends, fonts, and color palettes.
              </p>
              <p>
                Beyond design, I enjoy mentoring new creatives, sipping coffee ☕, and doodling fresh ideas ✍️. My goal is to create work that doesn't just look good, but feels right.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className={`p-6 rounded-3xl text-center border transition-all duration-300 shadow-xl ${
                  dark
                    ? "bg-neutral-800/50 border-white/10 hover:bg-neutral-800"
                    : "bg-slate-50 border-slate-200 hover:bg-white"
                }`}
              >
                <div className="text-3xl mb-3 flex justify-center text-[#f06292]">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-black bg-linear-to-r from-[#f06292] to-[#a445ff] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </h4>
                <p className={`font-semibold tracking-wide uppercase text-xs ${dark ? "text-neutral-500" : "text-slate-400"}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}