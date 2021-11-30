import React from 'react'
import '../styles/Button.css'

function Button({ label, buttonState }) {
    return (
        <button disabled={buttonState} style={buttonState ? {opacity: "60%"} : {opacity: "100%"}} className="button">{label}</button>
    )
}

export default Button
