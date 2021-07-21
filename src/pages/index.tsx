import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Resume from '../components/Resume';

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
      <Projects />
      <Resume />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
