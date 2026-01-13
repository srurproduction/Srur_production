import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import logo from "./assets/logo.jpeg";

const sections = ["home", "about", "services", "gallery", "testimonials", "contact"];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const mouseX = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 200;
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(sec);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileClick = (e, item) => {
    const target = document.getElementById(item);
    if (target) {
      e.preventDefault();
      setOpen(false);
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 300); 
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`
        fixed z-50 pb-5 pt-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] lg:max-w-7xl
        rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-500
        ${scrolled ? "py-2 top-2" : "py-4 top-5"}
        ${dark 
          ? "bg-neutral-900/80 border border-white/10" 
          : "bg-linear-to-br from-[#8B5E3C]/85 to-[#D8A055]/85 border border-white/20"}
      `}
    >
      <div className="px-6 mx-3 flex items-center justify-between relative">
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="logo" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
          <span className="text-white text-lg sm:text-xl font-extrabold tracking-tighter">
            Srur Production
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-2 relative">
          <ul 
            className="flex items-center gap-1 relative"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              mouseX.set(e.clientX - rect.left - 15);
            }}
          >
            {sections.map((item) => (
              <li key={item} className="relative">
                <motion.a
                  href={`#${item}`}
                  whileHover={{ scale: 1.1 }}
                  className={`
                    relative px-4 py-2 block text-sm font-bold tracking-widest transition-colors duration-300
                    ${active === item ? "text-white" : "text-white/60 hover:text-white"}
                  `}
                >
                  {item.toUpperCase()}
                  {active === item && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-3/4 rounded-full bg-white shadow-[0_0_15px_#fff,0_0_25px_#ffd700]"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
            <motion.div style={{ x: springX }} className="absolute bottom-0 h-0.5 w-8 bg-white/40 blur-sm rounded-full pointer-events-none" />
          </ul>

          <button onClick={() => setDark(!dark)} className="ml-4 text-xl hover:rotate-12 transition-transform">
            {dark ? "🌙" : "☀️"}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-60">
          <span className={`h-0.75 w-7 bg-white rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2.25" : ""}`} />
          <span className={`h-0.75 w-7 bg-white rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.75 w-7 bg-white rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.25" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-white/10 bg-black/20 backdrop-blur-3xl overflow-hidden"
          >
            <ul className="flex flex-col gap-1 p-6">
              {sections.map((item) => (
                <motion.li key={item} whileTap={{ scale: 0.95 }}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleMobileClick(e, item)}
                    className={`block w-full py-4 text-center text-lg font-black tracking-widest transition-all ${active === item ? "text-white scale-110" : "text-white/50"}`}
                  >
                    {item.toUpperCase()}
                  </a>
                </motion.li>
              ))}
              <li className="flex justify-center pt-4 border-t border-white/10">
                <button onClick={() => setDark(!dark)} className="px-8 py-3 rounded-full bg-white/10 text-white text-sm font-bold flex items-center gap-2">
                  {dark ? "🌙 DARK MODE" : "☀️ LIGHT MODE"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}