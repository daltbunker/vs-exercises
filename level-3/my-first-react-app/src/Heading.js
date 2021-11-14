import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'white', fontSize: 50}}>{props.title}</h1>
        </div>
    )
}

export default Heading;
