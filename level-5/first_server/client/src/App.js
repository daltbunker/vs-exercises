import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {

  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    axios.get("/destinations")
      .then(resp => {
        console.log(resp.data)
        setDestinations(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      {destinations.map(destination => {
        return (
          <div key={destination._id} style={{display: "flex", margin: 20}}>
            <div className="country">Country: {destination.country}</div>
            <div className="cost" style={{margin: "0 10px"}}>Cost: {destination.cost}</div>
            <div className="cost">Seasons: {destination.season}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
