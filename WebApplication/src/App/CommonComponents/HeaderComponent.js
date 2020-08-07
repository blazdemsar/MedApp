"use-strict";
import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

let Header = (props) => {
    //let userName = props.admin.userName;

    return (
        <div className="col-md-12">
            { userName != "" ?
                <React.Fragment>
                    <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
                    <NavLink to="/addPatient" className="button" activeClassName="success" >Add Patient </NavLink>
                    <NavLink to="/addDoctor" className="button" activeClassName="success" >Add Doctor </NavLink> 
                    <NavLink to="/portal" className="button" activeClassName="success" >Management Portal </NavLink>  
                    <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
                </React.Fragment>
                :
                <React.Fragment>
                    <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
                    <NavLink to="/adminPortal" className="button" activeClassName="success" >Admin Portal </NavLink> 
                    <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
                </React.Fragment>
            }
        </div>
    )
}

export default Header;