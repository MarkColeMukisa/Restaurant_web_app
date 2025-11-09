import React from 'react';
import { Star, MapPin, Heart } from 'lucide-react';

const PopularDestinations = () => {
  const popularDestinations = [
    {
      id: 1,
      name: 'Downtown District',
      image: 'https://images.unsplash.com/photo-1540959733332-0b10da0fdcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      restaurants: 85,
      rating: 4.7,
      description: 'Trendy restaurants & rooftop bars',
      distance: 'City Center',
      featured: ['Italian', 'Fine Dining', 'Asian Fusion']
    },
    {
      id: 2,
      name: 'Waterfront Area',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      restaurants: 42,
      rating: 4.5,
      description: 'Seafood with ocean views',
      distance: '2 miles',
      featured: ['Seafood', 'Mediterranean', 'Wine Bars']
    },
    {
      id: 3,
      name: 'Historic Quarter',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      restaurants: 63,
      rating: 4.6,
      description: 'Charming cafes & traditional cuisine',
      distance: '1.5 miles',
      featured: ['French', 'Cafes', 'Traditional']
    },
    {
      id: 4,
      name: 'Arts District',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      restaurants: 38,
      rating: 4.4,
      description: 'Hip eateries & craft cocktails',
      distance: '3 miles',
      featured: ['Fusion', 'Cocktail Bars', 'Vegetarian']
    },

  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the most sought-after dining neighborhoods in the city. Each area offers unique culinary experiences.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {popularDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Favorite Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <Heart className="w-5 h-5 text-white" />
                </button>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {destination.restaurants} places
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-sm mb-3">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.distance}</span>
                  </div>
                </div>
              </div>

              {/* Featured Tags */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {destination.featured.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;