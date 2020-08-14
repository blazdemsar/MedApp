"use strict";
import React, {Component} from "react";

export default class Patient extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            patientId : "",
            name : "", //props.patient.name,
            lastName : "", //props.patient.lastName,
            dob : "",
            address : "", //props.patient.address,
            disease : "" //props.patient.disease
        }
    }

    //as we update the state in user reducer we need to update component when we recive it as props 
    //once broadcated by store
    componentWillReceiveProps(nextProps){
        console.log("next props", nextProps);
        this.setState({
            doctorId : nextProps.patient.patientId,
            name : nextProps.patient.name,
            lastName : nextProps.patient.lastName,
            dob : nextProps.patient.dob,
            address : nextProps.patient.address,
            disease : nextProps.patient.disease
        })
    }

    onChangeText = (evt)=>{
        // target is input element, real dom element, over which event is raised
        let target = evt.target;
        let classlist = target.classList.toString();
        
        let typedValue = target.value;//reading the value with the help of target (html control)
                                            //which raised this event

        if (classlist.indexOf("patientId")>=0) {
            this.setState({
                patientId: typedValue
            })
        } else if (classlist.indexOf("name")>=0) {
            this.setState({
                name: typedValue
            })
        } else if(classlist.indexOf("lastName")>=0) {
            this.setState({
                lastName: typedValue
            })
        } else if(classlist.indexOf("dob")>=0) {
            this.setState({
                dob: typedValue
            }) 
        } else if(classlist.indexOf("address")>=0){
            this.setState({
                address: target.value
            })
        } else if (classlist.indexOf("disease")>=0) {
            this.setState({
                disease: target.value
            })    
        }
    }

    CreatePatient = () => {
        console.log(this.state);
        this.props.createPatient(this.state);
    }

    render(){
        return(
            <div className={"container"}>
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div className="form-group">
                            <b>Patient ID</b>
                            <br/>
                            <input type="number" className="form-control patientId" value={this.state.patientId} 
                            placeholder="Patient ID" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>First Name</b>
                            <br/>
                            <input type="text" className="form-control name" value={this.state.name} 
                            placeholder="First Name" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Last Name</b>
                            <br/>
                            <input type="text" className="form-control lastName" value={this.state.lastName} 
                                placeholder="Last Name"
                                onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Date of Birth</b>
                            <br/>
                            <input type="date" className="form-control dob" value={this.state.dob} 
                                placeholder="Date of Birth"
                                onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Address</b>
                            <br/>
                            <input type="text" className="form-control address" value={this.state.address} 
                            placeholder="Address" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Disease</b>
                            <br/>
                            <textarea type="text" className="form-control disease" value={this.state.disease} 
                            placeholder="Disease" onChange={this.onChangeText} />
                        </div>

                        {this.state._id}
                        <hr/>
                        <input type="button" className="btn btn-danger" value={"Create"} onClick={this.CreatePatient}/>
                        <br/>
                        <label></label>
                    </div>
                </div>
            </div>
        )
    }

}