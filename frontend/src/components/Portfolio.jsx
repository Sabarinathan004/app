import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Product Ads', 'Brand Films', 'Social Media Ads', 'Commercial Shoots'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Product Campaign',
      category: 'Product Ads',
      image: 'https://images.unsplash.com/photo-1659709521486-fb4bc2eb4c10?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHw0fHxjb21tZXJjaWFsJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDB8fHx8MTc3MDcwMDI4Nnww&ixlib=rb-4.1.0&q=85',
      description: 'High-end product photography with cinematic lighting'
    },
    {
      id: 2,
      title: 'Brand Story Film',
      category: 'Brand Films',
      image: 'https://images.unsplash.com/photo-1768483534260-1b440d8044e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fHx8MTc3MDcwMDI5NXww&ixlib=rb-4.1.0&q=85',
      description: 'Compelling brand narrative with emotional storytelling'
    },
    {
      id: 3,
      title: 'Studio Product Setup',
      category: 'Commercial Shoots',
      image: 'https://images.unsplash.com/photo-1763970586854-fe90924fd4fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDB8fHx8MTc3MDcwMDI4Nnww&ixlib=rb-4.1.0&q=85',
      description: 'Professional studio setup with precision lighting'
    },
    {
      id: 4,
      title: 'Social Media Reel',
      category: 'Social Media Ads',
      image: 'https://images.unsplash.com/photo-1615228426590-fd01651aff47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHw0fHxicmFuZCUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fHx8MTc3MDcwMDI5NXww&ixlib=rb-4.1.0&q=85',
      description: 'Dynamic content optimized for social platforms'
    },
    {
      id: 5,
      title: 'Commercial Production',
      category: 'Commercial Shoots',
      image: 'https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxicmFuZCUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fHx8MTc3MDcwMDI5NXww&ixlib=rb-4.1.0&q=85',
      description: 'Large-scale commercial production with full crew'
    },
    {
      id: 6,
      title: 'Behind The Scenes',
      category: 'Brand Films',
      image: 'https://images.unsplash.com/photo-1768076955015-dd4f057e96f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxjb21tZXJjaWFsJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDB8fHx8MTc3MDcwMDI4Nnww&ixlib=rb-4.1.0&q=85',
      description: 'Professional setup and equipment in action'
    },
    {
      id: 7,
      title: 'Creative Team Collaboration',
      category: 'Commercial Shoots',
      image: 'https://images.unsplash.com/photo-1702126952856-f366d8cb5462?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxicmFuZCUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fHx8MTc3MDcwMDI5NXww&ixlib=rb-4.1.0&q=85',
      description: 'Collaborative production process with expert team'
    },
    {
      id: 8,
      title: 'Product Spotlight Series',
      category: 'Product Ads',
      image: 'https://images.unsplash.com/photo-1763970586854-fe90924fd4fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDB8fHx8MTc3MDcwMDI4Nnww&ixlib=rb-4.1.0&q=85',
      description: 'Artistic product showcase with premium appeal'
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-red-600">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing premium advertisements and brand stories that drive engagement and conversions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-zinc-800 cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-xs font-semibold text-red-600 bg-red-600/20 px-3 py-1 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center text-red-600 font-semibold">
                    <Play size={18} className="mr-2" />
                    <span className="text-sm">Watch Project</span>
                  </div>
                </div>
              </div>

              {/* Play Icon */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={20} className="text-white fill-white ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
            <span>View Complete Portfolio</span>
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
