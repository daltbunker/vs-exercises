import React from 'react'
import Button from './Button';

function DjBoard({clickEvents}) {

    const [smallTimeEvent, partyEvent, blueEvent, bigDjEvent] = clickEvents
    const audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3')

    const bigDjButtons = [1, 2, 3, 4].map((num) => {
        return <Button onClick={() => bigDjEvent(num - 1)} text={`Big DJ (${num})`} key={num} />
    })
    
    return (
        <>
            <Button onClick={smallTimeEvent} text='Small Time' />
            <Button onClick={partyEvent} text='Party' />
            <Button onClick={() => blueEvent(2)} text='Left Blue' />
            <Button onClick={() => blueEvent(3)} text='Right Blue' />
            {bigDjButtons}
            <Button text='Play Audio' onClick={() => audio.play()} />
        </>
    )
}

export default DjBoard
