import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    alert('You have been logged out.');
    navigate('/');
  };

  return (
    <header className="bg-white/90 backdrop-blur shadow-lg rounded-2xl px-6 py-4 flex justify-between items-center w-full">
      
      {/* Logo Section */}
      <Link to={'/Dashboard/'} className="flex items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold shadow-md">
          AIT
        </div>
        <h1 className="text-2xl font-bold text-sky-700">Admin Dashboard</h1>
      </div>
      </Link>
      

      {/* Navigation Links */}
      <nav className="flex items-center gap-6 text-sky-700 font-medium">
        <Link
          to="/Dashboard/"
          className="hover:text-purple-600 transition duration-300"
        >
          Enquiries
        </Link>
        <Link
          to="/Dashboard/Statistics"
          className="hover:text-purple-600 transition duration-300"
        >
          Statistics
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="ml-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-pink-600 transition duration-300 shadow"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};
