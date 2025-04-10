import React, { useState, useContext } from "react";
import { ThemeContext } from "../themeProvider";

const projects = [
  {
    name: "Kronos",
    shortDesc: "Alternative open-source à Jira/Trello avec gestion CI/CD.",
    longDesc: "Kronos est un outil self-hostable pour gérer des projets avec des boards Kanban/Scrum, intégration CI/CD, et bien plus encore.",
    tags: ["React (TypeScript)", "Tailwind CSS", "Apollo Client", "Node.js", "GraphQL", "Socket.io", "Redis", "PostgreSQL"],
  },
  {
    name: "My Event",
    shortDesc: "Gestion d’événements avec carte et authentification Google.",
    longDesc: "Une app de gestion d'événements où les utilisateurs peuvent filtrer des événements, les visualiser sur une carte interactive et s’authentifier via Google.",
    tags: ["Angular", "Tailwind CSS", "MongoDB", "Google OAuth", "Node.js (Express)"],
  },
  {
    name: "My Battleship",
    shortDesc: "Jeu de bataille navale contre un bot en JavaScript.",
    longDesc: "Jeu Battleship complet avec grille, IA, animations et système de score.",
    tags: ["JavaScript", "HTML", "CSS", "ESLint"],
  },
];

const Project = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  // 🎨 Thème inversé corrigé
  const bgClass = darkMode ? "bg-gray-100" : "bg-gray-900";
  const cardBg = darkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white";
  const tagStyle = darkMode ? "bg-gray-200 text-gray-800" : "bg-gray-700 text-white";
  const modalBg = darkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white";
  const overlayBg = "bg-black bg-opacity-60";
  const closeBtnColor = darkMode ? "text-gray-500 hover:text-red-500" : "text-gray-400 hover:text-red-400";

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className={`${bgClass} py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-500 mb-12">Mes Projets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className={`${cardBg} cursor-pointer rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm rounded-full ${tagStyle}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-red-500 mt-4 font-medium">En savoir plus →</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${overlayBg}`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`${modalBg} max-w-xl w-full mx-4 p-6 rounded-xl relative shadow-lg`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-3 right-4 text-xl ${closeBtnColor}`}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
            <p className="mb-4">{selectedProject.longDesc}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-sm rounded-full ${tagStyle}`}
                >
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
