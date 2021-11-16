import React from 'react'

const Heading = ({ title }) => {
    return (
        <div>
            <h1 style={{ 
                textAlign: 'center', color: '#000000', fontSize: 50, fontWeight: 800, padding: 9, 
                borderBottom: '3px solid #000000'
                }}>{title}</h1>
        </div>
    )
}

export default Heading;
