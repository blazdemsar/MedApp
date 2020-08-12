import React from "react";

export default function About (props) {
    
    let param = props.match.params["id"];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <h2>Here at Blazing Technologies we:</h2>
                    <ul>
                        <li>Respect our client's privacy,</li>
                        <li>Respect our client's requests,</li>
                        <li>Find you the best doctor to match your needs</li>
                        <li>Offer affordable doctor visits</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}