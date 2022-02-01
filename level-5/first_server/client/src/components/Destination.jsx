import React from 'react';

function Destination({data}) {
  return (
    <div style={{display: "flex", flexDirection: "column", margin: 20, border: "1px solid black", width: "20%"}}>
        <div style={{padding: 10}}>Country: {data.country}</div>
        <div style={{margin: 10}}>Cost: {data.cost}</div>
        <div style={{margin: 10}}>Seasons: {data.season}</div>
    </div>
  )
}

export default Destination;
