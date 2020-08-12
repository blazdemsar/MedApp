"use strict";
import React, {Component} from "react";
import DisplayDoctorsDetailsComponent from "../Doctor/DisplayDoctorsDetailsComponent"

export default class DisplayDoctors extends Component{
    constructor(props, context){
        super(props, context);
    }

    componentDidMount(){
        console.log("Hello");
        this.props.getDoctors();
    }

    render(){

        let doctors = this.props.doctors
        console.log("Doctors: ", doctors)
        return(
            <div className={"container"}>
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div>
                            <h2>Doctors In The Database:</h2>
                            { doctors.length >= 1 ?
                                doctors.map((doctor) => {
                                    return <DisplayDoctorsDetailsComponent doctor={doctor} key={doctor._id}/>;
                                })
                                :
                                <p>There Are Currently No Doctors In The Database!</p>
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