import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebookF, FaTelegram, FaYoutube, FaHeart } from 'react-icons/fa';

export default function Footer({ dark }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`relative transition-colors duration-500 ${dark ? 'bg-[#0f0f0f]' : 'bg-slate-50'}`}>
      <div className={`pt-10 pb-12 transition-colors duration-500 ${
        dark ? 'bg-linear-to-b from-[#1a1a1a] to-black' : 'bg-linear-to-b from-[#a445ff] to-[#8a2be2]'
      }`}>
        <div className="container mx-auto px-6 text-white text-center">
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {[
              { icon: <FaInstagram />, link: "https://www.instagram.com/srurproduction" },
              { icon: <FaWhatsapp />, link: "https://whatsapp.com/channel/0029Vb2XUIk05MUjLAO9ii3P" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mr-uganvi-raja" },
              { icon: <FaFacebookF />, link: "https://www.facebook.com/share/19D54cFHAB/" },
              { icon: <FaTelegram />, link: "https://t.me/srurproduction" },
              { icon: <FaYoutube />, link: "https://youtube.com/@m.srurproduction" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#a445ff] transition-all text-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-bold tracking-tight opacity-90">
              © 2025 Srur Production. All rights reserved.
            </p>
            
            <p className="flex items-center justify-center gap-2 text-lg">
              Created with <FaHeart className="text-red-400 animate-pulse" /> by 
              <span className="font-extrabold underline decoration-white/30 underline-offset-4">Uganvi Raja</span>
            </p>
            
            <div className="flex justify-center items-center gap-3 text-sm font-medium opacity-70 uppercase tracking-widest">
              <span>Graphic Designer</span>
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              <span>Video Editor</span>
            </div>
          </div>

          <motion.div className="mt-10">
            <button 
              onClick={scrollToTop}
              className="group relative px-8 py-3 rounded-full overflow-hidden font-bold border-2 border-white/30 hover:border-white transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Back to top <span className="group-hover:-translate-y-1 transition-transform">↑</span>
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <style jsx>{`
                button:hover span { color: #a445ff; }
              `}</style>
            </button>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}