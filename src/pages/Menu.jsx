// src/pages/Menu.jsx
import { useState } from 'react';
import { menuItems } from '../data/menuData';
import FoodCard from '../components/FoodCard';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'];
  
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeCategory === cat 
                ? 'bg-orange-500 text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No items found in this category.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;