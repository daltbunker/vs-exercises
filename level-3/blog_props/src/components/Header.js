import '../css/Header.css'
import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div className="header-wrap">
            <Navbar />
            <div className="header-body">
                <div className="header-title">Clean Blog</div>
                <div className="header-subtitle">A Blog Theme by Start Bootstrap</div>
            </div>
        </div>
    )
}

export default Header

                    