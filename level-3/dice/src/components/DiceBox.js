import React, { Component} from 'react'
import Die from './Die'
import Button from './Button'
import '../styles/DiceBox.css'

export default class Dicebox extends Component {

    constructor() {
        super()
        this.state = {
            dice: [
                0,
                0,
                0,
                0,
                0
            ],
            selectedDice: [
                false,
                false,
                false,
                false,
                false
            ],
            rollCount: 0
        }
        this.rollDice = this.rollDice.bind(this)
        this.selectedEvent = this.selectedEvent.bind(this)
    }

    rollDice() {
        this.setState(prevState => {
            if (prevState.rollCount >= 3) {
                return {
                    dice: [0, 0, 0, 0, 0],
                    selectedDice: [false, false, false, false, false],
                    rollCount: 0
                }
            }
            for (let i = 0; i < 5; i++) {
                if (!prevState.selectedDice[i]) {
                    prevState.dice.splice(i, 1, Math.floor(Math.random() * 6 + 1))
                }
            }
            return {
                dice: prevState.dice,
                rollCount: prevState.rollCount + 1
            }
        })
    }

    selectedEvent(index) {
        this.setState(prevState => {
            return {
                selectedDice: prevState.selectedDice.map((selected, i) => i === index ? !selected : selected)
            }
        })
    }

    render() {
        const diceArr = this.state.dice.map((num, i) => {
            return <Die num={num} selected={this.state.selectedDice[i]} clickEvent={this.selectedEvent} index={i} key={i}/>
        })
        return (
        <div className='dice-box'>
            <div className="dice-container">
                {diceArr}
            </div>
            <Button text={this.state.rollCount >= 3 ? 'RESTART' : 'ROLL'} bkgColor='red' onClick={this.rollDice} />
        </div>
        )
    }
}
