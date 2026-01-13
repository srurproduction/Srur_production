import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Gallery from './Gallery.jsx';
import Testimonials from './Testimonials.jsx';
import ContactForm from './ContactForm.jsx';
import Footer from './Footer.jsx';

export default function HomePage() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`${dark ? 'dark bg-neutral-900' : 'bg-white'} min-h-screen transition-colors duration-500`}>
      <Navbar dark={dark} setDark={setDark} />
      <Header dark={dark} />
      <About dark={dark} />
      <Services dark={dark} />
      <Gallery dark={dark} />
      <Testimonials dark={dark} />
      <ContactForm dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}