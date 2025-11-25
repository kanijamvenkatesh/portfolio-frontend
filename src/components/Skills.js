import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Section.css";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const API = process.env.REACT_APP_API_BASE_URL;

    axios.get(`${API}/portfolio/skills`)
      .then(res => setSkills(res.data))
      .catch(err => console.error("Skills API Error:", err));
  }, []);

  const skillDetails = {
    "HTML": "Semantic tags, Forms, Multimedia, SEO basics",
    "CSS": "Flexbox, Grid, Animations, Responsive design",
    "JavaScript": "ES6+, DOM Manipulation, Event Handling",
    "ReactJS": "Components, Hooks, State, Routing",
    "Core Java": "OOP, Collections, Multithreading, Exception Handling",
    "J2EE": "JSP, Servlets, JDBC, Enterprise components",
    "JSP": "Directives, Scripting, Expression Language",
    "Servlets": "Request/Response, Filters, Sessions",
    "Spring Core": "IOC, Dependency Injection, Bean lifecycle",
    "Spring Boot": "REST APIs, Auto-config, Security, Spring Data",
    "Microservices Architecture": "Service decomposition, Communication",
    "API Gateway": "Routing, Security",
    "Service Registry": "Service discovery",
    "Git": "Version control",
    "GitHub": "Repositories",
    "Cloud Basics": "AWS EC2, S3, IAM"
  };

  return (
    <section id="skills" className="section-box">
      <center><h2>My Skills</h2></center>

      <div className="list-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-card">
            <button onClick={() => setActiveSkill(activeSkill === s ? null : s)}>
              {s}
            </button>

            {activeSkill === s && (
              <p className="skill-details">{skillDetails[s]}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


