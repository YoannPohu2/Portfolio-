import React, { useState, useContext } from "react";
import { ThemeContext } from "../themeProvider";
import ABCImage from "../img/ABC.png";

// 🧠 Données des projets
const projects = [
  {
    name: "Maquette ABC",
    shortDesc: "Première intégration HTML/CSS selon une maquette imposée.",
    image: ABCImage,
    tags: ["HTML5", "CSS3", "Accessibilité"],
    presentation: `
      Ce projet consistait à reproduire fidèlement une maquette graphique en HTML5 et CSS3, 
      tout en respectant les standards W3C et les bonnes pratiques de référencement naturel. 
      Il incluait également l'intégration d'un player YouTube, l'utilisation de polices spécifiques 
      (Oswald, Droid Sans, Droid Serif), et des consignes strictes sur l’accessibilité.
    `,
    apprentissage: `
      - Maîtrise des balises sémantiques HTML5
      - Structuration propre et maintenable du CSS
      - Importation et utilisation de polices personnalisées via @import
      - Intégration d’un lecteur vidéo YouTube
      - Sensibilisation aux normes d’accessibilité
      - Conformité aux standards W3C
    `,
  },
];


const Project = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("presentation");

  // 🎨 Thème inversé
  const bgClass = darkMode ? "bg-gray-100" : "bg-gray-900";
  const cardBg = darkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white";
  const tagStyle = darkMode ? "bg-gray-200 text-gray-800" : "bg-gray-700 text-white";
  const modalBg = darkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white";
  const overlayBg = "bg-black bg-opacity-60";
  const closeBtnColor = darkMode ? "text-gray-600 hover:text-red-500" : "text-gray-400 hover:text-red-400";

  return (
    <section id="projects" className={`${bgClass} py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Projets</h2>

        {/* 🖼️ Grille d’images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedProject(project);
                setActiveTab("presentation");
              }}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 group"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className={`${cardBg} p-4`}>
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="text-sm">{project.shortDesc}</p>
                <p className="text-red-500 mt-2 font-medium">En savoir plus →</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💬 Popup détaillée avec onglets */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${overlayBg}`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`${modalBg} max-w-2xl w-full mx-4 p-6 rounded-xl relative shadow-lg`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-3 right-4 text-xl ${closeBtnColor}`}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>

            {/* Onglets */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveTab("presentation")}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  activeTab === "presentation"
                    ? "bg-blue-500 text-white"
                    : "bg-transparent border border-blue-500 text-blue-500"
                }`}
              >
                Présentation
              </button>
              <button
                onClick={() => setActiveTab("apprentissage")}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  activeTab === "apprentissage"
                    ? "bg-blue-500 text-white"
                    : "bg-transparent border border-blue-500 text-blue-500"
                }`}
              >
                Apprentissage
              </button>
            </div>

            {/* Contenu actif */}
            <div className="text-sm whitespace-pre-line mb-4">
              {activeTab === "presentation"
                ? selectedProject.presentation
                : selectedProject.apprentissage}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, idx) => (
                <span key={idx} className={`px-3 py-1 text-sm rounded-full ${tagStyle}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
