import React, { useEffect, useState } from "react";
import "./Hero.css";
import venkatImg from "../assets/venkat.jpg";


export default function Hero() {
  const text = "FULL STACK DEVELOPER";  // typing text
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typing = setInterval(() => {
      setDisplayed(text.slice(0, index));
      setIndex((prev) => {
        if (prev === text.length) return 0; // restart animation
        return prev + 1;
      });
    }, 120); // typing speed

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section id="hero" className="hero-section">
    
      <div className="hero-text">
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hlo i'm</h3>
<h1>Kanijam Venkatesh </h1>

        {/* Typing animation */}
        <h2 className="typing-text">{displayed}</h2>

        <p>Building responsive web apps with Java & React</p>

        <div className="hero-buttons">
          <center>
            <a href="/myCV.pdf" download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
          </center>
        </div>
      </div>

      <div className="hero-image">
        <img src={venkatImg} alt="Kanijam Venkatesh" />
      </div>
    </section>
  );
}
