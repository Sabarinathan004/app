import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast.success('Enquiry submitted successfully! We\'ll get back to you soon.', {
        duration: 5000,
        position: 'top-center'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectDetails: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Shoot Your <span className="text-red-600">Next Ad</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Ready to bring your vision to life? Fill out the form and we'll get in touch within 24 hours to discuss your project.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors duration-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Project Details Field */}
              <div>
                <label htmlFor="projectDetails" className="block text-white font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project, target audience, and goals..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Location */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:hello@frameworks.com" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                      hello@frameworks.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a href="tel:+15551234567" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Studio Location</h4>
                    <p className="text-gray-400">
                      123 Creative Avenue<br />
                      Los Angeles, CA 90028<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden h-80">
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-red-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg font-medium">Studio Location</p>
                  <p className="text-gray-500 text-sm mt-2">Los Angeles, California</p>
                </div>
              </div>
            </div>

            {/* Service Coverage */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h4 className="text-white font-bold text-lg mb-3">Service Coverage</h4>
              <p className="text-gray-400">
                Based in Los Angeles, we serve clients nationwide and internationally. Our mobile production crew can travel to your location for on-site shoots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
