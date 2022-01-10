import React, {useState, useContext, useEffect} from 'react'
import './Form.css'
import {UglyThingsContext} from './UglyThingsContext'

function Form() {

    const {addThing, editThing, editMode} = useContext(UglyThingsContext)

    const [formInput, setFormInput] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    useEffect(() => {
        return editMode[0] ? setFormInput(editMode[1]) : null
    }, [editMode])

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormInput(prevFormInput => {
            return {
                ...prevFormInput,
                [name]: value
            }
        })
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
            }}>
                <div className="input-fields">
                    {inputFieldArray}
                </div>
                <button id="create-btn">{editMode[0] ? "SAVE" : "ADD"}</button>
            </form>
        </div>
    )
}

export default Form