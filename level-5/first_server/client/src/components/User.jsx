import React from 'react';

function User({data}) {
  return (
      <div style={{display: "flex", flexDirection: "column", margin: 20, border: "1px solid black", width: "10%"}}>
          <div style={{padding: 10}}>Name: {data.name}</div>
          <div style={{padding: 10}}>Age: {data.age}</div>
      </div>
  )
}

export default User;
