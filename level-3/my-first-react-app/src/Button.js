import React from 'react'

function Button({ label }) {
    return (
        <div style={{ border: '2px solid white',  padding: 2, borderRadius: 30}}>
            <button style={{ backgroundColor: '#ffffffbc', padding: 12, color: 'black', border: "none", fontWeight: 800,  borderRadius: 30}}>
                {label}
            </button>
        </div>
    )
}

export default Button
