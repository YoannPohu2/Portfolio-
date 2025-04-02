import React from "react";
import "../css/Home.css";
import profilePhoto from "../img/Pohu.Yoann.png"; 

const Home = () => {
    return (
        <div class="home">
            <img src={profilePhoto} alt="Yoann Pohu" class="profile-photo" />
            <h1>Yoann Pohu</h1>
            <p>Full Stack Developer</p>
            <div className="links">
                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <a href="path/to/your/cv.pdf" class="cv-download" download>Télécharger mon CV</a>
        </div>
    );
}

export default Home;