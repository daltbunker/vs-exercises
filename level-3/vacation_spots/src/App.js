import React from "react";
import Card from "./components/Card";
import Header from "./Header"
import vacationSpots from "./vacations.js";

function App() {
    const cardsList = vacationSpots.map((spot, i) => {
            return (
                <Card location={spot.place} cost={spot.price} season={spot.timeToGo} key={i} url={spot.imgUrl}/>
            )
        })
    return (
        <div>
            <Header />
            <div className="app-container">
                {cardsList}
            </div>
        </div>
       
    )
}

export default App;