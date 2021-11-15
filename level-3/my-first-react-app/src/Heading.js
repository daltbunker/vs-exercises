import React from 'react'

const Heading = ({ title }) => {
    return (
        <div>
            <h1 style={{ 
                textAlign: 'center', color: 'rgba(0, 0, 0, 0.719)', fontSize: 50, fontWeight: 800, padding: 9, 
                backgroundColor: "#ffffff8c", borderRadius: 4
                }}>{title}</h1>
        </div>
    )
}

export default Heading;
