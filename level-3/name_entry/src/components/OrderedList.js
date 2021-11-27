import React from 'react'

function OrderedList({ list }) {

    const liArray = list.map((name, i) => {
        return (
            <li key={i}>{name}</li>
        )
    })

    return (
        <ol style={ list.length > 0 ? { border: "2px solid black", textAlign: "center" } : {}}>
            {liArray}
        </ol>
    )
}

export default OrderedList
