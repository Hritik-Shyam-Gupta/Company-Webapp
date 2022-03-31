import React from 'react';
import Navbar from "./Navbar";

function Header() {
  return (
    <div id='main'>
        <Navbar />
        <div className='name'>
            <h1><span>Make Home Smart</span> with Devices made for You</h1>
            <p className='details'>App Land provies you with apps integrations for your smart devices so, you can transition to <span>Smart Land</span></p>
            <a href="#" className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header;