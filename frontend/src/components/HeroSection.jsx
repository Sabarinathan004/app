import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Using image as poster/fallback */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1758390851031-bcf34075ca61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb24lMjBiZWhpbmQlMjBzY2VuZXN8ZW58MHx8fHwxNzcwNzAwMjY0fDA&ixlib=rb-4.1.0&q=85"
            alt="Cinematic Production"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/50 rounded-full px-4 py-2 mb-8">
            <Play size={16} className="text-red-600" />
            <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">Premium Ad Production</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            We Create Ads That Sell
            <span className="block text-red-600 mt-2">Stories</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Crafting cinematic digital advertisements, brand films, and social media content that captivate audiences and drive results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>View Our Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Enquire Now
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-1">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-1">100+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-1">8+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-red-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
