import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-purple text-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>About Us</h3>
            <p>We are a company dedicated to providing high-quality products and services to our customers. </p>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>123 Main Street<br/>New York, NY 10001<br/>Phone: 555-555-5555<br/>Email: info@myapp.com</p>
          </div>
          <div className="col-md-3">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-3 social-links">
            <h3>Follow Us</h3>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://www.facebook.com/todocrm/"><i className="fab fa-facebook-f social-links"></i></a></li>
              <li className="list-inline-item"><a href="https://twitter.com/thetaskapp?lang=en"><i className="fab fa-twitter social-links"></i></a></li>
              <li className="list-inline-item"><a href="https://www.linkedin.com/pulse/amazing-todo-list-app-drag-drop-features-siva-kumar-katari"><i className="fab fa-linkedin-in social-links"></i></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/todoistofficial/?hl=en"><i className="fab fa-instagram social-links"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <p>&copy; Todo App 2023</p>
      </div>
    </footer>
  );
}