import React, {useContext} from 'react'
import './Navbar.css'
import {ThemeContext} from '../ThemeProvider'

const darkStyles = {
    background: '#5c96ec',
    textColor: 'black',
}

const lightStyles = {
    background: 'white',
    textColor: '#5c96ec',
}

function Navbar() {

    const {theme, toggleTheme} = useContext(ThemeContext)
    const currStyles = theme === "light" ? lightStyles : darkStyles

    return (
        <div className="Navbar" style={{backgroundColor: currStyles.background}}>
            <button>HOME</button>
            <button onClick={toggleTheme} >CHANGE THEME</button>
            <button></button>
        </div>
    )
}

export default Navbar
