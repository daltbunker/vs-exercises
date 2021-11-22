import '../styles/Die.css'
import React from 'react'

function Die({ num, selected, clickEvent, index }) {
    return (
        <div className='die' onClick={() => clickEvent(index)} style={{ backgroundColor: selected ? 'rgba(128, 128, 128, 0.462)' : 'white' }}>{ num }</div>
    )
}

export default Die
