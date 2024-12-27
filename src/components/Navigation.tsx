import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Kinderarztpraxis', href: '/kinderarzt' },
    { title: 'Ergotherapie', href: '/ergotherapie' },
    { title: 'Neuro Perspektiven', href: '/neuroperspektiven' },
    { title: 'Physiotherapie', href: '/physiotherapie' },
  ];

  return (
    <nav className="bg-primary text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Therapiezentrum Rahnsdorf</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="hover:text-secondary transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
