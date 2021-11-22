import '../styles/Button.css'
import React from 'react'

function Button({ text, bkgColor, onClick }) {
    return (
        <button onClick={onClick} className='button' style={{ backgroundColor: bkgColor }}>{ text }</button>
    )
}

export default Button
