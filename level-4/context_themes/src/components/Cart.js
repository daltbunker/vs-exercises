import React from 'react'
import './Cart.css'

function Cart() {
    return (
        <div className="Cart">
            <div className="Cart-item">
                <div className="Cart-item-title">Price:</div>
                <div className="Cart-item-content">$35</div>
            </div>
            <div className="Cart-item">
                <div className="Cart-item-title">From:</div>
                <div className="Cart-item-content">San Diego, California</div>
            </div>
            <div className="Cart-item">
                <div className="Cart-item-title">Departing:</div>
                <div className="Cart-item-content">June 3, 2022</div>
            </div>
            <div className="Cart-item">
                <div className="Cart-item-title">To:</div>
                <div className="Cart-item-content">Phoenix, Arizona</div>
            </div>
            <div className="Cart-item">
                <div className="Cart-item-title">Price:</div>
                <div className="Cart-item-content">June 4, 2022</div>
            </div>
        </div>
    )
}

export default Cart
