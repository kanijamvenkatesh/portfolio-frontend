import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Section.css"; // Make sure you have this CSS file

export default function About() {
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/portfolio/about")
      .then(res => setText(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="about" className="section-box">
      {/* Top-left label */}

      {/* Main content */}
      <center></center>
   <center>   <h2>About Me</h2></center>
      <p>
          "I am a passionate Full Stack Developer specializing in <strong>Java, Spring Boot, ReactJS, and MySQL.</strong> I have experience in building real-world applications, designing responsive user interfaces, and integrating backend APIs efficiently. I am also skilled in Docker and deploying applications in cloud environments. Currently, I train students in Full Stack Web Development, helping them build projects like personal note managers, YouTube clones, e-commerce platforms, and job boards. My focus is on writing clean, maintainable code while creating smooth and user-friendly web experiences."
      </p>
      <p>I completed <strong>Java Full Stack Development</strong> from Pentaganspace and built several full-stack projects using Spring Boot and React. </p>
      <p> Currently, Im doing intership on <strong>Full Stack Developer</strong> at  <strong>Nmit_Solutions pvt ltd.</strong> I've developed projects like Ecommerce  website using SpringBoot and a Smart Health care management System using SpringBoot and I am currently working on the Mifos / Apache Fineract microfinance platform, understanding the entire loan lifecycle and backend service flow. I explored how clients, groups, and centers are created, how loan products are defined, and how loans move through Application → Approval → Disbursement → Repayment.
I set up Fineract backend locally, tested APIs using Postman, and analyzed how business rules like EMI calculation, schedules, and accounting entries work inside Spring Boot services</p>
    </section>
  );
}

