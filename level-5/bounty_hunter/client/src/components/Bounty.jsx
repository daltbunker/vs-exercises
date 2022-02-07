import React, { useState } from 'react';
import BountyForm from './BountyForm';

function Bounty({ bounty, onDelete, onSave }) {

    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <div className="Bounty">
                <div className="Bounty-data">
                    <div className="Bounty-name">Name: {bounty.firstName} {bounty.lastName}</div>
                    <div className="Bounty-living">Living: {bounty.living ? "true" : "false"}</div>
                    <div className="Bounty-price">Price: ${bounty.bountyAmount}</div>
                    <div className="Bounty-type">Type: {bounty.type}</div>
                </div>
                <div className="Bounty-buttons">
                    <button onClick={() => {
                        setShowForm(true)
                    }}>EDIT</button>
                    <button onClick={() => onDelete(bounty._id)}>DELETE</button>
                </div>
            </div>
            {showForm && <BountyForm buttonText="SAVE" inputData={{...bounty}} onSubmit={onSave} hideForm={() => setShowForm(false)} />}
        </>
    )
}

export default Bounty;
