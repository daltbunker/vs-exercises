import React from "react";
import Heading from "./Heading";
import Main from "./Main";
import Button from "./Button";
import animalData from "./data.json";

function App() {
    const animals = animalData.map((animalObj, i) => {
        return (
            <Main 
                title={animalObj.type}
                description={animalObj.description}
                image={animalObj.image}
                endangered={animalObj.endangered}
                key={i}
            />
        )
    })
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Heading title="WINTER KINGDOM"/>
            {animals}
            <Button label="LOAD MORE"/>
        </div>
    )
}


export default App;