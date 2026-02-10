import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechVision Inc.',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6',
      rating: 5,
      testimonial: 'Working with FrameWorks transformed our brand presence. Their creative vision and attention to detail resulted in a commercial that exceeded all our expectations. The ROI speaks for itself.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'Apex Retail',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
      rating: 5,
      testimonial: 'The professionalism and creativity brought to our product launch campaign was outstanding. They understood our brand perfectly and delivered cinematic content that truly resonated with our audience.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Creative Director',
      company: 'Bloom Fashion',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59',
      rating: 5,
      testimonial: 'From concept to execution, the entire process was seamless. Their team\'s expertise in digital advertising and storytelling helped us achieve a 300% increase in engagement. Highly recommended!'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Client <span className="text-red-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it—hear what our clients have to say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black border border-zinc-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 transform hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                <Quote size={24} className="text-red-600" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-red-600 fill-red-600" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </p>

              {/* Client Info */}
              <div className="flex items-center pt-6 border-t border-zinc-800">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-red-600"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <p className="text-red-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">100+</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
