import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">Winq</span>
            <span className="text-red-600">Vision</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="nav-link text-white hover:text-red-600 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="nav-link text-white hover:text-red-600 transition-colors duration-300"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link text-white hover:text-red-600 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="nav-link text-white hover:text-red-600 transition-colors duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-red-600 transition-colors duration-300 py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-white hover:text-red-600 transition-colors duration-300 py-2"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-red-600 transition-colors duration-300 py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-white hover:text-red-600 transition-colors duration-300 py-2"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-300 w-full"
            >
              Enquire Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
