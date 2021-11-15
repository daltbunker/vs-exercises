import React from 'react';
import Image from './Image'

const Main = ({ title, endangered, description, image }) => {
    return (
        <div className="main-wrap">
            <div className="main-text">
                <div className="main-title">{title}</div>
                <div className="endangered">Status: { endangered ? "Endangered" : "Healthy Population "}</div>
                <div className="main-description">{description}</div>
            </div>
            <Image image={image}/>
        </div>
    )
}

export default Main;
