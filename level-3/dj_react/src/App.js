import './css/App.css';
import React, { Component } from 'react'
import Square from './components/Square';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colors: ['black', 'white', 'black', 'black']
    }
    this.smallTimeEvent = this.smallTimeEvent.bind(this)
    this.partyEvent = this.partyEvent.bind(this)
    this.blueEvent = this.blueEvent.bind(this)
    this.bigDjEvent = this.bigDjEvent.bind(this)
  }

  smallTimeEvent() {
    this.setState((prevState) => {
      return {
        colors: prevState.colors.map(() => prevState.colors[0] === 'white' ? 'black' : 'white')
      }
    })
  }

  partyEvent() {
    this.setState((prevState) => {
      return {
        colors: ['purple', 'purple', ...prevState.colors.slice(2, )]
      }
    })
  }

  blueEvent(index) {
    this.setState((prevState) => {
      prevState.colors[index] = 'blue'
      return {
        colors: prevState.colors
      }
    })
  }

  bigDjEvent(index) {
    const bigDjColors = ['yellow', 'orange', 'pink', 'teal']
    this.setState((prevState) => {
      prevState.colors[index] = bigDjColors[index]
      return {
        colors: prevState.colors
      }
    })
  }


  render() {
    const Squares = [], bigDjButtons = []
    for (let i = 0; i < 4; i++) {
      Squares.push(<Square color={this.state.colors[i]} key={i + 101}/>)
      bigDjButtons.push(<Button onClick={() => this.bigDjEvent(i)} text={`Big DJ (${i + 1})`} key={i + 2} />)
    }

    const audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3')

    return (
      <div className='App'>
        <div className='Squares'>
          {Squares}
        </div>
        <div className='Buttons'>
          <h1 className='title'>REACT DJ</h1>
          <Button onClick={this.smallTimeEvent} text='Small Time' />
          <Button onClick={this.partyEvent} text='Party' />
          <Button onClick={() => this.blueEvent(2)} text='Left Blue' />
          <Button onClick={() => this.blueEvent(3)} text='Right Blue' />
          {bigDjButtons}
          <Button text='Play Audio' onClick={() => audio.play()} />
        </div>
      </div>
    );
  }
}

export default App;
