// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="container-custom py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">FlavorHaven</h3>
            <p className="text-sm">Serving delicious meals since 2020. Made with love.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/menu" className="hover:text-orange-400">Menu</Link></li>
              <li><Link to="/reservation" className="hover:text-orange-400">Reservations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Food Street</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@flavorhaven.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Mon-Fri: 11am - 10pm</li>
              <li>Sat-Sun: 10am - 11pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          &copy; 2025 FlavorHaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;