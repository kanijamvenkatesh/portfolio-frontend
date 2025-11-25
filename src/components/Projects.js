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
      description: "Manage employee records using Spring Boot + ReactJS",
      github: "https://github.com/username/employee-crud-app"
    },
    "JWT Login App": {
      description: "Secure login using JWT & Spring Security",
      github: "https://github.com/username/jwt-login-app"
    },
    "Mini E-Commerce": {
      description: "Simple full-stack eCommerce system",
      github: "https://github.com/username/mini-ecommerce"
    },
    "Portfolio Website": {
      description: "Your portfolio website",
      github: "https://github.com/username/portfolio"
    }
  };

  return (
    <section id="portfolio" className="section-box">
      <center><h2>Portfolio</h2></center>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p}</h3>
            <p>{projectDetails[p]?.description || "No description available"}</p>
            <a href={projectDetails[p]?.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
