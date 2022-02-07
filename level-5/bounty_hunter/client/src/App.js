import './App.css';
import { useState, useEffect } from "react"
import Bounties from './components/Bounties'
import axios from "axios"
import BountyForm from './components/BountyForm';

function App() {

  const [bounties, setBounties] = useState([])

  useEffect(() => {
    axios.get("/bounty")
      .then(resp => {
        return setBounties([...resp.data])
      })
  }, [])

  function handleSubmit(e, newBounty) {
    e.preventDefault()
    axios.post("/bounty", newBounty)
      .then(resp => {
        setBounties(prevBounties => [...prevBounties, resp.data])
      })
      .catch(error => console.log(error))
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this bounty?")) {
      axios.delete(`/bounty/${id}`)
        .then(() => {
          setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== id))
        })
        .catch(error => console.log(error))
    }
  }

  function handleEdit(e, input) {
    e.preventDefault()
    axios.put(`/bounty/${input._id}`)
      .then(() => {
        setBounties(prevBounties => {
          return prevBounties.map(bounty => {
            if (bounty._id === input._id) {
              return input
            }
            return bounty
          })
        })
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <h1>Bounties</h1>
      <Bounties bounties={bounties} onDelete={handleDelete} onEdit={handleEdit} />
      <div className="App-add-bounty">
        <h2>Add Bounty</h2>
        <BountyForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
