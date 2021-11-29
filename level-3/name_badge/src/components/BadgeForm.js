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
            return
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
        return (
            <div className='badge-form'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const validate = this.validateForm();
                    if (validate) {
                        alert(`All fields must have at least 3 characters`)
                    } else {
                        this.props.handleSubmit(this.state)
                        this.clearState() 
                    }
                }}>
                    <div className="input-fields">
                        <label>
                            First Name:
                            <input type="text" style={this.validateForm() === "firstName" ? { border: "2px solid green" } : { border: "none" }} onChange={this.handleChange} value={this.state.firstName} name="firstName"/>
                        </label>
                        <label>
                            Last Name:
                            <input type="text" style={this.validateForm() === "lastName" ? { border: "2px solid green" } : { border: "none" }} onChange={this.handleChange} value={this.state.lastName} name="lastName" />
                        </label>
                        <label>
                            Phone:
                            <input type="text" style={this.validateForm() === "phone" ? { border: "2px solid green" } : { border: "none" }} onChange={this.handleChange} value={this.state.phone} name="phone" />
                        </label>
                        <label>
                            Email:
                            <input type="text" style={this.validateForm() === "email" ? { border: "2px solid green" } : { border: "none" }} onChange={this.handleChange} value={this.state.email} name="email" />
                        </label>
                        <label>
                            Favorite Food:
                            <input type="text" style={this.validateForm() === "favoriteFood" ? { border: "2px solid green" } : { border: "none" }} onChange={this.handleChange} value={this.state.favoriteFood} name="favoriteFood" />
                        </label>
                        <label>
                            Birthplace:
                            <input type="text" style={this.validateForm() === "birthplace" ? { border: "2px solid green" } : { border: "none" }} onChange={this.handleChange} value={this.state.birthplace} name="birthplace" />
                        </label>
                        <label className="about">
                            About:
                            <textarea style={this.validateForm() === "about" ? { border: "2px solid green" } : { border: "none" }} onChange={this.handleChange} value={this.state.about} name="about" />
                        </label>
                    </div>
                    <Button label="SUBMIT"/>
                </form>
            </div>
        )
    }
}

export default BadgeForm
