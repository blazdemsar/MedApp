import "../app.css";
import React, {Component, PureComponent} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Footer from "./CommonComponents/FooterComponent.js";
import Header from "./CommonComponents/HeaderComponent.js";
import Home from "./CommonComponents/HomeComponent.js";
import {About} from "./CommonComponents/AboutComponent.js";
import NotFound from "./CommonComponents/NotFoundComponent";

export default class App extends React.Component {

    render() { // Virtual DOM

        return (
            <Router>
                <Header/>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    {/* <Route path="/adminPortal" exact component={Admin} />
                    <Route path="/addPatient" exact component={Patient} />
                    <Route path="/addDoctor" exact component={Doctor} />
                    <Route path="/portal" exact component={Management} /> */}
                    <Route path="/about" exact component={About} />
                    <Route path="/" exact component={Home} />
                    <Route path="*" exact component={NotFound} />
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

