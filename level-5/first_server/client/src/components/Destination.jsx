import axios from 'axios';
import React, {useState} from 'react';
import DestinationForm from './DestinationForm';

function Destination({data, onDelete, onEdit}) {

  const [editToggle, setEditToggle] = useState(false)

  function handleDelete() {
    axios.delete("/destinations/" + data._id)
      .then(resp => {
        onDelete(resp.data.country)
      })
  }

  function handleEdit(e) {
    e.preventDefault()
    axios.put(`/destinations/${data._id}`)
      .then(resp => {
        onEdit(resp.data)
        setEditToggle(false)
      })
  }

  return (
    <div style={{display: "flex", flexDirection: "column", margin: 20, border: "1px solid black", width: "20%"}}>
        <div style={{padding: 10}}>Country: {data.country}</div>
        <div style={{margin: 10}}>Cost: {data.cost}</div>
        <div style={{margin: 10}}>Season: {data.season}</div>
        <div>
          <button onClick={handleDelete} style={{width: "5em", backgroundColor: "crimson", borderRadius: 4, margin: 10}}>Delete</button>
          <button onClick={() => setEditToggle(true)} style={{width: "5em", backgroundColor: "yellow", borderRadius: 4, margin: 10}}>Edit</button>
          {editToggle && <DestinationForm onSubmit={(e) => handleEdit(e)} submitText="SAVE" defaultInput={data}/>}
        </div>
    </div>
  )
}

export default Destination;
