import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end space-y-2.5">
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-gray-900 hover:text-gray-700 text-sm">Contact</a>
            </div>
          </div>
        </footer>
      );
}
    
export default Footer;