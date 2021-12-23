import React, { useState } from 'react'
import Square from './components/Square';
import DjBoard from './components/DjBoard';
import './App.css';

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

  const Squares = colors.map((color, i) => <Square color={color} key={i}/>)

  return (
    <div className='App'>
      <div className='Squares'>
        {Squares}
      </div>
      <div className='DjBoard'>
        <h1 className='title'>REACT DJ</h1>
        <DjBoard clickEvents={[smallTimeEvent, partyEvent, blueEvent, bigDjEvent]} />
      </div>
    </div>
  );
}

export default App;
