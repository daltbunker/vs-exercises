import './css/App.css';
import React, { useState } from 'react'
import Square from './components/Square';
import Button from './components/Button';

function App() {
 
  const [colors, setColors] = useState(['black', 'white', 'black', 'black'])

  function smallTimeEvent() {
    setColors(prevColors => {
      return prevColors.map(() => prevColors[0] === 'white' ? 'black' : 'white')
    })
  }

  function partyEvent() {
    setColors(prevColors => ['purple', 'purple', ...prevColors.slice(2, )])
  }

  function blueEvent(index) {
    setColors(prevColors => {
      prevColors[index] = 'blue'
      return [...prevColors]
    })
  }

  function bigDjEvent(index) {
    const bigDjColors = ['yellow', 'orange', 'pink', 'teal']
    setColors(prevColors => {
      prevColors[index] = bigDjColors[index]
      return [...prevColors]
    })
  }


  const Squares = [], bigDjButtons = []
  for (let i = 0; i < 4; i++) {
    Squares.push(<Square color={colors[i]} key={i + 101}/>)
    bigDjButtons.push(<Button onClick={() => bigDjEvent(i)} text={`Big DJ (${i + 1})`} key={i + 2} />)
  }

  const audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3')

  return (
    <div className='App'>
      <div className='Squares'>
        {Squares}
      </div>
      <div className='Buttons'>
        <h1 className='title'>REACT DJ</h1>
        <Button onClick={smallTimeEvent} text='Small Time' />
        <Button onClick={partyEvent} text='Party' />
        <Button onClick={() => blueEvent(2)} text='Left Blue' />
        <Button onClick={() => blueEvent(3)} text='Right Blue' />
        {bigDjButtons}
        <Button text='Play Audio' onClick={() => audio.play()} />
      </div>
    </div>
  );
}

export default App;
