import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";

const categories = ["frontend", "backend", "framework", "tools"];

const Technologie = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const bgClass = darkMode ? "bg-gray-50" : "bg-gray-900";
  const textClass = darkMode ? "text-gray-700" : "text-white";
  const cardBg = darkMode ? "bg-white" : "bg-gray-800";
  const cardText = darkMode ? "text-gray-800" : "text-white";

  const categorizedStacks = categories.reduce((acc, category) => {
    acc[category] = techStack.filter(item => item.category === category);
    return acc;
  }, {});

  return (
    <div id="tech" className={`${bgClass} py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-blue-500 mb-8">Technologies et outils</h3>

        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <h4 className={`text-2xl font-bold capitalize mb-4 ${textClass}`}>{category}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {categorizedStacks[category].map((el, idx) => (
                <div
                  key={idx}
                  className={`${cardBg} ${cardText} flex items-center shadow-md p-4 rounded-lg hover:scale-105 transition-transform`}
                >
                  <img alt={el.name} src={el.link} className="w-10 h-10" />
                  <span className="ml-4 font-semibold">{el.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologie;
