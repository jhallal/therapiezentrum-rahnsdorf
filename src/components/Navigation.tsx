import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Kinderarztpraxis', href: '#kinderarzt' },
    { title: 'Ergotherapie', href: '#ergo' },
    { title: 'ADHD Therapist', href: '#adhd' },
    { title: 'Physiotherapie', href: '#physio' },
  ];

  return (
    <nav className="bg-primary text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Health Center</div>
          
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
              <a
                key={item.href}
                href={item.href}
                className="hover:text-secondary transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;