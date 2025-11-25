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
      description: "Manage employees with CRUD operations.",
      github: "https://github.com/username/employee-crud-app",
      demo: "#"
    },
    "JWT Login App": {
      description: "JWT Authentication using Spring Security.",
      github: "https://github.com/username/jwt-login-app",
      demo: "#"
    },
    "Mini E-Commerce": {
      description: "Full stack mini e-commerce system.",
      github: "https://github.com/username/mini-ecommerce",
      demo: "#"
    },
    "Portfolio Website": {
      description: "My portfolio built using React.",
      github: "https://github.com/kanijamvenkatesh/portfolio-frontend",
      demo: "https://portfolio-frontend.onrender.com"
    }
  };

  return (
    <div id="projects" className="section-box">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p}</h3>
            <p>{projectDetails[p]?.description || "No description available"}</p>

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
