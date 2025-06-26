import React from "react";
import '../assets/style/style.css';
import { Link } from 'react-router-dom';

import simg1 from '../assets/images/bbottles.jpg';
import simg2 from '../assets/images/bbwash.jpg';
import simg3 from '../assets/images/bfeed.jpg';
import simg4 from '../assets/images/blotion.jpg';
import simg5 from '../assets/images/facces.jpg';
import simg6 from '../assets/images/medic.jpg';
import simg7 from '../assets/images/mthe.jpg';
import simg8 from '../assets/images/syri.jpg';
import simg9 from '../assets/images/d.jpg';
import simg10 from '../assets/images/glu.jpg';
import simg11 from '../assets/images/hot.jpg';
import simg12 from '../assets/images/neb.jpg';

function Top() {
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
    </nav><div className="content mt-4 mb-4">
        <div className="marquee-container">
          <div className="marquee-text">
            <h4>All MEDICINES AVAILABLE | 50% DISCOUNTS FOR MEDICINES | YOUR TRUSTED PARTNER!!!</h4>
          </div>
        </div>
      </div><section className="search-bar text-center mb-4">
        <p><strong>20% OFF</strong> on your first order</p>
        <input type="text" className="form-control w-50 mx-auto" placeholder="Search for medicines or products" />
      </section><div className="container mt-5 mb-5 justify-content-center align-item-center">


        <h1 style={{ textAlign: 'center' }}>Our products</h1>
        <div className="row ms-3 me-3" style={{ gap: '30px', backgroundColor: 'white', borderRadius: '10px' }}>

          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg1} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />

            <div className="card-body">
              <h3 className="card-title">BABY BOTTLES</h3>
              <p className="card-text"> With Blue Color And Use Daily<br />
                499<br />
              </p>
              <a href="" className="btn btn-danger">Add To Cart</a>

            </div>
          </div>
          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg2} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
            <div className="card-body">
              <h3 className="card-title">BABY SHAMPOO</h3>
              <p className="card-text"> Paraban Free Sulphur Free<br />
                600<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>


          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg3} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
            <div className="card-body">
              <h3 className="card-title">FEEDING ESSENTIALS</h3>
              <p className="card-text"> Included Spoon Cup Other Baby Feeding Essentials<br />
                1,990<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>
          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg4} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
            <div className="card-body">
              <h3 className="card-title">BABY LOTION</h3>
              <p className="card-text"> Without Sulphur <br />
                999<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>


          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg5} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
            <div className="card-body">
              <h3 className="card-title">FIRSTAID ACCESSORIES</h3>
              <p className="card-text"> With All Basic Accessories<br />
                999<br />
              </p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>
          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg6} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
            <div className="card-body">
              <h3 className="card-title">TABLETS SYRUPS AND PILLS</h3>
              <p className="card-text">With Minimum Dose<br />
                199<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>


          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg7} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
            <div className="card-body">
              <h3 className="card-title">SCANNING THERMOMETER</h3>
              <p className="card-text"> To Cover Choose Surfaces<br />
                9,999<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>
          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg8}
              className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
            <div className="card-body">
              <h3 className="card-title">INJECTION</h3>
              <p className="card-text">With Needle And Medicine<br />
                989<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>

          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg9} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />

            <div className="card-body">
              <h3 className="card-title">DIABETICS KIT</h3>
              <p className="card-text"> With Needles And Medicine<br />
                999<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>

          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg10} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />

            <div className="card-body">
              <h3 className="card-title">GLUCOSE BOTTLES</h3>
              <p className="card-text"> With Stand And Strips<br />
                1,999<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>
          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg11} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />

            <div className="card-body">
              <h3 className="card-title">HOT PACK </h3>
              <p className="card-text"> For Pain Relief<br />
                899<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>
          <div className="card mt-4" style={{ width: '20rem' }}>
            <img src={simg12} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />

            <div className="card-body">
              <h3 className="card-title">NEBULIZER</h3>
              <p className="card-text"> With Oxygen Mask<br />
                2,999<br /></p>
              <a href="" className="btn btn-danger">Add To Cart</a>
            </div>
          </div>

        </div>
      </div>     <div className="footer-bottom">
            <span className="icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-pinterest"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
            </span>
            <p>MED PLUS your trusted Healthy Partner!!!! &copy; 2025 All rights reserved.</p>
          
      </div></>
    
  );
}

export default Top;
