import React from 'react';

function Bounty({ bounty }) {
  return (
    <div className="Bounty">
        <div className="Bounty-name">Name: {bounty.firstName} {bounty.lastName}</div>
        <div className="Bounty-living">Living: {bounty.living ? "true" : "false"}</div>
        <div className="Bounty-price">Price: {bounty.bountyAmount}</div>
        <div className="Bounty-type">Type: {bounty.type}</div>
    </div>
  )
}

export default Bounty;
