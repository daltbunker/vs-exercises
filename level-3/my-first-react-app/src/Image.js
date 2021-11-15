import React from 'react'

const Image = (props) => {
    return (
        <img style={{ height: 200, position: "absolute", top: -17, left: 10}} src={props.image} alt="main-img"/>
    )
}

export default Image;