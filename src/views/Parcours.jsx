import React, { useContext } from "react";
import { FaGraduationCap, FaBriefcase, FaLanguage } from "react-icons/fa";
import { ThemeContext } from "../themeProvider";

const Parcours = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const bgClass = darkMode ? "bg-gray-100" : "bg-gray-900";
  const cardBg = darkMode ? "bg-white" : "bg-gray-800";
  const textColor = darkMode ? "text-gray-800" : "text-white";
  const listColor = darkMode ? "text-gray-600" : "text-gray-300";

  return (
    <section id="career" className={`py-20 min-h-screen ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 ${textColor}`}>
          🎓 Mon Parcours
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formation */}
          <div
            className={`${cardBg} rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-orange-500 text-2xl mr-3" />
              <h3 className={`text-2xl font-bold ${textColor}`}>Formations</h3>
            </div>
            <ul className={`text-sm list-disc pl-6 space-y-2 ${listColor}`}>
              <li><strong>Intégrateur / Développeur web</strong> – Web@cadémie Epitech Lille (2023 - 2025)</li>
              <li><strong>Développeur mobile</strong> – Apple Foundation @Simplon (2023)</li>
              <li><strong>Baccalauréat Mathématiques & SES</strong> – Lycée Charlotte Perriand (2018 - 2021)</li>
              <li><strong>BAFA</strong> – UFCV (2022)</li>
            </ul>
          </div>

          {/* Expériences Pro */}
          <div
            className={`${cardBg} rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-orange-500 text-2xl mr-3" />
              <h3 className={`text-2xl font-bold ${textColor}`}>Expériences Professionnelles</h3>
            </div>
            <ul className={`text-sm list-disc pl-6 space-y-2 ${listColor}`}>
              <li><strong>Développeur web</strong> – Electro Dépôt (en alternance)</li>
              <li><strong>Pizzaïolo</strong> – Pizza Paï (2022)</li>
              <li><strong>Animateur</strong> – Centre de loisirs, Camphin-en-Pévèle (2021)</li>
            </ul>
          </div>
        </div>

        {/* Langues */}
        <div
          className={`${cardBg} mt-16 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex items-center mb-4">
            <FaLanguage className="text-orange-500 text-2xl mr-3" />
            <h3 className={`text-2xl font-bold ${textColor}`}>Langues</h3>
          </div>
          <ul className={`text-sm list-disc pl-6 space-y-2 ${listColor}`}>
            <li><strong>Français</strong> – Langue maternelle</li>
            <li><strong>Anglais</strong> – Niveau B1 (séjour linguistique à Malte, EC School 2020)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
