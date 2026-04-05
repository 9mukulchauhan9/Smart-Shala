import React from "react";
import { FaEnvelope, FaLock, FaEye } from "react-icons/fa";

function loginsignup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        
        {/* Top Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-purple-600 text-white p-3 rounded-lg">
            🎓
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl font-bold">
          Welcome to Smart Shala
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Please enter your details to continue
        </p>

        {/* Email */}
        <label className="text-sm font-medium">Email address</label>
        <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-gray-100">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="name@university.edu"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Password */}
        <div className="flex justify-between text-sm">
          <label className="font-medium">Password</label>
          <span className="text-purple-600 cursor-pointer">
            Forgot password?
          </span>
        </div>

        <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-gray-100">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="••••••••"
            className="bg-transparent outline-none w-full"
          />
          <FaEye className="text-gray-400 cursor-pointer" />
        </div>

        {/* Button */}
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
          Login →
        </button>

        {/* Divider */}
        <p className="text-center text-gray-400 text-sm my-4">
          OR CONTINUE WITH
        </p>

        {/* Social Buttons */}
        <div className="flex gap-3">
          <button className="w-full bg-gray-100 py-2 rounded-lg">
            Google
          </button>
          <button className="w-full bg-gray-100 py-2 rounded-lg">
            Apple
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <span className="text-purple-600 cursor-pointer">Sign up</span>
        </p>
        
      </div>
    </div>
    
  );
}

export default loginsignup;