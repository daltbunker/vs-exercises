import React from 'react'
import BadgeCard from './BadgeCard'

const container = {
    marginTop: 20,
    width: 550,
}

function ListContainer({list}) {

    const badgesList = list.map((badge, i) => {
        return (
            <BadgeCard key={i} badge={badge}/>
        )
    })
    return (
        <div className="list-container" style={container}>
            {badgesList}
        </div>
    )
}

export default ListContainer
