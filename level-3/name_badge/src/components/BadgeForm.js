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
        this.setState({ [name]: value})
    }

    validateForm = () => {
        for (let key in this.state) {
            if (this.state[key].length < 3) {
                return true
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
                            <input type="text" onChange={this.handleChange} value={this.state.firstName} name="firstName"/>
                        </label>
                        <label>
                            Last Name:
                            <input type="text" onChange={this.handleChange} value={this.state.lastName} name="lastName" />
                        </label>
                        <label>
                            Phone:
                            <input type="text" onChange={this.handleChange} value={this.state.phone} name="phone" />
                        </label>
                        <label>
                            Email:
                            <input type="text" onChange={this.handleChange} value={this.state.email} name="email" />
                        </label>
                        <label>
                            Birthplace:
                            <input type="text" onChange={this.handleChange} value={this.state.birthplace} name="birthplace" />
                        </label>
                        <label>
                            Favorite Food:
                            <input type="text" onChange={this.handleChange} value={this.state.favoriteFood} name="favoriteFood" />
                        </label>
                        <label className="about">
                            About:
                            <textarea onChange={this.handleChange} value={this.state.about} name="about" />
                        </label>
                    </div>
                    <Button label="SUBMIT"/>
                </form>
            </div>
        )
    }
}

export default BadgeForm
