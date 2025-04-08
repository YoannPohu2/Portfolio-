import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import profilePhoto from "../img/Pohu.Yoann.png";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const bgClass = darkMode ? "bg-white" : "bg-gray-900";
  const textClass = darkMode ? "text-gray-700" : "text-white";

  return (
    <section id="about" className={`${bgClass} py-20`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* 📸 Photo à gauche */}
        <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
          <div className="rounded-full overflow-hidden w-64 h-64 mx-auto shadow-lg">
            <img
              src={profilePhoto}
              alt="Yoann Pohu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 📝 Texte à droite */}
        <div className="w-full lg:w-2/3 lg:pl-16">
          <h2 className={`text-4xl font-bold mb-6 ${textClass}`}>
            ⚡ About Me
          </h2>
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
    </section>
  );
};

export default About;
