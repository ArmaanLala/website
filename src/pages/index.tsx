import React, { useState } from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { about, experience } from '../components/Info/data';
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';

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
      <Info {...about} />
      <Info {...experience} />
    </div>
  );
}

export default Home;
