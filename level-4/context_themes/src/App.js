import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import BookingForm from './components/BookingForm'
import Cart from './components/Cart'

function App() {

  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    roundtrip: "",
    from: "",
    to: "",
    depart: "",
    return: ""
  })

  function handleFormChange(e) {
    const {name, value} = e.target
    setBookingData(prevBookingData => {
        return {
            ...prevBookingData,
            [name]: value
        }
    })
}

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Cart data={bookingData}/>
        <BookingForm data={bookingData} onFormChange={handleFormChange}/>
      </div>
    </div>
  );
}

export default App;
