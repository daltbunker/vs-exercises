import React from 'react';
import Bounty from './Bounty';

function Bounties(props) {

    const bountiesArr = props.bounties.map(bounty => {
        return <Bounty key={bounty._id} bounty={bounty} onEdit={props.onEdit} onDelete={props.onDelete} />
    })
    return (
        <div className="Bounties">
            {bountiesArr}
        </div>
    )
}

export default Bounties;
