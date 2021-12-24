import React, {useState} from 'react'
import '../styles/BadgeForm.css'

const defaultInput = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    favoriteFood: "",
    birthplace: "",
    about: "",
}

function BadgeForm({handleSubmit}) {

    const [ formInput, setFormInput ] = useState({
        ...defaultInput
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
            ...defaultInput
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
                handleSubmit(formInput)
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
                <button className="submit-button">SUBMIT</button>
            </form>
        </div>
    )
}

export default BadgeForm
