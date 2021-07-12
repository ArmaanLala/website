import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import { about, experience } from '../components/About/data';
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import Experience from '../components/Experience';

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
      <About {...about} />
      <Experience {...experience} />
    </div>
  );
}

export default Home;
