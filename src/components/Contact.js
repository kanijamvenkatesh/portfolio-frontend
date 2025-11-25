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
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

      const res = await axios.post(
        `${API_BASE_URL}/portfolio/contact`,
        form
      );

      if (res.status === 200) {
        setMsg("Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
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
        <div className="contact-left">
          <p><strong>Email:</strong> kanijamvenkatesh9963@gmail.com</p>
          <p><strong>Phone:</strong> +91 9182121892</p>
          <p><strong>Location:</strong> Punganur, Andhra Pradesh</p>
        </div>

        <div className="contact-right">
          <div className="contact-form">
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
            <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" rows="4" value={form.message} onChange={handleChange}></textarea>
            <button onClick={send}>Send Message</button>

            {msg && <p style={{ color: msg.includes("Success") ? "green" : "red" }}>{msg}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
