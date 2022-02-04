import React, {useState} from 'react';
import axios from "axios"

function DestinationForm({addDestination, setModal, submitText="SUBMIT", defaultInput, onSubmit}) {

    const [input, setInput] = useState(() => {
        if (defaultInput) {
            return {
                ...defaultInput
            }
        }
        return {
            country: "",
            cost: "",
            season: "spring",
        }
    })

    function onChange(e) {
        const {name, value} = e.target

        setInput(prevInput => {
            return {...prevInput, [name]: value}
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("/destinations", input)
            .then(resp => {
                addDestination(prevData => [...prevData, resp.data])
                setModal(false)
            })
    }
    
    return (
        <form onSubmit={onSubmit ? onSubmit : (e) => handleSubmit(e)} style={{display: "flex", fontSize: 19, flexDirection: "column"}}>
            Country:
            <input type="text" name="country" value={input.country} onChange={(e) => onChange(e)} />
            Cost:
            <input type="text" name="cost" value={input.cost} onChange={(e) => onChange(e)} />
            Season: 
            <select name="season" value={input.season} onChange={(e) => onChange(e)}>
                <option value="spring">spring</option>
                <option value="summer">summer</option>
                <option value="fall">fall</option>
                <option value="winter">winter</option>
            </select>
            <button style={{backgroundColor: "green", color: "white", borderRadius: 4, margin: 10}}>{submitText}</button>
        </form>
    
    )   
}

export default DestinationForm;
