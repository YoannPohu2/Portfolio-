import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import profilePhoto from "../img/Pohu.Yoann.png";

const categories = ["frontend", "backend", "framework", "tools"];

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const bgClass = darkMode ? "bg-gray-50" : "bg-gray-900";
  const textClass = darkMode ? "text-gray-700" : "text-white";

  const categorizedStacks = categories.reduce((acc, category) => {
    acc[category] = techStack.filter(item => item.category === category);
    return acc;
  }, {});

  return (
    <section id="about" className={`${bgClass} py-20`}>
      {/* 📸 Photo + Texte */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Photo à gauche */}
        <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
          <div className="rounded-full overflow-hidden w-64 h-64 mx-auto shadow-lg">
            <img
              src={profilePhoto}
              alt="Yoann Pohu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texte à droite */}
        <div className="w-full lg:w-2/3 lg:pl-16">
          <h2 className={`text-4xl font-bold mb-6 ${textClass}`}>⚡ About Me</h2>
          <p className={`text-lg mb-6 leading-relaxed ${textClass}`}>
            Hey! Je m'appelle <strong>Yoann Pohu</strong>, j'ai 22 ans et je suis passionné par l'informatique depuis mon plus jeune âge.
            Aujourd'hui, je suis développeur web en alternance chez Electro Dépôt, dans ma deuxième année d’études.
          </p>
          <p className={`text-lg mb-6 leading-relaxed ${textClass}`}>
            J’ai appris à coder en autodidacte avant d’intégrer la Web@cadémie d’Epitech à Lille. Je travaille avec des technologies modernes
            pour créer des interfaces web et mobiles performantes, tout en m’intéressant à l’open source et au développement full-stack.
          </p>
          <p className={`text-lg leading-relaxed ${textClass}`}>
            Quand je ne code pas, j’aime jouer avec mes amis, regarder des séries sur Netflix, ou profiter du beau temps pour faire du skate ou jouer au basket 🏀.
          </p>
        </div>
      </div>

      {/* 🛠️ Technologies par catégorie */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <h3 className="text-3xl font-semibold text-blue-500 mb-8">Technologies et outils</h3>

        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <h4 className={`text-2xl font-bold capitalize mb-4 ${textClass}`}>{category}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {categorizedStacks[category].map((el, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-white shadow-md p-4 rounded-lg hover:scale-105 transition-transform"
                >
                  <img alt={el.name} src={el.link} className="w-10 h-10" />
                  <span className="ml-4 text-gray-800 font-semibold">{el.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;