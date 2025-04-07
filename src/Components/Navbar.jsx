import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Yoann.dev</h1>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><a href="#accueil">Home</a></li>
                    <li><a href="#a-propos">About me</a></li>
                    <li><a href="#parcours">Mon parcours</a></li>
                    <li><a href="#competences">Compétences</a></li>
                    <li><a href="#projets">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
