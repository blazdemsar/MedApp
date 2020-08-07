import React, {Component, PureComponent} from "react";
import {PropTypes} from "prop-types";

export default class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            title : "Home Page"
        }
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentdidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps : ", nextProps);
    }

    //life cycle method
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate -");
        console.log("nextProps -", nextProps );
        console.log("nextState -", nextState);
        return true;
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate -");
        console.log("prevState -", prevState);
        console.log("prevProps -", prevProps);
    }

    render() {
        console.log("Rendering...");

        return(
            <div>
                <h2 className="home-title-h2">Here at Blazing Technologies we:</h2>
                <p className="feature">
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
}

Home.propTypes = {
    title : PropTypes.string.isRequired
}

Home.defaultProps = {
    title : "Default Title"
}