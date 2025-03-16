import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState("HOME");
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-4 border-b shadow-md bg-white">
      <nav className="flex space-x-6">
        {["HOME", "PRODUCT", "CONTACT"].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`relative text-sm font-semibold uppercase tracking-wide transition-transform duration-200 ${
              active === item ? "text-red-600 scale-110" : "text-gray-800 hover:scale-105"
            }`}
          >
            {item}
            {active === item && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600"></span>
            )}
          </button>
        ))}
      </nav>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 border border-black rounded-full text-black font-medium hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="px-4 py-2 bg-gray-200 rounded-full text-black font-medium hover:scale-105 transition-transform duration-200"
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
