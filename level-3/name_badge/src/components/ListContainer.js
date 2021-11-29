import React from 'react'
import '../styles/ListContainer.css'

function ListContainer({ list }) {

    const badgesList = list.map((badge, i) => {
        return (
            <div key={i} className="badge">
                <div className='badge-header'>BADGE:</div>
                <div className="badge-info">                
                    <div>Name: {badge.firstName} {badge.lastName}</div>
                    <div>Phone: {badge.phone.slice(0, 3)}-{badge.phone.slice(3, 6)}-{badge.phone.slice(6, )}</div>
                    <div>Email: {badge.email}</div>
                    <div>Favorite Food: {badge.favoriteFood}</div>
                    <div>Birthplace: {badge.birthplace}</div>
                    <div className="badge-about">About: {badge.about}</div>
                </div>
            </div>
        )
    })
    return (
        <div className="list-container">
            {badgesList}
        </div>
    )
}

export default ListContainer
