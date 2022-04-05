import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const AuthContext = React.createContext();

export default function AuthProvider(props) {

    const navigate = useNavigate();
    const [authState, setAuthState] = useState({
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || ""
    });
    const [errMessage, setErrMessage] = useState("")

    function clearErrMessage() {
        setErrMessage("")
    }

    function login(userInput, newUser) {
        if (newUser) {
            axios.post("/auth/signup", userInput)
                .then(resp => {
                    const {user, token} = resp.data
                    localStorage.setItem("token", token)
                    localStorage.setItem("user", JSON.stringify(user))
                    setAuthState(() => {
                        return {user, token}
                    })
                    navigate("/home")
                })
                .catch(err => setErrMessage(err.response.data.message))
        } else {
            axios.post("/auth/login", userInput)
                .then(resp => {
                    const {user, token} = resp.data
                    localStorage.setItem("token", token)
                    localStorage.setItem("user", JSON.stringify(user))
                    setAuthState(() => {
                        return {user, token}
                    })
                    navigate("/home")
                })
                .catch(err => setErrMessage(err.response.data.message))
        }
    }

    function logout() {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setAuthState({
            user: {},
            token: ""
        })
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{login, logout, authState, errObj: {errMessage, clearErrMessage}}}>
            {props.children}
        </AuthContext.Provider>
    )
}