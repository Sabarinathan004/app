import React from "react";
import "@/App.css";
import { Toaster } from 'sonner';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App">
      <Toaster richColors />
      <Navbar />
      <main>
        <HeroSection />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
