import React from 'react'
import './UglyThingCard.css'

function UglyThingCard({title, description, imgUrl, onDelete, onEditClicked, id}) {

    return (
        <div className="UglyThingCard">
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
            <img className="card-img" src={imgUrl} alt=""/>
            <div className="card-buttons" id={id}>
                <button id="edit-btn" onClick={() => onEditClicked(title, description, imgUrl, id)}>EDIT</button>
                <button id="delete-btn" onClick={() => onDelete(id)}></button>
            </div>
        </div>
    )
}

export default UglyThingCard
