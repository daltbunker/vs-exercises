import React, { useState, useContext } from 'react'
import { IssuesContext } from '../../context/IssuesProvider';
import './Create.css'

export default function Create() {

    const defaultIssueInput = {title: "", description: ""}
    const [issueInput, setIssueInput] = useState(defaultIssueInput)
    const { createIssue } = useContext(IssuesContext)

    function handleInputChange(e) {
        const {name, value} = e.target;
        setIssueInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }   
        })
    }

    return (
        <div className="create-form">
            <form onSubmit={e => {
                e.preventDefault()
                createIssue(issueInput)
                setIssueInput(defaultIssueInput)
            }}>
                <div className="input-container">
                    <label htmlFor="">title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={issueInput.title} 
                        onChange={handleInputChange} 
                        required />
                </div>
                <div className="input-container">
                    <label htmlFor="">description:</label>
                    <textarea 
                        name="description" 
                        value={issueInput.description} 
                        onChange={handleInputChange} 
                        required />
                </div>
                <button className="primary-btn">SUBMIT</button>
            </form>
        </div>
    )
}
