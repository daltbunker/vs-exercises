import React from 'react'

export default function Services() {
    
    const container = {
        backgroundColor: "#aaaaaa33",
        padding: 15,
        margin: 15,
    }
    
    return (
        <div>
            <div style={container}>
            PLUMBING
                <ul>
                    <li>Kitchen & bath fixtures</li>
                    <li>Countertops</li>
                    <li>Faucets residential & commercial</li>
                </ul>
            </div>
            <div style={container}>
            SEWER & DRAIN
                <ul>
                    <li>Color video inspections</li>
                    <li>Hydrojetting</li>
                    <li>Mainline stoppages</li>
                </ul>
            </div>
            <div style={container}>
            HEATING
                <ul>
                    <li>Mainline stoppages</li>
                    <li>Roof drains</li>
                    <li>Clean-outs installed</li>
                </ul>
            </div>
        </div>
    )
}
