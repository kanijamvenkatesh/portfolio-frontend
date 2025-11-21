import React, { useState } from "react";
import axios from "axios";
import "./Section.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const send = async () => {
    try {
      const res = await axios.post("http://localhost:8080/portfolio/contact", form);
      if (res.status === 200) {
        setMsg("Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setMsg("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setMsg("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="section-box contact-section">
      <center><h2 className="contact-header">Contact Me</h2></center>

      <div className="contact-container">

        {/* LEFT SIDE DETAILS + SOCIAL LINKS BELOW */}
        <div className="contact-left">

          {/* Contact details with icons */}
          <p><i className="fas fa-envelope"></i> 
            <strong> Email:</strong> 
            <a href="mailto:kanijamvenkatesh9963@gmail.com"> kanijamvenkatesh9963@gmail.com</a>
          </p>

          <p><i className="fas fa-phone"></i> 
            <strong> Phone:</strong> +91 9182121892
          </p>

          <p><i className="fas fa-location-dot"></i> 
            <strong> Location:</strong> Punganur, Andhra Pradesh
          </p>

          {/* SOCIAL LINKS BELOW DETAILS */}
          <div className="social-buttons" style={{ marginTop: "20px" }}>
            
            <a href="https://github.com/kanijamvenkatesh" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn-social">
              <i className="fab fa-github"></i> GitHub
            </a>

            <a href="https://www.linkedin.com/in/kanijamvenkatesh9963/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn-social">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>

            <a href="https://instagram.com/she_call_me_waste_pewllow"
               target="_blank"
               rel="noopener noreferrer"
               className="btn btn-social">
              <i className="fab fa-instagram"></i> Instagram
            </a>

            <a href="https://www.hackerrank.com/dashboard"
               target="_blank"
               rel="noopener noreferrer"
               className="btn btn-social">
              <i className="fab fa-hackerrank"></i> HackerRank
            </a>

          </div>
        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <div className="contact-right">

          <div className="contact-form">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button onClick={send}>Send Message</button>

            {msg && (
              <p style={{ color: msg.includes("Successfully") ? "green" : "red", marginTop: "10px" }}>
                {msg}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
