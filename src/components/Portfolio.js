import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  // Projects data
  const projects = [
    
    {
      name: "Smart HealthCare Management System using java with Springboot_JWT authentication",
      description: "Personal notes management app with React and local storage.",
      github: "https://github.com/kanijamvenkatesh/Smart_healthcare_Management_System-using-SpringBoot",
      demo: "https://notes-manager-demo.com"
    },
    {
      name: "E-Commerce_Springboot With Microservices",
      description: "E-commerce platform with product catalog and cart functionality.",
      github: "https://github.com/kanijamvenkatesh/Ecommerce_Microservices-with-ApiGateway",
      demo: "https://nxt-trendz-demo.com"
    },
  
    {
      name: "Porto-folio",
      description: "porto-folio of me.",
      github: "https://github.com/kanijamvenkatesh/portfolio-frontend",
      demo: "https://weather-app-demo.com"
    },
    {
      name: "Employee Managemnt_using ReactJs fronted",
      description: "Online food ordering app built with ReactJS.",
      github: "https://github.com/kanijamvenkatesh/EmployeeManagement--frontend-ReactJs-",
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
              {/* <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
