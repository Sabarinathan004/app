import React from 'react';
import { Award, Users, Video, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Video size={32} />,
      title: 'Cinematic Excellence',
      description: 'State-of-the-art equipment and techniques to create visually stunning advertisements'
    },
    {
      icon: <Users size={32} />,
      title: 'Expert Team',
      description: 'Seasoned directors, cinematographers, and creative professionals dedicated to your vision'
    },
    {
      icon: <Award size={32} />,
      title: 'Award-Winning Work',
      description: 'Recognized for creative excellence and delivering results that exceed expectations'
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Turnaround',
      description: 'Efficient production workflows ensuring timely delivery without compromising quality'
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-red-600">Us</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            We are a premium digital advertisement shooting company specializing in creating compelling visual stories that resonate with audiences and drive business results.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            With over 8 years of experience in commercial video production, we've partnered with leading brands to craft advertisements that don't just look good—they perform. Our approach combines cinematic storytelling, strategic thinking, and production excellence to deliver content that captivates and converts.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            From concept to final cut, we handle every aspect of the production process, ensuring your brand message is communicated with clarity, creativity, and impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors duration-300">
                <div className="text-red-600">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {/* Mock Client Logos - Replace with actual logos */}
            <div className="text-3xl font-bold text-gray-500">BRAND 01</div>
            <div className="text-3xl font-bold text-gray-500">BRAND 02</div>
            <div className="text-3xl font-bold text-gray-500">BRAND 03</div>
            <div className="text-3xl font-bold text-gray-500">BRAND 04</div>
            <div className="text-3xl font-bold text-gray-500">BRAND 05</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
