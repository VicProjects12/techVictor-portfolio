import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/Logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navlinks = [
  { title: "About", path: "about" },
  { title: "Portfolio", path: "portfolio" },
  { title: "Stack", path: "stack" },
  { title: "Contact", path: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />

      <div className="desktopMenu">
        {navlinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            {link.title}
          </Link>
        ))}
      </div>

      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
      </button>

      <div className="menu-toggle" onClick={toggleNav}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div className={`mobile-nav ${nav ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                smooth={true}
                duration={500}
                onClick={closeNav}
                className="mobile-nav-link"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;