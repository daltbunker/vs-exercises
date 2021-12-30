import React, {useState} from 'react'
import './BookingForm.css'
import checkImg from '../images/check.png'

function BookingForm() {

    const [formInput, setFormInput] = useState({
        firstName: "",
        lastName: "",
        direction: "",
        from: "",
        to: "",
        departure: "",
        return: ""
    })

    function onFormChange(e) {
        const {name, value} = e.target
        setFormInput(prevFormInput => {
            return {
                ...prevFormInput,
                [name]: value
            }
        })
    }

    return (
        <div className="BookingForm">
            <form>
                <div className="input-container">
                    <div className="input-title">First Name:</div>
                    <input type="text" name="firstName" value={formInput.firstName} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: formInput.firstName.length > 0 ? 'block' : 'none' }}/>
                </div>
                <div className="input-container">
                    <div className="input-title">Last Name:</div>
                    <input type="text" name="lastName" value={formInput.lastName} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: formInput.lastName.length > 0 ? 'block' : 'none' }}/>
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
                    <input type="date" name="from" value={formInput.from} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: formInput.from.length > 0 ? 'block' : 'none'}}/>
                </div>
                <div className="input-container" style={{display: formInput.direction === 'oneWay' ? 'none' : 'flex'}}>
                    <div className="input-title">To:</div>
                    <input type="date" name="to" value={formInput.to} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: formInput.to.length > 0 ? 'block' : 'none'}}/>
                </div>
                <div className="input-container">
                    <div className="input-title">Departure:</div>
                    <input type="text" name="departure" value={formInput.departure} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: formInput.departure.length > 0 ? 'block' : 'none' }}/>
                </div>
                <div className="input-container" style={{display: formInput.direction === 'oneWay' ? 'none' : 'flex'}}>
                    <div className="input-title">Return:</div>
                    <input type="text" name="return" value={formInput.return} onChange={onFormChange} />
                    <img src={checkImg} alt="" style={{display: formInput.departure.length > 0 ? 'block' : 'none' }}/>
                </div>
            </form>
        </div>
    )
}

export default BookingForm
