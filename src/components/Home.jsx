import React from 'react';
import '../assets/style/style.css';
  import { Link } from 'react-router-dom';

  import cimage1 from '../assets/images/para.jpg';
    import cimage2 from '../assets/images/vitc.jpg';
  import cimage3 from '../assets/images/loera.jpg';
  import iconimage from '../assets/images/icon.jpg';

function Home() {
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
            <Link to="/aboutus" className="nav-link text-white">ABOUTUS</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/signin" className="nav-link text-white">SIGN IN</Link>
          </li>
        </ul>
      </div>
    </nav>
    <><section className="box">
        <div className="box-text">
          <h1 className="h-text">Your Trusted<br /> Healthy Partner</h1>
          <button className="order-btn">ORDER NOW</button>
        </div>
        <div className="box-icon">
          <img src={iconimage} title="medicines" alt="medicine icon" />
        </div>
      </section><section className="search-bar">
          <p><strong>20% OFF</strong> on your first order</p>
          <input type="text" placeholder="Search for medicines or products" />
        </section><div className="container">
          <a href="top.html"> <h2 style={{ color: 'white;' }}>Top-Selling</h2></a>

          <div className="row" style={{ gap: '10px;' }}>
            <div className="col-md-3 mt-3 mb-3">

              <div className="card">
                <img src={cimage1} className
                ="card-img-top mt-2 mb-3 ps-2 pe-2" alt="paracetamol" style={{ borderRadius: '10px;' }} />
                <div className="card-body">
                  <p className="card-text">Paracetamol Tablets<br />$7.99</p>
                  <a href="#" className="btn">Add To Cart</a>

                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="card">
                <img src={cimage2} className="card-img-top mt-2 mb-3 ps-2 pe-2" alt="paracetamol" style={{ borderRadius: '10px;' }} />
                <div className="card-body">
                  <p className="card-text">Vitamin C Tablets<br />$10</p>
                  <a href="#" className="btn">Add To Cart</a>

                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="card">
                <img src={cimage3} class="card-img-top mt-2 mb-3 ps-2 pe-2" alt="paracetamol" style={{ borderRadius: '10px;' }} />
                <div className="card-body">
                  <p className="card-text">Loratadine Tablets<br />$7.99</p>
                  <a href="#" className="btn">Add To Cart</a>

                </div>
              </div>
            </div>
          </div>
        </div><div className="action-buttons">
          <button className="consult">💬 Consult a Pharmacist</button>
          <button className="upload">⬆️ Upload Prescription</button>
        </div><div className="review-section">
          <p>⭐⭐⭐⭐⭐</p>
          <p>Great service and prompt delivery! Would definitely recommend.</p>
          <button className="upload-big">👨‍⚕️ Upload Prescription</button>
        </div><footer>
          <div className="footer-content">
            <div className="footer-links">
              <h3>MY ACCOUNT</h3>
              <ul>
                <li><a href="#">Saved Addresses</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">Account Settinges</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>ORDER DELIVERY</h3>
              <ul>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Delivery Charges</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>COMPANY</h3>
              <ul>
                <li><a>FAQs Privacy</a></li>
                <li><a>Policy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>SUPPORT</h3>
              <ul>
                <li><a href="contactus.html">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
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
        </footer></></>
    
  );
}

    

export default Home;
