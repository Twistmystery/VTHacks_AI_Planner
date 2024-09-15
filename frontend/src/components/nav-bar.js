import React from 'react';
import '../index.css'; 

const NavBar = (props) => {
  return (
    <nav className="navbar" style={{width: props.width}}>
      <button class="closeButton" onClick={props.closeNav}>X</button>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;