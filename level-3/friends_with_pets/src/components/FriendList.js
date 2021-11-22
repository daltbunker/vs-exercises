import React from 'react'
import Friend from './Friend'

export default function FriendList({ name, age, pets }) {
    return (
        <Friend name={name} age={age} pets={pets}/>
    )
}
