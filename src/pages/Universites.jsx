import React from "react";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";


function Midle() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Select Your University
      </h1>
      <p className="text-gray-500 text-center max-w-xl mb-10">
        Choose your institution to personalize your learning journey and access curated
        academic resources tailored specifically for your curriculum.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        
        {/* HBTU Card */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center w-[280px]">
          <div className="bg-purple-200 text-purple-600 p-4 rounded-lg inline-block mb-4">
            <FaUniversity size={24} />
          </div>
          <h2 className="font-semibold text-lg">HBTU</h2>
          <p className="text-xs text-gray-400">
            HARCOURT BUTLER TECHNICAL UNIVERSITY
          </p>
        </div>

        {/* AKTU Card */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center w-[280px]">
          <div className="bg-purple-200 text-purple-600 p-4 rounded-lg inline-block mb-4">
            <FaGraduationCap size={24} />
          </div>
          <h2 className="font-semibold text-lg">AKTU</h2>
          <p className="text-xs text-gray-400">
            DR. A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl">
        
        {/* Left Text */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">
            Don't see your university?
          </h3>
          <p className="text-gray-500 text-sm mb-2">
            We are constantly expanding our academic partnerships. If your
            institution is not listed, you can request an addition or browse our
            global categories.
          </p>
          <span className="text-purple-600 cursor-pointer text-sm font-medium">
            Submit Request +
          </span>
        </div>

        {/* Right Image */}
        <img
          src="1753355990phpAnx9Hc.jpeg"
          alt="university"
          className="w-[300px] rounded-lg shadow"
        />
      </div>
    </div>
  );
}

export default Midle;