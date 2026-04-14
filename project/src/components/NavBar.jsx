import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a
        className="navbar-logo-link"
        href="https://adriannanoone.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit external website"
      >
        <img className="navbar-logo" src="/noone_logo.png" alt="Noone logo" />
      </a>

      <div className="navbar-brand">
        <Link to="/">SAPWOOD</Link>
      </div>

      <div className="navbar-right">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
          <li><Link to="/questionnaire" onClick={() => setIsOpen(false)}>QUESTIONNAIRE</Link></li>
          <li><Link to="/credits" onClick={() => setIsOpen(false)}>CREDITS</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;