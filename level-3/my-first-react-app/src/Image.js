import React from 'react'

const Image = (props) => {
    return (
        <img style={{ height: 200, position: "relative", top: -100}} src={props.image} alt="main-img"/>
    )
}

export default Image;