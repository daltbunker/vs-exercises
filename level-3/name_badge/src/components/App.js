import '../styles/App.css';
import React from 'react';
import BadgeForm from './BadgeForm';
import ListContainer from './ListContainer'
import Header from './Header';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      badges: [{
        firstName: "Jon",
        lastName: "Jones",
        phone: "1234446646",
        email: "jon@gmail.com",
        favoriteFood: "Corn Dogs",
        birthplace: "Arizona",
        about: "Grew up in the west, I like to go hike in the mountains."
    }]
    }
  }

  submitEvent = obj => {
    this.setState(prevState => ({badges: [...prevState.badges, obj]}))
  }

  render() {
    return (
      <div className="app">
        <Header text="NAME BADGE"/>
        <BadgeForm handleSubmit={this.submitEvent}/>
        <ListContainer list={this.state.badges}/>
        <div className="bottom-cover"></div>
      </div>
    )
  }
}

export default App;
