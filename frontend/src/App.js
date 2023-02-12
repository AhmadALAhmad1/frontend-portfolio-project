import React from 'react';
import './App.css';
// import Home from './components/Home';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './components/About/About'
import {Languages} from './Components/Languages/Languages'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Languages />
      <MyWork />
      <Contact />
      <Footer />

      {/* <AdminView></AdminView> */}


    </div>

      );

}

export default App;