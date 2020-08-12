"use strict";
import React, {Component} from "react";

export default class Record extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            patientName : "",
            patientLastName : "",
            doctorName : "",
            doctorLastName : "",
            addmission : "",
            diagnosis : "",
            fee : ""
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("next props", nextProps);
        this.setState({
            patientName : nextProps.record.patientName,
            patientLastName : nextProps.record.patientLastName,
            doctorName : nextProps.record.doctorName,
            doctorLastName : nextProps.record.doctorLastName,
            admission : nextProps.record.admission,
            diagnosis : nextProps.record.diagnosis,
            fee : nextProps.record.fee
        })
    }

    onChangeText = (evt)=>{
        // target is input element, real dom element, over which event is raised
        let target = evt.target;
        let classlist = target.classList.toString();
        
        let typedValue = target.value;//reading the value with the help of target (html control)
                                            //which raised this event

        if (classlist.indexOf("patientName")>=0) {
            this.setState({
                patientName:typedValue
            })
        } else if(classlist.indexOf("patientLastName")>=0) {
            this.setState({
                patientLastName:typedValue
            }) 
        } else if(classlist.indexOf("doctorName")>=0){
            this.setState({
                doctorName: target.value
            })
        } else if (classlist.indexOf("doctorLastName")>=0) {
            this.setState({
                doctorLastName: target.value
            })      
        } else if (classlist.indexOf("admission")>=0) {
            this.setState({
                admission: target.value
            })    
        } else if (classlist.indexOf("diagnosis")>=0) {
            this.setState({
                diagnosis: target.value
            })    
        }else if (classlist.indexOf("fee")>=0) {
            this.setState({
                fee: target.value
            })    
        }
    }

    CreateRecord = () => {
        console.log(this.state);
        this.props.createRecord(this.state);
    }

    render(){
        return(
            <div className={"container"}>
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div className="form-group">
                            <b>Patient's First Name</b>
                            <br/>
                            <input type="text" className="form-control patientName" value={this.state.patientName} 
                            placeholder="Patient's First Name" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Patient's Last Name</b>
                            <br/>
                            <input type="text" className="form-control patientLastName" value={this.state.patientLastName} 
                                placeholder="Patient's Last Name" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Doctor's First Name</b>
                            <br/>
                            <input type="text" className="form-control doctorName" value={this.state.doctorName} 
                            placeholder="Doctor's First Name" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Doctor's Last Name</b>
                            <br/>
                            <input type="text" className="form-control doctorLastName" value={this.state.doctorLastName} 
                            placeholder="Doctor's Last Name" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Admission</b>
                            <br/>
                            <input type="text" className="form-control admission" value={this.state.admission} 
                            placeholder="Admission" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Diagnosis</b>
                            <br/>
                            <textarea type="text" className="form-control diagnosis" value={this.state.diagnosis} 
                            placeholder="Diagnosis" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Fee</b>
                            <br/>
                            <input type="number" className="form-control fee" value={this.state.fee} 
                            placeholder="Fee" onChange={this.onChangeText} />
                        </div>

                        {this.state._id}
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