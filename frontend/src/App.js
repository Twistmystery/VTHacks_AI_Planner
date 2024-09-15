import './App.css';
import Images from './components/images';
import TextInput from './components/TextInput';
import React from 'react';
import NavBar from './components/nav-bar.js';
import {useState} from 'react'
import ChatApp from './components/ChatApp.js';

function App(props, state) {
  const [wid, setWid] = useState('0%');
  const openSidenav = ( ) => {
    setWid('25%')
 }
 const closeSidenav = ( ) => {
  setWid('0%')
}
  return (
    <div className="App">
      <button onClick={openSidenav}>Open</button>
      <h1>Welcome, User, to ManAzure!</h1>
      <Images></Images>
      <div className='input-container'>
        <ChatApp /> 
      </div>
      
      <div>
      <NavBar width={wid} closeNav={closeSidenav} /> {/* Include the NavBar at the top */}
      {/* <div id="home">
        <h2>Home Section</h2>
        <p>Welcome to the home section of the website!</p>
      </div>
      <div id="about">
        <h2>About Us</h2>
        <p>Learn more about us here!</p>
      </div>
      <div id="services">
        <h2>Our Services</h2>
        <p>Check out the services we offer.</p>
      </div>
      <div id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us!</p>
      </div> */}
    </div>
      
    </div>
  );
}

export default App;
