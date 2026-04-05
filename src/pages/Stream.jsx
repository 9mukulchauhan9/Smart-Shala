import React from "react";
import { FaCode, FaBolt, FaMicrochip } from "react-icons/fa";

function Stream() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
        Select Your <span className="text-purple-600">Stream</span>
      </h1>

      <p className="text-gray-500 text-center max-w-xl mb-10">
        Choose your academic pathway to access specialized resources, community
        insights, and curated learning materials tailored to your career goals.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        
        {/* CS/IT */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-purple-200 text-purple-700 p-3 rounded-md inline-block mb-4">
            <FaCode />
          </div>
          <h2 className="font-semibold text-lg mb-2">CS/IT</h2>
          <p className="text-sm text-gray-500 mb-4">
            Algorithms, Data Structures, Web Technologies, and Artificial Intelligence specializations.
          </p>
          <span className="text-purple-600 text-sm cursor-pointer">
            Explore Path →
          </span>
        </div>

        {/* Electrical */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-orange-200 text-orange-600 p-3 rounded-md inline-block mb-4">
            <FaBolt />
          </div>
          <h2 className="font-semibold text-lg mb-2">Electrical</h2>
          <p className="text-sm text-gray-500 mb-4">
            Power Systems, Control Engineering, Renewable Energy, and Smart Grid technologies.
          </p>
          <span className="text-orange-600 text-sm cursor-pointer">
            Explore Path →
          </span>
        </div>

        {/* Electronics */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-purple-200 text-purple-700 p-3 rounded-md inline-block mb-4">
            <FaMicrochip />
          </div>
          <h2 className="font-semibold text-lg mb-2">Electronics</h2>
          <p className="text-sm text-gray-500 mb-4">
            Microprocessors, Embedded Systems, VLSI Design, and Communication Networks.
          </p>
          <span className="text-purple-600 text-sm cursor-pointer">
            Explore Path →
          </span>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="mt-10 bg-gray-200 px-6 py-4 rounded-xl flex flex-col md:flex-row items-center gap-4">
        <p className="text-gray-600 text-sm">
          Not sure which one to pick?
        </p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Take Career Quiz
        </button>
      </div>

    </div>
  );
}

export default Stream;