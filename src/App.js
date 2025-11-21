import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // <-- Import Footer


import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />  {/* <-- Add Footer here */}
    </>
  );
}

export default App;
