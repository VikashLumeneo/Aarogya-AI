import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureCircle from "./components/FeatureCircle";
import About from "./components/About";
import KeyBenefits from "./components/KeyBenefits";
import Outcome from "./components/Outcome";
import Feature from "./components/Feature";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCircle />
      <About />
      <KeyBenefits />
     < Outcome />
     <Feature />
     <FAQ />
     <Footer />

    </div>
  );
}

export default App;