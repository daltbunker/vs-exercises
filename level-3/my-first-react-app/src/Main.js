import React from 'react';
import Image from './Image'

const Main = (props) => {
    return (
        <div className="main-wrap">
            <div className="main-title">{props.title}</div>
            <div className="main-description">{props.description}</div>
            <Image image={props.image}/>
        </div>
    )
}

export default Main;
