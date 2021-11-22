import '../css/Navbar.css'
import React from 'react'

function Navbar() {
    
    function toggleMenu() {
        const navItems = document.querySelector('.nav-items')
        if (navItems.style.display === 'flex') {
            navItems.style.display = 'none'
        } else {
            navItems.style.display = 'flex'
        }
    }

    return (
        <div className="nav-bar">
            <h3 className='nav-title'>Start Bootstrap</h3>
            <button className='menu-btn' onClick={toggleMenu}>MENU &#8801;</button>
            <div className="nav-items">
                <div className="nav-link">HOME</div>
                <div className="nav-link">ABOUT</div>
                <div className="nav-link">SAMPLE POST</div>
                <div className="nav-link">CONTACT</div>
            </div>
        </div>
    )
}

export default Navbar
