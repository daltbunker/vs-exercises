import React from 'react'

function Button({ text, bkgColor }) {
    return (
        <button style={{ 
            color: "white",
            backgroundColor: bkgColor,
            border: "none",
            padding: 10,
            width: 70,
            borderRadius: 4 }}
         >{text}</button>
    )
}

export default Button
