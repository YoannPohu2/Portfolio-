import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const bgClass = darkMode ? "bg-gray-50" : "bg-gray-900";
  const textClass = darkMode ? "text-gray-700" : "text-white";
  const cardBg = darkMode ? "bg-white" : "bg-gray-800";
  const inputBg = darkMode ? "bg-white" : "bg-gray-700";
  const inputText = darkMode ? "text-gray-800" : "text-white";
  const borderColor = darkMode ? "border-gray-300" : "border-gray-600";

  return (
    <section id="contact" className={`${bgClass} py-20 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-500 mb-8 text-center">Me contacter</h2>

        <form className={`${cardBg} p-8 rounded-2xl shadow-md space-y-6`}>
          <div>
            <label htmlFor="name" className={`block font-medium mb-2 ${textClass}`}>Nom</label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              className={`w-full px-4 py-2 rounded-lg ${inputBg} ${inputText} ${borderColor} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div>
            <label htmlFor="email" className={`block font-medium mb-2 ${textClass}`}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Votre adresse email"
              className={`w-full px-4 py-2 rounded-lg ${inputBg} ${inputText} ${borderColor} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div>
            <label htmlFor="message" className={`block font-medium mb-2 ${textClass}`}>Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Votre message..."
              className={`w-full px-4 py-2 rounded-lg ${inputBg} ${inputText} ${borderColor} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 w-full"
          >
            Envoyer le message
          </button>
        </form>
      </div>

      <p className={`mt-10 text-center text-sm ${textClass}`}>
           &copy; 2025 Yoann Pohu. Tous droits réservés.
</p>

    </section>
    
  );
};

export default Contact;
