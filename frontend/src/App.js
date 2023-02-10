import React from 'react';
import './App.css';
// import Home from './components/Home';
// import { AdminView } from './Components/AdminView/AdminView';
import { Header } from './Components/Header/Header'
import { Languages } from './Components/Languages/Languages';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import MyWork from './Components/MyWork/MyWork';


function App() {

      return (
            <>
                  <Navbar />
                  <Header></Header>
                  <About />
                  <Languages></Languages>
                  <MyWork />
                  <Contact />


            </>

      );

}

export default App;