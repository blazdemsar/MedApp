"use strict";
import React, {Component} from "react";
import DisplayPatientsDetailsComponent from "../Patient/DisplayPatientsDetailsComponent"

export default class DisplayPatients extends Component{
    constructor(props, context){
        super(props, context);
    }

    componentDidMount(){
        console.log("Hello");
        this.props.getPatients();
    }

    render(){

        let patients = this.props.patients
        console.log("Patients: ", patients)
        return(
            <div className={"container"}>
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div>
                            <h2>Patients In The Database:</h2>
                            { patients.length >= 1 ?
                                patients.map((patient) => {
                                    return <DisplayPatientsDetailsComponent patient={patient} key={patient._id}/>;
                                })
                                :
                                <p>There Are Currently No Patients In The Database!</p>
                            }
                        </div>
                    </div>
                </div>
                <br/>
                <label></label>
            </div>
        )
    }

}