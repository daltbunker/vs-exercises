import React, {useState} from 'react';
import axios from "axios"

function DestinationForm({addDestination, setModal}) {

    const [input, setInput] = useState({country: "", cost: "", season: ""})

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
        <form onSubmit={(e) => handleSubmit(e)} style={{display: "flex", flexDirection: "column"}}>
            Country:
            <input type="text" name="country" value={input.country} onChange={(e) => onChange(e)} />
            Cost:
            <input type="text" name="cost" value={input.cost} onChange={(e) => onChange(e)} />
            Season: 
            <select name="season" value={input.season} onChange={(e) => onChange(e)}>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
            </select>
            <button>SUBMIT</button>
        </form>
    
    )   
}

export default DestinationForm;
