// AboutUs.js
import React from "react";
import "./AboutUs.css";
import pic from "../assets/pic.jpg";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="profile-card">
        <img
          src={pic} 
          alt="Shravan"
          className="profile-img"
        />
        <h2>Shravan Kumar</h2>
        <p className="role">Full Stack WebDeveloper</p>
        <p className="bio">
          Passionate about crafting intuitive and dynamic user interfaces.
          Always eager to learn and implement the latest web technologies.
        </p>
        <div className="contact-info">
          <a href="mailto:Shravankumar.21a@gmail.com" className="contact-link">
            Email
          </a>
          <a href="https://github.com/shravan341" className="contact-link">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shravan5698/"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
