import React from 'react'

function HitComponent({ image, name }) {
    return (
        <div className='HitComponent' style={{ backgroundImage: `url(${image})`}}>
            <div className='HitName'>{name}</div>
        </div>
    )
}

export default HitComponent
