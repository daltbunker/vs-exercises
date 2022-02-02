import './App.css';
import { useState, useEffect } from "react"
import Bounties from './components/Bounties';
import axios from "axios"

function App() {

  const [bounties, setBounties] = useState([])

  useEffect(() => {
    axios.get("/bounty")
      .then(resp => {
        return setBounties([...resp.data])
      })
  }, [])

  return (
    <div className="App">
      <h1>Bounties</h1>
      <Bounties bounties={bounties}/>
    </div>
  );
}

export default App;
