import React from "react";
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
      <div class="bloc">
      <h1>Hello !</h1>
      <div className="text-left">
          <p>
            Je m'appelle Yoann Pohu, j'ai 22 ans et je suis actuellement développeur web
            chargé de mission en alternance chez Electro Dépôt en deuxième année
            d’études. Formé en première année à la Web@cadémie d’Epitech à Lille. Durant
            cette formation, j'ai pu acquérir les bases de plusieurs langages de
            programmation tels que HTML, CSS, JavaScript, PHP, SQL, et bien d’autres.
          </p>
          <p className="mt-4">
            J’ai également appris à utiliser des outils de développement tels que Git,
            GitHub, et des frameworks comme Bootstrap, React, et Laravel avec
            l’utilisation de logiciels tel que Visual Studio Code, Phpmyadmin, et Figma
            que j’utilise régulièrement pour créer des maquettes interactives ou tout
            simplement coder les maquettes créées par une agence.
          </p>
        </div>
        <div class="text-righ">
          <p><strong>Full Name:</strong> Yoann Pohu</p>
          <p><strong>Phone:</strong> +33 0675143216</p>
          <p><strong>Email:</strong> yoann.pohu@epitech.eu</p>
          <p><strong>GitHub:</strong> YoannPohu2</p>
          <p><strong>Address:</strong> Lille</p>
        </div>
      </div>
  );
};

export default AboutMe;