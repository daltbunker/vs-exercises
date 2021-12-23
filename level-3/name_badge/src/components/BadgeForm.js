import React, {useState} from 'react'
import Button from './Button'
import '../styles/BadgeForm.css'

function BadgeForm(props) {

    const [ formInput, setFormInput ] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        favoriteFood: "",
        birthplace: "",
        about: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        if (name === "phone" && (/[^0-9]/.test(value) || value.length > 10)) {
            return null
        } else {
            setFormInput(prevFormInput => ({...prevFormInput, [name]: value}))
        }
    }

    const clearState = () => {
        setFormInput({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            favoriteFood: "",
            birthplace: "",
            about: "",
        })
    }


    const inputArr = ["firstName", "lastName", "phone", "email", "favoriteFood", "birthplace"].map((inputName, i) => {
        return (
            <label key={i}>
                {inputName.slice(0, 1).toUpperCase() + inputName.slice(1,).replace(/([A-Z])/, " $1")}:
                <input 
                    type="text"
                    onChange={handleChange} 
                    value={formInput[inputName]} 
                    name={inputName}
                    required
                />
            </label>
        )
    })

    return (
        <div className='badge-form'>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.handleSubmit(formInput)
                clearState() 
                
            }}>
                <div className="input-fields">
                    {inputArr}
                    <label className="about">
                        About:
                        <textarea 
                            onChange={handleChange} 
                            value={formInput.about} 
                            name="about" 
                            required
                        />
                    </label>
                </div>
                <Button label="SUBMIT"/>
            </form>
        </div>
    )
}

export default BadgeForm
