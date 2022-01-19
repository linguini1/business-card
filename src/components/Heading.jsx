// Imports
import React from "react"
import "./css/Heading.css"

// Heading component
function Heading() {
    return (
        <div className="info-container">
            <div className="info-wrapper">
                <div className="title">
                    <h1>Matteo Golin</h1>
                    <h3>B.Eng</h3>
                </div>
                <h3>Programmer</h3>
                <h3>Pixel Artist</h3>
            </div>
            <div className="image-wrapper">
                <img className="headshot" src="./static/qrPfp_large.png" alt="Headshot" width="250px" />
            </div>
        </div>
    );
}

export default Heading;