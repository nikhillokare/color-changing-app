"use client";
import { useState } from "react";
const colors = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  indigo: "bg-indigo-500",
  teal: "bg-teal-500",
  orange: "bg-orange-500",
  gray: "bg-gray-500",
};

const IndexPage = () => {
  const [backgroundColorClass, setBackgroundColorClass] = useState("");

  const changeBackgroundColor = (color) => {
    setBackgroundColorClass(colors[color]);
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${backgroundColorClass}`}
    >
      <div className="flex space-x-4">
        {Object.keys(colors).map((color) => (
          <button
            key={color}
            className={`text-white px-4 py-2 rounded ${colors[color]}`}
            onClick={() => changeBackgroundColor(color)}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
