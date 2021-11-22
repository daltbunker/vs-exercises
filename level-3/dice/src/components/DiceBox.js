import React, { Component} from 'react'
import Die from './Die'
import Button from './Button'
import '../styles/DiceBox.css'

export default class Dicebox extends Component {

    constructor() {
        super()
        this.state = {
            dice: [
                1,
                2,
                3,
                4,
                5
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
        const diceArr = []
        for (let i = 0; i < 5; i++) {
            diceArr.push(Math.floor(Math.random() * 6 + 1))
        }
        this.setState(() => {
            return {
                dice: diceArr
            }
        })
    }

    selectedEvent(num) {
       console.log(num)
    }

    render() {
        const diceArr = this.state.dice.map((num, i) => {
            return <Die num={num} selected={this.state.selectedDice[i]} onClick={this.selectedEvent} key={i}/>
        })
        return (
        <div className='dice-box'>
            <div className="dice-container">
                {diceArr}
            </div>
            <Button text='RESET' bkgColor='red' onClick={this.rollDice} />
        </div>
        )
    }
}
