import React, {useContext} from 'react'
import './Cart.css'
import {ThemeContext} from '../ThemeProvider'

const darkStyles = {
    background: 'transparent',
    textColor: 'white',
}

const lightStyles = {
    background: 'white',
    textColor: 'black',
}

function Cart({data}) {

    const {theme} = useContext(ThemeContext)
    const currStyles = theme === "light" ? lightStyles : darkStyles

    return (
        <div className="Cart" style={{backgroundColor: currStyles.background}}>
            <div className="Cart-item" style={{color: currStyles.textColor}}>
                <div className="Cart-item-title">Depart:</div>
                <div className="Cart-item-content">{data.from}{' -> '}{data.to}</div>
                <div className="Cart-item-subcontent">{data.depart}</div>
            </div>
            <div className="Cart-item" style={{color: currStyles.textColor, display: data.direction === 'oneWay' ? 'none' : 'block'}}>
                <div className="Cart-item-title">Return:</div>
                <div className="Cart-item-content">{data.to + " -> " + data.from}</div>
                <div className="Cart-item-subcontent">{data.return}</div>
            </div>
        </div>
    )
}

export default Cart
