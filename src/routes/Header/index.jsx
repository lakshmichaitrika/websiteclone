import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext.jsx';
import { Link } from 'react-router-dom';
import { FaWhatsappSquare ,FaPhoneAlt }  from "react-icons/fa";

import './index.css';
const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };
  return (
    <>
    <header className="header">
      <div className="logo-title">
        <img src="images\logo.png" alt="Logo" className="logo" />
       
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/puja">Puja</Link></li>
          <li><Link to="/panchang">Panchang</Link></li>
          <li><Link to="/temples">Temples</Link></li>
          <li><Link to="/library">Library</Link></li>
        </ul>
      </nav>
      <div className='login'>

      
      <div className="language-dropdown">
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      <div className="user-login">
          <div className="user-icon">👤</div>
          <div className="dropdown-content">
            <p>To check all available pujas & offers:</p>
            <button>Login / Create an account</button>
            <hr/>
            <ul>
             <p>Account Details</p>
            
              <li><Link to="/profile">My Profile</Link></li>
              <li><Link to="/puja-bookings">My Puja Bookings</Link></li>
              <li><Link to="/ramotsav-bookings">My Ramotsav Bookings</Link></li>
              <li><Link to="/book-puja">Book a Puja</Link></li>
              
                </ul>
                <hr/>
            <div className="contact-info">
            <p>Help & Support for Puja Booking</p>
         <div className='container'>
            <div className='icon-color'>
           
            <FaPhoneAlt />
            </div>
            <div>
            <p>080-711-74417</p>
            <p>You can call us from 10:30 AM - 7:30 PM</p>
           
            </div>
            
         
         </div>
               <div className='contact'>
              <p> <FaWhatsappSquare /> Email us</p>
              <p>Whatsapp us</p>
            </div>
              </div>
              
          </div>
        </div>
        </div>
        
    </header>
    
    </>
  );
};

export default Header;

