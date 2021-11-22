import '../styles/Die.css'
import React from 'react'

function Die({ num, selected, clickEvent }) {
    return (
        <div className='die' onClick={clickEvent} style={{ backgroundColor: selected ? 'rgba(128, 128, 128, 0.462)' : 'none' }}>{ num }</div>
    )
}

export default Die
