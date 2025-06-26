import React from "react";
import '../assets/style/abo.css';
  import aimage1 from '../assets/images/about.jpg';
  import aimage2 from '../assets/images/abou.jpg';
  import { Link } from 'react-router-dom';


function Aboutus() {
    return(
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
    <div className="container-fluid mt-4 ps-5">
                <div className="row" style={{ borderRadius: '10px' }}>
                    <div className="col-md-6 mt-3 mb-3" style={{ borderRadius: '10px' }}>

                        <img src={aimage1} className="img-fluid" style={{ height: '500px', width: '500px' }} />
                    </div>
                    <div className="col-md-6 mt-3" style={{ borderRadius: '10px' }}>
                        <h2>About Us</h2>
                        Welcome to MEDPLUS your are
                        trusted partner in health and wellness. We are committed to providing high-quality medicines, healthcare products, and personalized pharmacy services to our community.

                        With a focus on accuracy, care, and convenience, we strive to ensure that every customer receives the attention and support they need for a healthier life. Our experienced pharmacists and friendly staff are always ready to guide you with expert advice and reliable service.

                        At MED PLUS, we offer:

                        A wide range of prescription and over-the-counter medications

                        Genuine healthcare products and medical supplies

                        Fast and secure online ordering

                        Home delivery services (if applicable)

                        Confidential health consultations

                        Our mission is to make healthcare accessible, affordable, and compassionate. Whether you visit us in-store or shop online, your health and satisfaction are our top priorities.
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4 ps-5">
                <div className="row" style={{ borderRadius: '10px' }}>
                    <div className="col-md-6 mt-3 mb-3" style={{ borderRadius: '10px' }}>
                        <h2>WHY CHOOSE US</h2>
                        <p>At <strong>MEDPLUS</strong>, we are dedicated to delivering exceptional healthcare services with convenience, care, and trust. Here’s why thousands of customers choose us:</p>
                        
                            ✅ <strong>100% Genuine Products:</strong> We supply only certified and approved medications and healthcare essentials.<br />
                            ✅ <strong>Licensed Pharmacist Support:</strong> Our experienced pharmacists provide expert advice and personalized care.<br />
                            ✅ <strong>24/7 Customer Support:</strong> Assistance anytime with orders, health queries, and more.<br />
                            ✅ <strong>Multilingual Assistance:</strong> Get help in multiple languages for wider accessibility.<br />
                            ✅ <strong>Fast Delivery:</strong> Real-time order tracking and reliable doorstep delivery.<br />
                            ✅ <strong>Affordable Prices & Offers:</strong> Competitive pricing, discounts, and loyalty rewards.<br />
                            ✅ <strong>Wide Range of Products:</strong> From prescriptions to wellness and baby care — all in one place.<br />
                            ✅ <strong>Easy-to-Use Mobile App:</strong> Refill, chat with pharmacists, and track anytime.<br />
                            ✅ <strong>Privacy & Confidentiality:</strong> Your health data is secure and handled ethically.<br />
                                         </div>

                    <div className="col-md-6 mt-3 mb-3" style={{ borderRadius: '10px' }}>
                        <img
                            src={aimage2}
                            alt="Why Choose Us"
                            className="img-fluid"
                            style={{ height: '500px', width: '500px', borderRadius: '10px' }} />
                    </div>
                </div>
            </div><div className="footer-bottom">
                <span className="icons">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-pinterest"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                </span>
                <p>MED PLUS your trusted Healthy Partner!!!!&copy; 2025 All rights reserved. </p>
            </div></>
    );
}
 export default Aboutus;

                        
