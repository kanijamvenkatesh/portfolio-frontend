import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Section.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const API = process.env.REACT_APP_API_BASE_URL;

    axios.get(`${API}/portfolio/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error("Projects API Error:", err));
  }, []);

  const projectDetails = {
    "Employee CRUD App": {
      description: "Manage employee records with full CRUD operations using Java Spring Boot and ReactJS.",
      github: "https://github.com/username/employee-crud-app",
      demo: "https://employee-crud-app-demo.com"
    },
    "JWT Login App": {
      description: "Secure login system using JWT authentication with Spring Security.",
      github: "https://github.com/username/jwt-login-app",
      demo: "https://jwt-login-app-demo.com"
    },
    "Mini E-Commerce": {
      description: "Simple e-commerce platform with cart, checkout, and product management.",
      github: "https://github.com/username/mini-ecommerce",
      demo: "https://mini-ecommerce-demo.com"
    },
    "Portfolio Website": {
      description: "My personal portfolio built with ReactJS and modern UI.",
      github: "https://github.com/username/portfolio-website",
      demo: "https://portfolio-demo.com"
    }
  };

  return (
    <div className="section-box">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p}</h3>
            <p>{projectDetails[p]?.description || "No description"}</p>
            <div className="project-links">
              <a href={projectDetails[p]?.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={projectDetails[p]?.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
