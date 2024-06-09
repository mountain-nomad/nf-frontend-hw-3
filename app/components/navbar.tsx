import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgE1VlKGl-33zAxBGj2FsGBPlbUFC10n6Vgw&s"
            alt="Logo"
          />
        </div>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
