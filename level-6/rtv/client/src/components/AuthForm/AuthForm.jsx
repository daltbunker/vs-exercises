import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import './AuthForm.css'

export default function AuthForm() {

    const { login, errObj } = useContext(AuthContext)
    const defaultLoginState = {username: "", password: ""}
    const [loginInput, setLoginInput] = useState(defaultLoginState)
    const [newUser, setNewUser] = useState(false)

    function handleInputChange(e) {
        errObj.clearErrMessage()
        const {name, value} = e.target;
        setLoginInput(prevLoginInput => {
            return {
                ...prevLoginInput,
                [name]: value
            }   
        })
    }

    return (
        <div className="form-container">
            <div className="tab-btns">
                <button 
                    type="button" 
                    className='tab-btn' 
                    style={newUser ? primaryTab : secondaryTab} 
                    onClick={() => {
                        setNewUser(true)
                        errObj.clearErrMessage()
                    }}
                >
                    Sign Up
                </button>
                <button 
                    type="button" 
                    className='tab-btn' 
                    style={!newUser ? primaryTab : secondaryTab} 
                    onClick={() => {
                        setNewUser(false)
                        errObj.clearErrMessage()
                    }}
                >
                    Log In
                </button>
            </div>
            <form 
                onSubmit={(e) => {
                    e.preventDefault()
                    login(loginInput, newUser)
                }} 
                className="login-form"
            >
                <div 
                    className="form-err-message" 
                    style={{visibility: errObj.errMessage.length > 0 ? "visible" : "hidden"}}
                >
                    &#9888; {errObj.errMessage}
                </div>
                <div className="input-container">
                    <label htmlFor="">username:</label>
                    <input type="text" name="username" value={loginInput.username} onChange={handleInputChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="">password:</label>
                    <input type="password" name="password" value={loginInput.password} onChange={handleInputChange} />
                </div>
                <button className="primary-btn">{newUser ? "sign up" : " log in"}</button>
            </form>
        </div>
    )
}

const primaryTab = {
    backgroundColor: "rgb(235, 86, 86)",
    color: "rgba(236, 236, 236)"
}

const secondaryTab = {
    backgroundColor: "rgb(175, 21, 21)",
    color: "rgba(236, 236, 236, .5)"
}