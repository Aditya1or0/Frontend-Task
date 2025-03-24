import React, { JSX } from 'react';
import { Link } from 'react-router-dom';  // Optional if you're using react-router for navigation

interface NavItem {
  name: string;
  icon: JSX.Element;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', icon: <i className="fas fa-home"></i>, href: '/' },
  { name: 'Search', icon: <i className="fas fa-search"></i>, href: '/search' },
  { name: 'Profile', icon: <i className="fas fa-user"></i>, href: '/profile' },
];

const Bottom: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex flex-col items-center text-gray-600 hover:text-indigo-500"
          >
            <div className="text-2xl">{item.icon}</div>
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Bottom;
