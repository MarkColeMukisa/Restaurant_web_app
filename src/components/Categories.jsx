import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PopularDestinations from './PopularDestinations';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef(null);

  const categories = [
    {
      id: 'all',
      name: 'All',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '250+',
      bgColor: 'bg-gradient-to-br from-gray-500 to-gray-600'
    },
    {
      id: 'italian',
      name: 'Italian',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '45',
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      id: 'japanese',
      name: 'Japanese',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '32',
      bgColor: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      id: 'mexican',
      name: 'Mexican',
      image: 'https://images.unsplash.com/photo-1565299585323-38174c13fae8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '28',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      id: 'chinese',
      name: 'Chinese',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '38',
      bgColor: 'bg-gradient-to-br from-red-600 to-orange-500'
    },
    {
      id: 'indian',
      name: 'Indian',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '25',
      bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      id: 'thai',
      name: 'Thai',
      image: 'https://images.unsplash.com/photo-1559314809-0f155d88cb60?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '18',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      id: 'american',
      name: 'American',
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '42',
      bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-500'
    },
    {
      id: 'mediterranean',
      name: 'Mediterranean',
      image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '22',
      bgColor: 'bg-gradient-to-br from-teal-500 to-blue-500'
    },
    {
      id: 'vegetarian',
      name: 'Vegetarian',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '35',
      bgColor: 'bg-gradient-to-br from-green-600 to-emerald-600'
    },
    {
      id: 'seafood',
      name: 'Seafood',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '29',
      bgColor: 'bg-gradient-to-br from-blue-400 to-cyan-500'
    },
    {
      id: 'desserts',
      name: 'Desserts',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: '31',
      bgColor: 'bg-gradient-to-br from-pink-400 to-rose-500'
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-7 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cuisine</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover restaurants by your favorite cuisine types. Tap to explore curated collections.
          </p>
        </div>

        {/* Categories Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 border border-gray-200 hidden lg:flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 hover:scale-110 border border-gray-200 hidden lg:flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Categories Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 text-center group cursor-pointer"
                onClick={() => setActiveCategory(category.id)}
              >
                {/* Circular Image Container */}
                <div className="relative mb-4">
                  <div className={`w-24 h-24 rounded-full p-1 transition-all duration-300 transform group-hover:scale-110 ${
                    activeCategory === category.id 
                      ? `${category.bgColor} shadow-lg ring-4 ring-white ring-offset-2 ring-offset-slate-50 scale-110` 
                      : 'bg-white shadow-md group-hover:shadow-lg'
                  }`}>
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  {/* Active Indicator */}
                  {activeCategory === category.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full ring-2 ring-white"></div>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className={`font-semibold transition-colors duration-200 ${
                    activeCategory === category.id ? 'text-blue-600' : 'text-gray-900 group-hover:text-gray-700'
                  }`}>
                    {category.name}
                  </h3>
                  <p className={`text-sm transition-colors duration-200 ${
                    activeCategory === category.id ? 'text-blue-500' : 'text-gray-500 group-hover:text-gray-600'
                  }`}>
                    {category.count} places
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator Dots - Mobile */}
          <div className="flex justify-center space-x-2 mt-8 lg:hidden">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className="w-2 h-2 bg-gray-300 rounded-full"
              />
            ))}
          </div>
        </div>

        <PopularDestinations/>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Categories;