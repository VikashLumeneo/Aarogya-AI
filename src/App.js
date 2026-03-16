import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import HeroSection from "./components/HeroSection";
import FeatureCircle from "./components/FeatureCircle";
import About from "./components/About";
import KeyBenefits from "./components/KeyBenefits";
import Outcome from "./components/Outcome";
import Feature from "./components/Feature";
import FAQ from "./components/FAQ";
import Last from "./components/Last";
import Footer from "./components/Footer";

import AiScribe from "./pages/AiScribe";
import AiRadiologist from "./pages/AiRadiologist";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureCircle />
      <About />
      <KeyBenefits />
      <Outcome />
      <Feature />
      <FAQ />
      <Last />
      <Footer />
    </>
  );
}

function App() {

  return (

    <Router>

      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/ai-scribe" element={<AiScribe />} />
        <Route path="/ai-radiologist" element={<AiRadiologist />} />

      </Routes>

    </Router>

  );

}

export default App;