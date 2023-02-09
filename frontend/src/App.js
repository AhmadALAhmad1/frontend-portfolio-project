import React from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Parent from './components/parent/parent';

function App() {

  return (
    <>
      <Parent />
      <Navbar />
      <About />
      <Contact />
    </>
  );

}

export default App;
