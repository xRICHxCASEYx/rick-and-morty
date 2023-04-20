import React from 'react'
import './Header.css'
import About from '../../Pages/About/About';

function Header() {
  return (
     <div className="header-container">
        <div>
        <a href='/' style={{marginRight:"10px"}}>Home</a>
            <a href='/About' style={{marginRight:"10px"}}>About</a>
            <a href='/Episodes'>Episodes</a>
        </div>
        <button className='theme-button'>Dark Mode</button>
    </div>
  )
}

export default Header


