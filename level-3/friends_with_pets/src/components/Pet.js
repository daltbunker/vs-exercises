import React from 'react'

export default function Pet({ name, breed }) {
    return (
        <li className="pet-wrap">
            {name} ({breed})
        </li>
    )
}
