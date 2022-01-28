import React, {useState, useContext, useEffect} from 'react'
import './Form.css'
import {UglyThingsContext} from './UglyThingsContext'

function Form(props) {

    const {addThing, editThing, editMode} = useContext(UglyThingsContext)
    const blankFormInput = {
        title: "",
        description: "",
        imgUrl: ""
    }

    const [formInput, setFormInput] = useState(blankFormInput)

    useEffect(() => {
        if (editMode[0]) {
            setFormInput(editMode[1])
        }
    }, [editMode])

    function handleInputChange(e) {
        const {name, value} = e.target
        setFormInput(prevFormInput => {
            return {
                ...prevFormInput,
                [name]: value
            }
        })
    }

    function clearForm() {
        setFormInput(blankFormInput)
    }

    const inputFieldArray = ["title", "description", "imgUrl"].map(val => {
        const display = formInput[val].length > 0 ? "visible" : "hidden"
        return (
            <div className="input-field" key={val.length}>
                <label style={{visibility: display}}>
                    {val === "imgUrl" ? "image url" : val}
                </label>
                <input 
                    onChange={handleInputChange} 
                    type="text" 
                    name={val} 
                    value={formInput[val]} 
                    placeholder={val === "imgUrl" ? "image url" : val} 
                    required
                />
            </div>
        )
    })

    return (
        <div className="form-container">
            <form onSubmit={(e) => {
                e.preventDefault()
                editMode[0] ? editThing(formInput, editMode[1].id) : addThing(formInput)
                clearForm()
            }}>
                <div className="input-fields" style={{flexDirection: props.flexDirection}}>
                    {inputFieldArray}
                </div>
                <button id="create-btn">{editMode[0] ? "SAVE" : props.buttonText}</button>
            </form>
        </div>
    )
}

Form.defaultProps = {
    flexDirection: "row",
    buttonText: "ADD"
}

export default Form
