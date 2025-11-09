import React from 'react';
import { Star, MapPin, Clock, Heart, DollarSign, Utensils } from 'lucide-react';

const PopularRestaurants = () => {
  const popularRestaurants = [
    {
      id: 1,
      name: 'Bella Vista',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      cuisine: 'Italian',
      rating: 4.7,
      reviews: 284,
      price: '$$$',
      deliveryTime: '25-35 min',
      distance: '0.8 miles',
      location: 'Downtown',
      isOpen: true,
      promotion: 'Free delivery',
      featured: ['Pasta', 'Wine', 'Romantic']
    },
    {
      id: 2,
      name: 'Sakura Sushi',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      cuisine: 'Japanese',
      rating: 4.5,
      reviews: 156,
      price: '$$',
      deliveryTime: '30-40 min',
      distance: '1.2 miles',
      location: 'Midtown',
      isOpen: true,
      promotion: '20% off first order',
      featured: ['Sushi', 'Ramen', 'Fresh']
    },
    {
      id: 4,
      name: 'Golden Dragon',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      cuisine: 'Chinese',
      rating: 4.4,
      reviews: 223,
      price: '$$',
      deliveryTime: '35-45 min',
      distance: '1.5 miles',
      location: 'Chinatown',
      isOpen: true,
      promotion: 'Family combo deal',
      featured: ['Dim Sum', 'Noodles', 'Authentic']
    },
    {
      id: 5,
      name: 'Burger Haven',
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      cuisine: 'American',
      rating: 4.3,
      reviews: 167,
      price: '$$',
      deliveryTime: '15-25 min',
      distance: '0.3 miles',
      location: 'University Row',
      isOpen: true,
      promotion: 'Buy 1 get 1 free',
      featured: ['Burgers', 'Fries', 'Craft Beer']
    },
    
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Restaurants</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most loved restaurants in your area. From local favorites to award-winning cuisine.
          </p>
        </div>

        {/* Restaurants Grid - 4 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-md">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    restaurant.isOpen 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {restaurant.isOpen ? 'Open Now' : 'Closed'}
                  </div>
                </div>

                {/* Promotion Badge */}
                {restaurant.promotion && (
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      {restaurant.promotion}
                    </div>
                  </div>
                )}
              </div>

              {/* Restaurant Info */}
              <div className="p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <Utensils className="w-4 h-4 text-blue-500" />
                      <span>{restaurant.cuisine}</span>
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span>{restaurant.price}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg flex-shrink-0 ml-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{restaurant.rating}</span>
                  </div>
                </div>

                {/* Location & Delivery */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{restaurant.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                </div>

                {/* Reviews */}
                <div className="text-xs text-gray-500 mb-3">
                  {restaurant.reviews} reviews • {restaurant.location}
                </div>

                {/* Featured Tags */}
                <div className="flex flex-wrap gap-1">
                  {restaurant.featured.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
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

export default PopularRestaurants;