import React, { useState } from 'react';

const defaultInputData = {
    firstName: "",
    lastName: "",
    living: true,
    bountyAmount: 0,
    type: "sith"
}

function BountyForm({ onSubmit, buttonText="SUBMIT", inputData=defaultInputData, setForm=null}) {
    const [input, setInput] = useState(inputData)

    function handleInputChange(e) {
        const {name, value} = e.target
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value === "true" ? true : value === "false" ? false : value
            }
        })
    }

    return (
        <form className="BountyForm" onSubmit={e => {
            onSubmit(e, input)
            if (setForm) {setForm()}
            }}>
            <div className="input-container">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" value={input.firstName} name="firstName" onChange={e => handleInputChange(e)} />
            </div>
            <div className="input-container">
                <label htmlFor="last">Last Name: </label>
                <input type="text" value={input.lastName} name="lastName" onChange={e => handleInputChange(e)} />
            </div>
            <div className="input-container">
                <label htmlFor="living">Living: </label>
                <input type="radio" checked={input.living} value="true" name="living" onChange={e => handleInputChange(e)} />
                true
                <input type="radio" checked={!input.living} value="false" name="living" onChange={e => handleInputChange(e)} />
                false
            </div>
            <div className="input-container">
                <label htmlFor="bountyAmount">Price: </label>
                <input type="number" value={input.bountyAmount} name="bountyAmount" onChange={e => handleInputChange(e)} />
            </div>
            <div className="input-container">
                <label htmlFor="type">Type: </label>
                <select name="type" value={input.type} onChange={e => handleInputChange(e)}>
                    <option>sith</option>
                    <option>jedi</option>
                </select>
            </div>
            <button style={{marginLeft: 15}}>{buttonText}</button>
        </form>
    )
}

export default BountyForm;
