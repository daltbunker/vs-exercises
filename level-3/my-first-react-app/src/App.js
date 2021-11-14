import React from "react";
import Heading from "./Heading"
import Main from "./Main"

function App() {
    return (
        <div>
            <Heading title="WINTER ANIMALS"/>
            <Main 
            title="Polar Bear"
            description="The Ploar bear can Live up to 10 years, fur is actually transparent, head of the kingdom"
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fpolar_bear%2Fpolar_bear_PNG26.png&f=1&nofb=1"
            />
            <Main 
            title="Wolf"
            description="Wolved starting weight is 100 lbs, hunt in heards, howel at the moon when its full."
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2F31506531509x39cjifepls869wrxj3ebjvg4dmtlehcxx37dhzvwyhpu1bn4omz6cvo3zebyfr6met7aus6f5umzj3sqlrznnmpijqwulziusni.png&f=1&nofb=1"
            />
             <Main 
            title="Snow Leopard"
            description="Wolved starting weight is 100 lbs, hunt in heards, howel at the moon when its full."
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.worldwildlife.org%2Fphotos%2F5440%2Fimages%2Fstory_full_width%2F680-02448747s.png%3F1382552067&f=1&nofb=1"
            />

        </div>
    )
}

export default App;