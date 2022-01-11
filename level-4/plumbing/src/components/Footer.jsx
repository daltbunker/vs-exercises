import React from 'react'


export default function Footer() {
    
    const container = {
        position: "absolute",
        bottom: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "black"
    }
    
    const icons = {
        display: "flex"
    }
    
    const iconImage = {
        width: 50,
        height: 50,
        margin: 10,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    return (
        <footer style={container}>
            <div style={{color: "white"}}>© Copyright The Plumbing Guys</div>
            <div style={icons}>
                <div style={{...iconImage, backgroundImage: "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fle-reve.com%2Fwp-content%2Fuploads%2Fnew-instagram-icon-topic.png&f=1&nofb=1)"}}></div>
                <div style={{...iconImage, backgroundImage: "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepngimg.com%2Fthumb%2Ffacebook%2F65541-logo-facebook-icon-free-hq-image.png&f=1&nofb=1)", transform: "scale(0.9)"}}></div>
            </div>
        </footer>
    )
}
