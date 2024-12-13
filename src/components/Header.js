import React from "react";
import '../css/index.css'; // Import the CSS file
import { Link } from 'react-router-dom';


import { useState } from 'react';




function Header() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulating user login, this could be replaced with your authentication logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulating user logout, this could be replaced with your logout logic
    setIsLoggedIn(false);
  };




    return(
      <header>
    <div className="header_bottom_box">

    <div className="header_top_box">

      <div className="logo_container">
        <Link to='/main'>
          <div className="logo_container_fill"></div>
        </Link>
      </div>

      <ul className="navigation">
        <li><Link to='/main'>Головне Меню</Link></li>
        <li><Link to="/services">Святкові Послуги</Link></li>
        <li><Link to="/about">Про Нас</Link></li>
        <li><Link to="/shopcart">Оформити Замовлення</Link></li>

      </ul>
     

      <div className="profile_container">
  
        {isLoggedIn ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <button className="button_text" onClick={handleLogin}><Link to="/Register">Реєстрація</Link></button>
      )}
      </div>

    </div>

    </div>
    <div className="header_line"></div>
      </header>
    );
  }
  export default Header;