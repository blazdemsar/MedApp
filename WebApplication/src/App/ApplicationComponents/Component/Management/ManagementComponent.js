import React from "react";
import DoctorComponent from "../../Container/Doctor/DoctorContainer";
import PatientComponent from "../../Container/Patient/PatientContainer";
import RecordsComponent from "../../Container/Records/RecordsContainer";

export default function Management() {
    
    return(
        <div className={"container"}>
            <div className="col-lg-12">
                <h2>Create A New Doctor</h2>
                <DoctorComponent/>
                <br/>
                <h2>Create A New Patient</h2>
                <PatientComponent/>
                <br/>
                <h2>Create A New Medical Record</h2>
                <RecordsComponent/>
                <br/>
                <label></label>
            </div>
        </div>
    )
}