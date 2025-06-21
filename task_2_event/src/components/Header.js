import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png'


const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="bg-black shadow-sm border-b sticky top-0 z-50 max-w-7xl mx-auto">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 onClick={() => navigate("/")} className="text-2xl font-bold text-white">
            Event<span className="text-orange-400">Book</span>
          </h1>
          <img
            src={logo}
            alt="E-Cart Logo"
            onClick={() => navigate("/")}
            style={{ height: '32px', width: 'auto' }}
            className="object-contain"
          />
          <nav className="flex items-center space-x-4">
            <NavLink
              to="/my-events"
              className="px-4 py-2 rounded-md font-medium text-white hover:bg-orange-500 transition-colors"
            >
              My Events
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
