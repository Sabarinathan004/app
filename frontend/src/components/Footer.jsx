import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">Winq</span>
              <span className="text-red-600">Vision</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating cinematic advertisements and brand stories that captivate audiences and drive results.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Youtube size={20} className="text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Product Advertisements</li>
              <li className="text-gray-400">Brand Films</li>
              <li className="text-gray-400">Social Media Content</li>
              <li className="text-gray-400">Commercial Shoots</li>
              <li className="text-gray-400">Video Production</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-red-600 mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@winqvision.com"
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  hello@winqvision.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-red-600 mt-1 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-gray-400">
                  <p>123 Creative Avenue</p>
                  <p>Los Angeles, CA 90028</p>
                  <p>United States</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} WinqVision. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
