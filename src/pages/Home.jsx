import React from "react";

const years = [
  {
    title: "Year 1",
    subtitle: "Freshman Journey",
    icon: "📖",
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  {
    title: "Year 2",
    subtitle: "Sophomore Exploration",
    icon: "⚗️",
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  {
    title: "Year 3",
    subtitle: "Junior Mastery",
    icon: "🧠",
    bg: "bg-orange-100",
    text: "text-orange-500",
  },
  {
    title: "Year 4",
    subtitle: "Senior Specialization",
    icon: "🎓",
    bg: "bg-purple-600",
    text: "text-white",
  },
];

export default function YearSelector() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        Select Your Year
      </h1>
      <p className="text-gray-500 text-center max-w-xl mb-10">
        Please choose your current academic year to access your curated dashboard and learning resources.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {years.map((year, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center cursor-pointer"
          >
            <div
              className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg ${year.bg}`}
            >
              <span className={`text-xl ${year.text}`}>
                {year.icon}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {year.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {year.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Pro Tip */}
      <div className="mt-10 bg-gray-100 rounded-lg p-4 flex items-start gap-3 max-w-xl">
        <span className="text-xl">💡</span>
        <div className="text-left">
          <p className="font-semibold text-gray-700">Pro Tip</p>
          <p className="text-sm text-gray-500">
            You can change your academic year anytime from the profile settings menu in the top right corner.
          </p>
        </div>
      </div>
    </div>
  );
}