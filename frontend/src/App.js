import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import MyWork from './components/MyWork/MyWork';
// import ProjectCard from './components/MyWork/ProjectCard/ProjectCard';
// import Parent from './components/parent/parent';

function App() {

  return (
    <>
      {/* <Parent /> */}
      <Navbar />
      <About />
      {/* < MyWork />
      <ProjectCard /> */}
      <Contact />
    </>
  );

}

export default App;
