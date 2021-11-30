import React from 'react'
import Button from './Button'
import '../styles/BadgeForm.css'

class BadgeForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            favoriteFood: "",
            birthplace: "",
            about: ""
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        if (name === "phone" && (/[^0-9]/.test(value) || value.length > 10)) {
            return null
        } else {
            this.setState({ [name]: value})
        }
    }

    validateForm = () => {
        for (let key in this.state) {
            if (this.state[key].length < 3) {
                return key
            }
        }
        return false
    }

    clearState = () => {
        this.setState({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            favoriteFood: "",
            birthplace: "",
            about: ""
        })
    }

    render() {

        const inputArr = ["firstName", "lastName", "phone", "email", "favoriteFood", "birthplace"].map(inputName => {
            return (
                <label>
                    {inputName.slice(0, 1).toUpperCase() + inputName.slice(1,).replace(/([A-Z])/, " $1")}:
                    <input 
                        type="text"
                        style={this.validateForm() === inputName ? { border: "2px solid rgb(61, 197, 61)" } : null} 
                        onChange={this.handleChange} 
                        value={this.state[inputName]} 
                        name={inputName}
                    />
                </label>
            )
        })

        return (
            <div className='badge-form'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.handleSubmit(this.state)
                    this.clearState() 
                    
                }}>
                    <div className="input-fields">
                        {inputArr}
                        <label className="about">
                            About:
                            <textarea 
                                style={this.validateForm() === "about" ? { border: "2px solid rgb(61, 197, 61)" } : null} 
                                onChange={this.handleChange} 
                                value={this.state.about} 
                                name="about" 
                            />
                        </label>
                    </div>
                    <Button label="SUBMIT" buttonState={this.validateForm()}/>
                </form>
            </div>
        )
    }
}

export default BadgeForm
