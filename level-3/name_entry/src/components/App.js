import React from 'react'
import Form from './Form'
import RandomColor from './RandomColor'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            display: "none"
        }
    }

    toggleColors = () => {
        setTimeout(() => {
            this.setState(
                {
                    display: "block"
                }
            )
        }, 3000)
    }

    render() {
        this.toggleColors()
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>Name Entry</h1>
                <Form />
                <div style={{display: this.state.display}}>
                    <RandomColor />
                    <RandomColor />
                    <RandomColor />
                    <RandomColor />
                </div>
            </div>
        )
    }
}

export default App
