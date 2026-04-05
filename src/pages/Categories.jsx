import React from "react";
import { FaMagic, FaBook, FaBriefcase, FaLaptopCode } from "react-icons/fa";

function Categories() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">
        Select Your Path.
      </h1>

      <p className="text-gray-500 text-center max-w-xl mb-10">
        Choose a specialized track to accelerate your learning journey. Every module is
        curated to help you achieve academic and professional excellence.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-purple-200 text-purple-700 p-3 rounded-md inline-block mb-4">
            <FaMagic />
          </div>
          <h2 className="font-semibold text-lg mb-2">Clear Backlog</h2>
          <p className="text-sm text-gray-500 mb-4">
            Systematic recovery plans for previous coursework with intensive focus on core concepts.
          </p>
          <span className="text-purple-600 text-sm cursor-pointer">
            Explore Track →
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-purple-200 text-purple-700 p-3 rounded-md inline-block mb-4">
            <FaBook />
          </div>
          <h2 className="font-semibold text-lg mb-2">Academic Preparation</h2>
          <p className="text-sm text-gray-500 mb-4">
            Master your current semester with deep-dive resources, lecture notes, and mock examinations.
          </p>
          <span className="text-purple-600 text-sm cursor-pointer">
            Explore Track →
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-orange-200 text-orange-600 p-3 rounded-md inline-block mb-4">
            <FaBriefcase />
          </div>
          <h2 className="font-semibold text-lg mb-2">Placement Preparation</h2>
          <p className="text-sm text-gray-500 mb-4">
            Comprehensive aptitude, reasoning, and interview readiness coaching for top-tier firms.
          </p>
          <span className="text-purple-600 text-sm cursor-pointer">
            Explore Track →
          </span>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-purple-200 text-purple-700 p-3 rounded-md inline-block mb-4">
            <FaLaptopCode />
          </div>
          <h2 className="font-semibold text-lg mb-2">Tech Field Preparation</h2>
          <p className="text-sm text-gray-500 mb-4">
            Advanced coding bootcamps, system design, and emerging technology specializations.
          </p>
          <span className="text-purple-600 text-sm cursor-pointer">
            Explore Track →
          </span>
        </div>

      </div>
    </div>
  );
}

export default Categories;