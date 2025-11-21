import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
   <div class="footer">
  <div>
    <a href="#" class="footer-icon"><i class="fa-brands fa-github"></i></a>
    <a href="#" class="footer-icon"><i class="fa-brands fa-linkedin"></i></a> 
    <a href="#" class="footer-icon"><i class="fa-brands fa-instagram"></i></a> 
    <a href="#" class="footer-icon"><i class="fa-brands fa-hackerrank"></i></a>
  </div>

  <ul class="footer-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <p>© 2025 Venkatesh Portfolio. All Rights Reserved.</p>
</div>

  );
}
