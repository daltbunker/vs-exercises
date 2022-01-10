import React, {useContext} from 'react'
import './UglyThingList.css'
import {UglyThingsContext} from './UglyThingsContext'
import UglyThingCard from './UglyThingCard'

function UglyThingList() {

    const {uglyThingsArray, deleteThing, setEditMode} = useContext(UglyThingsContext)

    function handleEdit(title, description, imgUrl, id) {
        setEditMode([true, {id, title, description, imgUrl}])
        window.scrollTo(0, 0)
    }

    const uglyThingCards = uglyThingsArray.map(thing => {
        return <UglyThingCard key={thing._id} id={thing._id} onDelete={deleteThing} onEditClicked={handleEdit} title={thing.title} description={thing.description} imgUrl={thing.imgUrl}/>
    })
    return (
        <div className="UglyThingList">
            {uglyThingCards}
        </div>
    )
}

export default UglyThingList
