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
            about: "",
            validKey: true
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        if (name === "phone" && (/[^0-9]/.test(value) || value.length > 10)) {
            return null
        } else {
            this.setState({[name]: value})
            this.validateForm()
        }
    }

    validateForm = () => {
        for (let key in this.state) {
            if (this.state[key].length < 3) {
                this.setState({validKey: key})
                return null
            }
        }
        this.setState({validKey: false})
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
        const inputArr = ["firstName", "lastName", "phone", "email", "favoriteFood", "birthplace"].map((inputName, i) => {
            return (
                <label key={i}>
                    {inputName.slice(0, 1).toUpperCase() + inputName.slice(1,).replace(/([A-Z])/, " $1")}:
                    <input 
                        type="text"
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
                                onChange={this.handleChange} 
                                value={this.state.about} 
                                name="about" 
                            />
                        </label>
                    </div>
                    <Button label="SUBMIT" buttonState={this.state.validKey}/>
                </form>
            </div>
        )
    }
}

export default BadgeForm
