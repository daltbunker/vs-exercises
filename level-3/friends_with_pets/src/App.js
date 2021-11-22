import React from 'react'
import FriendList from './components/FriendList'
import friendsData from './friendsData'

export default function App() {
    const friendsArr = friendsData.map(({ name, age, pets }, i) => {
        return (
            <FriendList name={name} age={age} pets={pets} key={i}/>
        )
    })
    return (
        <div className="main-body">
            <h1 className="list-title">Friends</h1>
            <div className="friends-list">
            {friendsArr}
            </div>
        </div>   
    )
}