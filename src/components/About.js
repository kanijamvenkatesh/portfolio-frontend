import React, { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [text, setText] = useState("");

  useEffect(() => {
    const API = process.env.REACT_APP_API_BASE_URL;

    axios.get(`${API}/portfolio/about`)
      .then(res => setText(res.data))
      .catch(err => console.error("About API Error:", err));
  }, []);

  return (
    <div id="about" className="section-box">
      <center><h2>About Me</h2></center>
      <p className="about-text">{text}</p>
    </div>
  );
}

