import React, { useState } from 'react';
import Hero from '../components/Hero';
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
    </div>
  );
}

export default Home;
