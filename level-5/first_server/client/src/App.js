import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Destination from './components/Destination';
import DestinationForm from './components/DestinationForm';
import Modal from './components/Modal';

function App() {

  const [destinations, setDestinations] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get("/destinations")
      .then(resp => setDestinations(resp.data))
      .catch(error => {
        console.log(error)
    })

  }, [])

  return (
    <div className="App" style={{margin: 20}}>
      <h2 style={{display: "inline", margin: 0}}>Destinations</h2>
      <button onClick={() => setIsOpen(true)} style={{backgroundColor: "green", color: "white", borderRadius: 4, margin: 10, padding: "5px 10px"}}>ADD</button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DestinationForm addDestination={setDestinations} setModal={setIsOpen} />
      </Modal>
      {destinations.map(destination => {
        return <Destination key={destination._id} data={destination} />
      })}
    </div>
  );
}

export default App;
