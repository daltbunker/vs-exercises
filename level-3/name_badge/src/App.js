import React, {useState} from 'react';
import BadgeForm from './components/BadgeForm';
import ListContainer from './components/ListContainer'
import Header from './components/Header';
import './App.css';


function App() {

  const [badges, setBadges] = useState([{
      firstName: "Jon",
      lastName: "Jones",
      phone: "1234446646",
      email: "jon@gmail.com",
      favoriteFood: "Corn Dogs",
      birthplace: "Arizona",
      about: "Grew up in the west, I like to go hike in the mountains."
    }
  ])

  const submitEvent = obj => {
    setBadges(prevBadges => ([...prevBadges, obj]))
  }

  return (
    <div className="app">
      <Header text="NAME BADGE"/>
      <BadgeForm handleSubmit={submitEvent}/>
      <ListContainer list={badges}/>
    </div>
  )
}

export default App;
