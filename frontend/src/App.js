import React from 'react';
import './App.css';
// import Home from './components/Home';
// import { AdminView } from './Components/AdminView/AdminView';
import { Header } from './Components/Header/Header'
import { Languages } from './Components/Languages/Languages';
import  Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Parent from './Components/Parent'
import MyWork from './Components/MyWork/MyWork';
// import { Contact } from './Components/Contact/Contact';

function App() {

  return (
    <div className="App">
     <Navbar />
    <Header />
    <About />
    <Languages />
    <MyWork />
    <Contact />
    {/* <Contact> */}

    </div>

  );
}

export default App;
