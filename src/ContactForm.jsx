import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaTelegramPlane, FaWhatsapp, FaEnvelope, FaCopy, FaCheckCircle } from 'react-icons/fa';

export default function ContactForm({ dark }) {
  const form = useRef();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://t.me/srurproduction");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cm1eve6',
      'template_cmpy38p',
      form.current,
      { publicKey: 'DFadBcOb7h3wGmQZG' }
    ).then(
      () => alert("Message sent successfully ✅"),
      (error) => alert("FAILED ❌: " + error.text)
    );
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${
    dark 
    ? "bg-neutral-800 border-white/10 text-white focus:border-[#f06292]" 
    : "bg-white border-slate-200 text-slate-900 focus:border-[#a445ff]"
  }`;

  return (
    <section 
      id="contact" 
      className={`py-24 transition-colors duration-500 ${
        dark ? "bg-[#0f0f0f]" : "bg-white"
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
            Get In <span className="bg-linear-to-r from-[#f06292] to-[#a445ff] bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-[#f06292] to-[#a445ff] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className={`p-8 rounded-3xl border ${dark ? "bg-neutral-900/50 border-white/5" : "bg-slate-50 border-slate-200"}`}>
              <h3 className={`text-2xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-800'}`}>Send me a message</h3>
              <p className={`mb-8 ${dark ? 'text-neutral-400' : 'text-slate-500'}`}>
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input type="text" placeholder="Your Name" name="user_name" required className={inputClasses} />
                <input type="email" placeholder="Your Email" name="user_email" required className={inputClasses} />
                <textarea rows={4} placeholder="Your Message" name="message" required className={inputClasses} />
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all"
                  style={{ background: 'linear-gradient(to right, #f06292, #a445ff)' }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className={`p-8 rounded-3xl border transition-all ${
              dark ? "bg-neutral-800/40 border-white/5 shadow-2xl" : "bg-white border-slate-200 shadow-xl"
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-800'}`}>Want to work together?</h3>
              <p className={`mb-8 leading-relaxed ${dark ? 'text-neutral-400' : 'text-slate-500'}`}>
                Drop me a message on Telegram or use the contact form — I'll get back ASAP.
              </p>

              <div className={`flex items-center justify-between p-4 rounded-2xl mb-8 ${dark ? "bg-neutral-900" : "bg-slate-100"}`}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <FaTelegramPlane className="text-sky-500 text-xl shrink-0" />
                  <span className={`text-sm font-medium truncate ${dark ? 'text-neutral-300' : 'text-slate-700'}`}>
                    t.me/srurproduction
                  </span>
                </div>
                <button 
                  onClick={handleCopy}
                  className={`ml-2 px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                    copied ? "bg-green-500 text-white" : "bg-[#f06292] text-white hover:bg-[#d81b60]"
                  }`}
                >
                  {copied ? <FaCheckCircle /> : <FaCopy />} {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/7324963502" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#25D366] text-white font-bold hover:brightness-110 transition-all active:scale-95"
                >
                  <FaWhatsapp className="text-xl" /> WhatsApp
                </a>

                <a
                  href="mailto:srurproduction@gmail.com"
                  className={`flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all active:scale-95 ${
                    dark ? "bg-white text-black" : "bg-slate-800 text-white"
                  }`}
                >
                  <FaEnvelope className="text-xl" /> Email Me
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 text-center">
                <p className={`text-sm font-medium mb-1 ${dark ? 'text-neutral-500' : 'text-slate-400'}`}>
                  Usually respond within 24 hours
                </p>
                <p className={`text-xs ${dark ? 'text-neutral-600' : 'text-slate-400'}`}>
                  Open to freelance projects and collaborations
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}