import React from "react";

function Card({ location, cost, season, url }) {
    return (
        <div className="card-container" style={{ backgroundImage: `url(${url})` }}>
            <div className="text-container" style={{ border: `3px solid ${seasonColor(season)}` }}>
                <h2 className="card-location">Location: {location}</h2>
                <h3 className="card-price">Price: ${cost}</h3>
                <h3 className="card-season">Best Season: {season}</h3>
            </div>
        </div>
    )
}

function seasonColor(season) {
    switch(season){
        case("Spring"):
            return "rgba(59, 177, 59, 0.747)";
        case("Summer"):
            return " rgba(255, 252, 66, 0.747)";
        case("Fall"):
            return "rgba(212, 136, 23, 0.747)";
        case("Winter"):
            return "rgba(23, 168, 212, 0.747)";
        default:
            return;
    }
}

export default Card;