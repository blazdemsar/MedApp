import React from "react";

export function About (props) {
    
    let param = props.match.params["id"];

    return (
        <div className="about">
            <h2>Here at Blazing Technologies we:</h2>
            <p className="about-content">
                <ul>
                    <li>Respect our client's privacy,</li>
                    <li>Respect our client's requests,</li>
                    <li>Find you the best doctor to match your needs</li>
                    <li>Offer affordable doctor visits</li>
                </ul>
            </p>
        </div>
    )
}