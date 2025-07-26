// Navbar.jsx
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        
        <span className="text-white text-sm font-light italic font-fancy">Daniel's Furniture</span>
        <div className="flex items-center space-x-2">
          

          {/* Home Icon */}
          <a href="#" className="text-white hover:text-teal-500 transition">
            <FaHome size={17} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;