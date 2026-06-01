// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { popularDishes } from '../data/menuData';
import FoodCard from '../components/FoodCard';

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to FlavorHaven</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Experience the finest dining with authentic flavors</p>
          <Link to="/menu" className="btn-primary bg-white text-orange-600 hover:bg-gray-100">
            Explore Menu
          </Link>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="container-custom py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Dishes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map(dish => (
            <FoodCard key={dish.id} item={dish} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🍕</div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Locally sourced, always fresh</p>
            </div>
            <div>
              <div className="text-4xl mb-3">👨‍🍳</div>
              <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
              <p className="text-gray-600">Masterfully crafted dishes</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Free delivery over $30</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;