import React from "react";

export default class DisplayRecordsDetailsComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            showDetails : false
        }
    }

    showHideDetails = ()=>{
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render(){
        
        let record = this.props.record;

        let {recordId, patient , doctor , diagnosis, admission} = record;
        // patient = JSON.parse(patient);
        // doctor = JSON.parse(doctor);

        return(
            <React.Fragment>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={this.showHideDetails}>
                        <label><b>ID : {recordId}</b></label>                   
                        {this.state.showDetails ?
                        <ul>
                            <li className="list-group-item list-group-item-danger">Patient's ID : {patient.patientId}</li>
                            <li className="list-group-item list-group-item-danger">Patient's First Name : {patient.name}</li>
                            <li className="list-group-item list-group-item-danger">Patient's Last Name : {patient.lastName}</li>
                            <li className="list-group-item list-group-item-danger">Patient's Date of Birth : {patient.dob}</li>
                            <li className="list-group-item list-group-item-danger">Patient's Address : {patient.address}</li>
                            <li className="list-group-item list-group-item-danger">Patient Admitted? : {admission}</li>
                            <li className="list-group-item list-group-item-danger">Diagnosis : {diagnosis}</li>
                            <li className="list-group-item list-group-item-danger">Disease : {patient.disease}</li>
                            <li className="list-group-item list-group-item-danger">Doctor's First Name : {doctor.name}</li>
                            <li className="list-group-item list-group-item-danger">Doctor's First Name : {doctor.lastName}</li>
                            <li className="list-group-item list-group-item-danger">Qualification : {doctor.qualification }</li>
                            <li className="list-group-item list-group-item-danger">Specialization : {doctor.specialization}</li>
                            <li className="list-group-item list-group-item-danger">Total Fee : {doctor.fee}</li>
                        </ul>
                        :
                        ""}
                    </li>
                </ul>
            </React.Fragment>
        )
    }

}