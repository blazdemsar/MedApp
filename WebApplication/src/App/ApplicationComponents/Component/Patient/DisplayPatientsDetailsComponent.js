import React from "react";

export default class DisplayPatientsDetailsComponent extends React.Component{
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
        let patient = this.props.patient;
        return(
            <React.Fragment>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={this.showHideDetails}>
                        <label><b>ID : {patient.patientId}</b></label>                      
                        {this.state.showDetails ?
                        <ul>
                            <li className="list-group-item list-group-item-danger">First Name : {patient.name}</li>
                            <li className="list-group-item list-group-item-danger">Last Name : {patient.lastName}</li>
                            <li className="list-group-item list-group-item-danger">Date of Birth : {patient.dob}</li>
                            <li className="list-group-item list-group-item-danger">Address : {patient.address}</li>
                            <li className="list-group-item list-group-item-danger">Disease : {patient.disease}</li>
                        </ul>
                        :
                        ""}
                    </li>
                </ul>
            </React.Fragment>
        )
    }

}