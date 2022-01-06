import React from 'react'
import './BookingForm.css'
import checkImg from '../images/check.png'

function BookingForm({data, onFormChange}) {

    return (
        <div className="BookingForm">
            <form>
                <div className="input-container">
                    <div className="input-title">First Name:</div>
                    <input type="text" name="firstName" value={data.firstName} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: data.firstName.length > 0 ? 'block' : 'none' }}/>
                </div>
                <div className="input-container">
                    <div className="input-title">Last Name:</div>
                    <input type="text" name="lastName" value={data.lastName} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: data.lastName.length > 0 ? 'block' : 'none' }}/>
                </div>
                <div className="input-container radio">
                    <div className="input-title">One Way:</div>
                    <input type="radio" id="oneWay" name="direction" value="oneWay" onChange={onFormChange} />
                </div>
                <div className="input-container radio">
                    <div className="input-title">Round Trip:</div>
                    <input type="radio" id="roundTrip" name="direction" value="roundTrip" onChange={onFormChange} defaultChecked />
                </div>
                <div className="input-container">
                    <div className="input-title">From:</div>
                    <select name="from" onChange={onFormChange}>
                        <option value=""></option>
                        <option value="Portland">Portland, Oregon</option>
                        <option value="Los Angelas">Los Angelas, California</option>
                        <option value="Pheonix">Phoenix, Arizona</option>
                    </select>
                    <img src={checkImg} alt="" style={{display: data.from.length > 0 ? 'block' : 'none' }}/>
                </div>
                <div className="input-container">
                    <div className="input-title">To:</div>
                    <select name="to" onChange={onFormChange}>
                        <option value=""></option>
                        <option value="Portland">Portland, Oregon</option>
                        <option value="Los Angelas">Los Angelas, California</option>
                        <option value="Pheonix">Phoenix, Arizona</option>
                    </select>
                    <img src={checkImg} alt="" style={{display: data.to.length > 0 ? 'block' : 'none' }}/>
                </div>
                <div className="input-container">
                    <div className="input-title">Depart:</div>
                    <input type="date" name="depart" value={data.depart} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: data.depart.length > 0 ? 'block' : 'none'}}/>
                </div>
                <div className="input-container" style={{display: data.direction === 'oneWay' ? 'none' : 'flex'}}>
                    <div className="input-title">Return:</div>
                    <input type="date" name="return" value={data.return} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: data.return.length > 0 ? 'block' : 'none'}}/>
                </div>
            </form>
        </div>
    )
}

export default BookingForm
