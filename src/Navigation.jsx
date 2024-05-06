import React, { useEffect } from 'react';
import './Bar.css';

const Navigation = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.links');

    const handleHamburgerClick = () => {
      navLinks.classList.toggle('hide');
      hamburger.classList.toggle('lines-rotate');
    };

    const handleLinkClick = () => {
      navLinks.classList.toggle('hide');
    };

    hamburger.addEventListener('click', handleHamburgerClick);

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', handleLinkClick);
    }

    // Cleanup event listeners when component unmounts
    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
      for (let i = 0; i < links.length; i++) {
        links[i].removeEventListener('click', handleLinkClick);
      }
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
   
            <>  
    <nav>
     <div>
          <h1 id="logo" className="logo">LOGO</h1>
          </div>
      <div className="hamburger">
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </div>
         
      <ul id="nav-links">
        
        <li>
          <a href="#" className="links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="links">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="links">
            Gallery
          </a>
        </li>
        <li>
          <a href="#" className="links">
            About
          </a>
        </li>
        <li>
          <a href="#" className="links">
            Contact
          </a>
        </li>
      </ul>
      
    </nav>
     
</>
  );
};

export default Navigation;
