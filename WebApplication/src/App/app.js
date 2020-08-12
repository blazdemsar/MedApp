import "../app.css";
import React, {Component, PureComponent} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Loadable from "react-loadable"; //allows lazy loading
// functional component, used as placeholder
// when lazy loaded modules aredelayed
function Loading() {
    return (
        <div>
            Loading Project...
        </div>
    )
}

const Home = Loadable({
    loader: () => import('./CommonComponents/HomeComponent'),
    loading: Loading,
});

const Header = Loadable({
    loader: () => import('./CommonComponents/HeaderComponent'),
    loading: Loading,
});

const NotFound = Loadable({
    loader: () => import('./CommonComponents/NotFoundComponent'),
    loading: Loading,
});

const About = Loadable({
    loader: () => import('./CommonComponents/AboutComponent'),
    loading: Loading,
});

const Footer = Loadable({
    loader: () => import('./CommonComponents/FooterComponent'),
    loading: Loading,
});

const Admin = Loadable({
    loader: () => import('./ApplicationComponents/Container/Admin/AdminContainer'),
    loading: Loading,
});

const Patient = Loadable({
    loader: () => import('./ApplicationComponents/Container/Patient/PatientContainer'),
    loading: Loading,
});

const DisplayPatients = Loadable({
    loader: () => import('./ApplicationComponents/Container/Patient/DisplayPatientsContainer'),
    loading: Loading,
});

const Doctor = Loadable({
    loader: () => import('./ApplicationComponents/Container/Doctor/DoctorContainer'),
    loading: Loading,
});

const DisplayDoctors = Loadable({
    loader: () => import('./ApplicationComponents/Container/Doctor/DisplayDoctorsContainer'),
    loading: Loading,
});

const Record = Loadable({
    loader: () => import('./ApplicationComponents/Container/Records/RecordsContainer'),
    loading: Loading,
});

const DisplayRecords = Loadable({
    loader: () => import('./ApplicationComponents/Container/Records/DisplayRecordsContainer'),
    loading: Loading,
});

const RegisterAdmin = Loadable({
    loader: () => import('./ApplicationComponents/Container/Admin/RegisterAdminContainer'),
    loading: Loading,
});

const Management = Loadable({
    loader: () => import('./ApplicationComponents/Container/Management/ManagementContainer'),
    loading: Loading,
});

export default class App extends React.Component {

    render() { // Virtual DOM

        return (
            <Router>
                <Header/>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/adminPortal" exact component={Admin} />
                    <Route path="/registerAdmin" exact component={RegisterAdmin} />
                    <Route path="/patients" exact component={DisplayPatients} />
                    <Route path="/doctors" exact component={DisplayDoctors} />
                    <Route path="/records" exact component={DisplayRecords} />
                    <Route path="/management" exact component={Management} />
                    <Route path="/about" exact component={About} />
                    <Route path="/" exact component={Home} />
                    <Route path="*" exact component={NotFound} />
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

