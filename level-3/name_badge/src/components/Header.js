import React from 'react'
import '../styles/Header.css'

function Header({ text }) {
    return (
        <div className="header">
            <h2>{text}</h2>
        </div>
    )
}

export default Header
