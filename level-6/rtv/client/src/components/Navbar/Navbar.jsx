import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import './Navbar.css'

export default function Navbar() {

    const { authState, logout } = useContext(AuthContext)
    const loggedIn = authState.token && authState.user.username;

    return (
        <nav className="navbar" style={{display: loggedIn ? "flex": "none"}}>
            <div className="nav-links">
                <NavLink 
                    className="nav-link" 
                    style={({ isActive }) => {
                        return {
                            borderBottom: isActive && "3px solid rgb(235, 86, 86)"
                        }
                    }} 
                    to="/home"
                >
                    HOME
                </NavLink>
                <NavLink 
                    className="nav-link" 
                    style={({ isActive }) => {
                        return {
                            borderBottom: isActive && "3px solid rgb(235, 86, 86)"
                        }
                    }} 
                    to="/profile"
                >
                    PROFILE
                </NavLink>
                <NavLink 
                    className="nav-link" 
                    style={({ isActive }) => {
                        return {
                            borderBottom: isActive && "3px solid rgb(235, 86, 86)"
                        }
                    }} 
                    to="/create"
                >
                    CREATE
                </NavLink>
            </div>
            <h1>RTV</h1>
            <div className="nav-user">
                <span>Welcome, {authState.user.username}</span>
                <button onClick={logout} className="primary-btn">logout</button>
            </div>
        </nav>
    )
}
