import React from "react";
import '../assets/style/style.css';
import { Link } from 'react-router-dom';

function Signin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted!");
  };

  return (

     <><nav className="navbar navbar-expand-lg px-4 justify-content-end" style={{ backgroundColor: '#003366' }}>
      <Link className="navbar-brand text-white" to="/">MED PLUS</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <Link to="/" className="nav-link text-white">HOME</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/shop" className="nav-link text-white">SHOP</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/contactus" className="nav-link text-white">CONTACT US</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/blog" className="nav-link text-white">BLOG</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/signin" className="nav-link text-white">SIGN IN</Link>
          </li>
        </ul>
      </div>
    </nav>
      
      <div className="signin-wrapper d-flex justify-content-center align-items-center mt-3">
        <div className="signin-container">
          <form className="signin-form" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Medical Portal Login</h2>

            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your First Name" required />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Enter your Last Name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />

            <button type="submit" className="btn btn-primary mt-3">Sign In</button>

            <p className="register-link mt-3">
              Don't have an account? <a href="#">Register here</a>
            </p>
          </form>
        </div>
      </div>

      
          <div className="footer-bottom">
            <span className="icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-pinterest"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
            </span>
            <p>MED PLUS your trusted Healthy Partner!!!! &copy; 2025 All rights reserved.</p>
          
        
      </div>
    </>
  );
}

export default Signin;
 