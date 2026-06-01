// src/components/CartItem.jsx
import { useCart } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
      <div className="flex-grow">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-orange-500 font-medium">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => updateQuantity(item.id, -1)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
        >
          -
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, 1)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
        >
          +
        </button>
      </div>
      <button 
        onClick={() => removeItem(item.id)}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;