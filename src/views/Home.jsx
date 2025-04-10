import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typewriter from "typewriter-effect";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundImage: `url('${darkMode ? cloud : cloudDark}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
 

 <main
  className="w-full px-4 md:px-20 mb-5 md:mb-0 pt-20 flex flex-col md:flex-row items-center justify-between min-h-screen"
  id="/"
>



        {/* Texte à gauche */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <motion.span
              className={darkMode ? "block text-black" : "block text-white"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hello, I am <span className="text-blue-500">Yoann</span>
            </motion.span>

            <span className="text-blue-500 block mt-2 text-2xl sm:text-3xl md:text-4xl">
              <Typewriter
                options={{
                  strings: [
                    "Développeur Front-End",
                    "Développeur Full Stack",
                    "Développeur Mobile",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                  pauseFor: 3000,
                }}
              />
            </span>
          </h1>

          <p
            className={`mt-6 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 ${
              darkMode ? "text-black" : "text-white"
            }`}
          >
            Je suis développeur front-end/full-stack. Je travaille actuellement
            chez Electro dépôt en tant que développeur front-end.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex justify-center md:justify-start mt-8 gap-5">
            {contactLinks.map((el, index) => (
              <a
                key={index}
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-125"
              >
                <img
                  alt={el.name}
                  src={el.url}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
            ))}
          </div>

          {/* Bouton CV */}
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 md:px-10 md:py-4 bg-blue-500 hover:bg-blue-400 text-white font-medium text-base md:text-lg rounded-md cursor-pointer transition"
            >
              Télécharger mon CV
            </Link>
          </div>
        </div>

        {/* Image à droite */}
        <motion.img
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          src={heroBg}
          alt="hero"
          className="w-full sm:w-3/4 md:w-2/4 lg:w-2/5 mt-10 md:mt-0 mx-auto"
        />
      </main>
    </div>
  );
};

export default Home;
