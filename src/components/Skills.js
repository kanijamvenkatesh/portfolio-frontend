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

  // All your skills including Git, GitHub, Cloud Basics
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
    "Microservices Architecture": "Service decomposition, Communication, Fault tolerance",
    "API Gateway": "Routing, Security, Cross-cutting concerns",
    "Service Registry": "Service discovery, Registration, Health checks",
    "Git": "Version control, branching, merging, resolving conflicts",
    "GitHub": "Repositories, Pull Requests, Issues, Collaboration",
    "Cloud Basics": "AWS EC2, S3, IAM, Cloud deployment basics"
  };

  // Only the skills you want (ignore backend API skills)
  const combinedSkills = Array.from(new Set([...Object.keys(skillDetails)]));

  return (
    <div id="skills" className="section-box">
     <center> <h2> My Skills</h2></center>
      <div className="list-grid">
        {combinedSkills.map((s, i) => (
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
    </div>
  );
}
