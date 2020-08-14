"use strict";
import React, {Component} from "react";

export default class Record extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            recordId : "",
            patient : {},
            doctor : {},
            admission : "",
            diagnosis : ""
        }
    }
    
    componentDidMount(){
        console.log("Hello");
        this.props.getPatients();
        this.props.getDoctors();
    }

    componentWillReceiveProps(nextProps){
        console.log("next props", nextProps);
        this.setState({
            recordId : nextProps.record.recordId,
            patient : nextProps.record.patient,
            doctor : nextProps.record.doctor,
            admission : nextProps.record.admission,
            diagnosis : nextProps.record.diagnosis,
        })
    }

    onChangeText = (evt)=>{
        // target is input element, real dom element, over which event is raised
        let target = evt.target;
        let classlist = target.classList.toString();
        
        let typedValue = target.value;//reading the value with the help of target (html control)
                                            //which raised this event

        if (classlist.indexOf("recordId")>=0) {
            this.setState({
                recordId: typedValue
            })
        } else if (classlist.indexOf("patient")>=0) { //!= "Select"
            let newPatient = JSON.parse(typedValue);
            this.setState({
                patient: newPatient
            })
        } else if(classlist.indexOf("doctor")>=0){
            let newDoctor = JSON.parse(typedValue);
            this.setState({
                doctor: newDoctor
            })
        } else if (classlist.indexOf("admission")>=0) {
            this.setState({
                admission: typedValue
            })    
        } else if (classlist.indexOf("diagnosis")>=0) {
            this.setState({
                diagnosis: typedValue
            })    
        }
    }

    CreateRecord = () => {
        console.log(this.state);
        this.props.createRecord(this.state);
    }

    render(){

        let patients = this.props.patients;
        let doctors = this.props.doctors;

        console.log(patients);
        console.log(doctors);

        let doctorsList = doctors.length > 0 && doctors.map((doctor, i) => {
            return (<option className="option" value={JSON.stringify(doctor)}>{doctor.doctorId} : {doctor.name} {doctor.lastName}</option>)
        }, this)

        console.log(doctorsList);

        let patientsList = patients.length > 0 && patients.map((patient, i) => {
            return (<option className="option" value={JSON.stringify(patient)}>{patient.patientId} : {patient.name} {patient.lastName}</option>)
        }, this)

        console.log(doctorsList);

        return(
            <div className={"container"}>
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div className="form-group">
                            <b>Record ID</b>
                            <br/>
                            <input type="number" className="form-control recordId" value={this.state.recordId} 
                            placeholder="Record ID" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Select A Patient</b>
                            <br/>
                            <select type="text" className="form-control patient" placeholder="Select A Patient" onChange={this.onChangeText} >
                                <option className="option" value="Select">Select A Patient</option>
                                {patientsList}
                            </select>
                        </div>
                        <div className="form-group">
                            <b>Select A Doctor</b>
                            <br/>
                            <select type="text" className="form-control doctor" placeholder="Select A Patient" onChange={this.onChangeText} >
                                <option className="option" value="Select">Select A Doctor</option>
                                {doctorsList}
                            </select>
                        </div>
                        <div className="form-group">
                            <b>Admission</b>
                            <br/>
                            <select type="text" className="form-control admission" placeholder="Admission" onChange={this.onChangeText} >
                                <option className="option" value="">Select A Value</option>
                                <option className="option" value="Yes">Yes</option>
                                <option className="option" value="No">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <b>Diagnosis</b>
                            <br/>
                            <textarea type="text" className="form-control diagnosis" value={this.state.diagnosis} 
                            placeholder="Diagnosis" onChange={this.onChangeText} />
                        </div>
                        <hr/>
                        <input type="button" className="btn btn-danger" value={"Create"} onClick={this.CreateRecord}/>
                        <br/>
                        <label></label>
                    </div>
                </div>
            </div>
        )
    }

}