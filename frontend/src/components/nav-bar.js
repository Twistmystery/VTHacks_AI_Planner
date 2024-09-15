import React from 'react';
import '../index.css'; 

const NavBar = (props) => {
  return (
    
    <nav className="navbar" style={{width: props.width}}>
      <button class="close-button" onClick={props.closeNav}> 
        X
      </button>
      <ul>
        <li><a href="#home">See Schedule</a></li>
        <li><a href="#about">Add New Class</a></li>
        
      </ul>
    </nav>
  );
};

export default NavBar;