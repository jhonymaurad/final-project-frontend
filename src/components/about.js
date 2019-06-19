import React from 'react';
import '../css/about.css';
import Logo from  '../assets/logo.png';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';


export default () => (
  <div className='welcome-container'>
    <img src={Logo} alt='logo'></img>
    <h1 className='title'>About us</h1>
    <h2 className='second-line'>We're Pet Lovers Trying to Make a Difference</h2>
    <img className='aboutImg' src={about1} alt='image 1'></img>
    <p className='welcome-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <img className='aboutImg' src={about2} alt='logo'></img>
  </div>
);