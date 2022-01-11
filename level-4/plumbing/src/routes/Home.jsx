import React from 'react'


export default function Home() {
    
    const HomeContainerStyles = {
        marginTop: 50,
        display: "grid",
        paddingBottom: 80,
        gridTemplateColumns: "1fr 1fr"
    }
    
    const itemBackgroundStyles = {
        width: 450,
        height: 300,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: 2,
    }
    
    const containerStyles = {
        display: 'flex',
        margin: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    const buttonStyles = {
        fontWeight: "bold",
        marginTop: 10,
        backgroundColor: "rgb(228, 154, 18)",
        width: 100,
        border: "none",
        padding: "5px 7px",
        borderRadius: 4,
    }

    return (
        <div style={HomeContainerStyles}>
            <div style={containerStyles}>
                <div style={{...itemBackgroundStyles, backgroundImage: "url(https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60)"}}></div>
                <button style={buttonStyles}>CALL</button>
            </div>
            <div style={containerStyles}>
                <div style={{...itemBackgroundStyles, backgroundImage: "url(https://images.unsplash.com/photo-1627752711469-d98b8acfc05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBsdW1iaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60)"}}></div>
                <button style={buttonStyles}>SCHEDULE</button>
            </div>
            <div style={containerStyles}>
                <div style={{...itemBackgroundStyles, backgroundImage: "url(https://images.unsplash.com/photo-1601997123254-a9f1ad6a756b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60)"}}></div>
                <button style={buttonStyles}>HOURS</button>
            </div>
            <div style={containerStyles}>
                <div style={{...itemBackgroundStyles, backgroundImage: "url(https://images.unsplash.com/photo-1454988501794-2992f706932e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBsdW1iaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60)"}}></div>
                <button style={buttonStyles}>LOCATIONS</button>
            </div>
        </div>
    )
}
