import React from 'react';
import { Header } from './Header';
import { AllEnquiries } from './AllEnquiries';
import { Statistics } from './Statistics';
import { Routes, Route } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 font-sans">
      
      {/* Top Header Area */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md py-4 px-8 flex justify-between items-center rounded-b-lg">
        <Header />
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-10 py-8">
        <h2 className="text-3xl font-extrabold text-center text-sky-800 drop-shadow mb-8">
          🌟 Welcome Admin to AIT Dashboard
        </h2>

        {/* Inner Routes Container */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 md:p-10 border border-gray-200 transition-all duration-300">
          <Routes>
            <Route path="/" element={<AllEnquiries />} />
            <Route path="/Statistics" element={<Statistics />} />
         
          </Routes>
        </div>
      </div>
    </div>
  );
};
