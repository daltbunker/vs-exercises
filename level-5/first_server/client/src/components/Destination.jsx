import axios from 'axios';
import React from 'react';

function Destination({data, onDelete}) {

  function handleDelete() {
    axios.delete("/destinations/" + data._id)
      .then(resp => {
        onDelete(resp.data.country)
      })
  }

  return (
    <div style={{display: "flex", flexDirection: "column", margin: 20, border: "1px solid black", width: "20%"}}>
        <div style={{padding: 10}}>Country: {data.country}</div>
        <div style={{margin: 10}}>Cost: {data.cost}</div>
        <div style={{margin: 10}}>Seasons: {data.season}</div>
        <button onClick={handleDelete} style={{width: "5em", backgroundColor: "crimson", borderRadius: 4, margin: 10}}>Delete</button>
    </div>
  )
}

export default Destination;
