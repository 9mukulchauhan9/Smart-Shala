import React from "react";
import { FaGlobe, FaShareAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full mt-10 px-6 py-6 bg-gray-100 text-sm text-gray-500">
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <div>
          <h3 className="text-purple-600 font-semibold">Smart Shala</h3>
          <p className="max-w-xs">
            Empowering students and universities with intelligent academic
            management and career discovery tools.
          </p>
          <p className="mt-2 text-xs">
            © 2024 Smart Shala. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 gap-2">
          
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-purple-600">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-purple-600">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-purple-600">
              Contact Support
            </span>
          </div>

          <div className="flex gap-3 mt-2">
            <FaGlobe className="cursor-pointer hover:text-purple-600" />
            <FaShareAlt className="cursor-pointer hover:text-purple-600" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;