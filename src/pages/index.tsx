import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
