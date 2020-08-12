"use-strict";
import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

let Header = (props) => {
    
    let userName = props.admin.userName;

    return (
        <div className="jumbotron bg-dark text-white text-center">
            
            <div className="col-md-12">
                { userName != "" ?
                    <React.Fragment>
                        <h1>Welcome to Management Portal!</h1>
                        <div className="btn-group btn-group-lg">
                            <NavLink to="/home" className="btn btn-danger" activeClassName="success" >Home </NavLink> 
                            <NavLink to="/patients" className="btn btn-danger" activeClassName="success" >Patients </NavLink>
                            <NavLink to="/doctors" className="btn btn-danger" activeClassName="success" >Doctors </NavLink>
                            <NavLink to="/records" className="btn btn-danger" activeClassName="success" >Records </NavLink>
                            <NavLink to="/management" className="btn btn-danger" activeClassName="success" >Management Portal </NavLink>  
                            <NavLink to="/about" className="btn btn-danger" activeClassName="success">About  </NavLink>
                            {/* <input type="button" className="btn-lg btn-primary" value={"Logout"} onClick=""/> */}
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <h1>Welcome to MedApp!</h1>
                        <div className="btn-group btn-group-lg">
                            <NavLink to="/home" type="button" className="btn btn-danger" padx="5" activeClassName="success" >Home </NavLink>
                            <NavLink to="/adminPortal" type="button" className="btn btn-danger" activeClassName="success" >Admin Portal </NavLink> 
                            <NavLink to="/about" type="button" className="btn btn-danger" activeClassName="success">About  </NavLink>
                        </div>
                    </React.Fragment>
                }
            </div>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        admin : state.admin.admin
    }
}

//this components connects us to the store as a subscriber only, here we implemented without container
export default connect(mapStateToProps, null)(Header);