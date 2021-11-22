import React from 'react'
import Pet from './Pet'

export default function Friend({ name, age, pets }) {
    const petsArr = pets.map(pet => {
        return (
            <Pet name={pet.name} breed={pet.breed} />
        )
    })
    return (
        <div className='friend-wrap'>
            Name: {name}<br/> 
            Age: {age}<br/>
            Pets:
            <ul className='pets-list'>
                {petsArr}
            </ul>
        </div>
    )
}
