import React, { useState } from 'react'
import close from '../../assets/icon-close.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import logo from "../../assets/logo-bookmark.svg";
import { NavLink } from 'react-router-dom';
import './navbar.css'



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="menu">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul className={isOpen ? "display" : ""}>
              <div className="btns close-btn " onClick={() => setIsOpen(false)}>
                <img src={close} alt=""/>
              </div>
              <li>
                <NavLink to="/">FEATURES</NavLink>
              </li>
              <li>
                <NavLink to="/pricing">PRICING</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
              <li>
                <NavLink to="/login">LOGIN</NavLink>
              </li>
            </ul>
          </nav>
          <div className="btns" onClick={() => setIsOpen(true)}>
            <img src={hamburger} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar