import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  // Projects data
  const projects = [
    
    {
      name: "Smart HealthCare Management System using java with Springboot_JWT authentication",
      description: "Personal notes management app with React and local storage.",
      github: "https://github.com/username/notes-manager",
      demo: "https://notes-manager-demo.com"
    },
    {
      name: "E-Commerce_Springboot With Microservices",
      description: "E-commerce platform with product catalog and cart functionality.",
      github: "https://github.com/username/nxt-trendz",
      demo: "https://nxt-trendz-demo.com"
    },
  
    {
      name: "Weather App",
      description: "Live weather app using React and OpenWeather API.",
      github: "https://github.com/username/weather-app",
      demo: "https://weather-app-demo.com"
    },
    {
      name: "Food Store",
      description: "Online food ordering app built with ReactJS.",
      github: "https://github.com/username/food-store",
      demo: "https://food-store-demo.com"
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
