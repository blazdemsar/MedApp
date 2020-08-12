import React from "react";
import { func } from "prop-types";

export default function NotFound() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Oops! Looks like the page you're trying to reach doesn't exist...</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}