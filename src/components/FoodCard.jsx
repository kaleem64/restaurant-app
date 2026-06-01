// src/components/FoodCard.jsx
import { useCart } from '../contexts/CartContext';

const FoodCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
          <span className="text-orange-500 font-semibold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 text-sm mb-4">{item.description}</p>
        <button 
          onClick={() => addToCart(item)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;