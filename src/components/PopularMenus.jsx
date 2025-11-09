import React from 'react';
import { Star, Clock, DollarSign, Heart, Flame, Leaf, Beef, Wheat } from 'lucide-react';

const PopularMenus = () => {
  const popularMenus = [
    {
      id: 1,
      name: 'Truffle Mushroom Pasta',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      restaurant: 'Bella Vista',
      price: '$24',
      rating: 4.8,
      prepTime: '20-25 min',
      category: 'Main Course',
      calories: '420 cal',
      isVegetarian: false,
      isSpicy: false,
      isPopular: true,
      description: 'Creamy pasta with wild mushrooms and black truffle',
      tags: ['Signature', 'Creamy', 'Gourmet']
    },
    {
      id: 2,
      name: 'Dragon Roll Sushi',
      image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      restaurant: 'Sakura Sushi',
      price: '$18',
      rating: 4.7,
      prepTime: '15-20 min',
      category: 'Sushi',
      calories: '320 cal',
      isVegetarian: false,
      isSpicy: true,
      isPopular: true,
      description: 'Eel, avocado, and cucumber with spicy mayo',
      tags: ['Spicy', 'Fresh', 'Best Seller']
    },
    {
      id: 3,
      name: 'Birria Tacos',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      restaurant: 'El Fuego',
      price: '$16',
      rating: 4.9,
      prepTime: '18-22 min',
      category: 'Tacos',
      calories: '380 cal',
      isVegetarian: false,
      isSpicy: true,
      isPopular: true,
      description: 'Slow-cooked beef tacos with consommé dip',
      tags: ['Trending', 'Hearty', 'Authentic']
    },
    {
      id: 6,
      name: 'Butter Chicken',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      restaurant: 'Spice Route',
      price: '$22',
      rating: 4.8,
      prepTime: '25-35 min',
      category: 'Curry',
      calories: '410 cal',
      isVegetarian: false,
      isSpicy: false,
      isPopular: true,
      description: 'Tender chicken in rich tomato butter sauce',
      tags: ['Creamy', 'Aromatic', 'Best Seller']
    },
  ];

  const getDietIcon = (menu) => {
    if (menu.isVegetarian) return <Leaf className="w-4 h-4 text-green-500" />;
    if (menu.isSpicy) return <Flame className="w-4 h-4 text-red-500" />;
    return <Beef className="w-4 h-4 text-orange-500" />;
  };

  const getDietLabel = (menu) => {
    if (menu.isVegetarian) return 'Vegetarian';
    if (menu.isSpicy) return 'Spicy';
    return 'Contains Meat';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Menu Items</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most ordered and highly-rated dishes from top restaurants near you.
          </p>
        </div>

        {/* Menus Grid - 4 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularMenus.map((menu) => (
            <div
              key={menu.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-md">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>

                {/* Popular Badge */}
                {menu.isPopular && (
                  <div className="absolute top-3 left-3">
                    <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Diet Indicator */}
                <div className="absolute bottom-3 left-3">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    {getDietIcon(menu)}
                    <span className="text-gray-700">{getDietLabel(menu)}</span>
                  </div>
                </div>
              </div>

              {/* Menu Info */}
              <div className="p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-2 leading-tight">
                      {menu.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">
                      {menu.restaurant}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg flex-shrink-0 ml-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{menu.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {menu.description}
                </p>

                {/* Price & Prep Time */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1 font-semibold text-green-600">
                    <DollarSign className="w-4 h-4" />
                    <span>{menu.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{menu.prepTime}</span>
                  </div>
                </div>

                {/* Calories & Category */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{menu.calories}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full">{menu.category}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {menu.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="px-4 pb-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenus;