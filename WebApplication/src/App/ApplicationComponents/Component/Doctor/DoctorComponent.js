"use strict";
import React, {Component} from "react";

export default class Doctor extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            doctorId : "",
            name : "", //props.doctor.name,
            lastName : "", //props.doctor.lastName,
            qualification : "", //props.doctor.qualification,
            specialization : "", //props.doctor.specialization,
            fee : ""//props.doctor.fee
        }
    }

    //as we update the state in user reducer we need to update component when we recive it as props 
    //once broadcated by store
    componentWillReceiveProps(nextProps){
        console.log("next props", nextProps);
        this.setState({
            doctorId : nextProps.doctor.doctorId,
            name : nextProps.doctor.name,
            lastName : nextProps.doctor.lastName,
            qualification : nextProps.doctor.qualification,
            specialization : nextProps.doctor.specialization,
            fee : nextProps.doctor.fee
        })
    }

    onChangeText = (evt)=>{
        // target is input element, real dom element, over which event is raised
        let target = evt.target;
        let classlist = target.classList.toString();
        
        let typedValue = target.value;//reading the value with the help of target (html control)
                                            //which raised this event

        if (classlist.indexOf("doctorId")>=0) {
            this.setState({
                doctorId:typedValue
            })
        } else if (classlist.indexOf("name")>=0) {
            this.setState({
                name:typedValue
            })
        } else if(classlist.indexOf("lastName")>=0) {
            this.setState({
                lastName:typedValue
            }) 
        } else if(classlist.indexOf("qualification")>=0){
            this.setState({
                qualification: target.value
            })
        } else if (classlist.indexOf("specialization")>=0) {
            this.setState({
                specialization: target.value
            })      
        } else if (classlist.indexOf("fee")>=0) {
            this.setState({
                fee: target.value
            })    
        }
    }

    CreateDoctor = () => {
        console.log(this.state);
        this.props.createDoctor(this.state);
    }

    render(){
        return(
            <div className={"container"}>
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div className="form-group">
                            <b>Doctor ID</b>
                            <br/>
                            <input type="number" className="form-control doctorId" value={this.state.doctorId} 
                            placeholder="Doctor ID" onChange={this.onChangeText} />
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
                            <b>Qualification</b>
                            <br/>
                            <input type="text" className="form-control qualification" value={this.state.qualification} 
                            placeholder="Qualification" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Specialization</b>
                            <br/>
                            <input type="text" className="form-control specialization" value={this.state.specialization} 
                            placeholder="Specialization" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Fee</b>
                            <br/>
                            <input type="number" className="form-control fee" value={this.state.fee} 
                            placeholder="Fee" onChange={this.onChangeText} />
                        </div>

                        {this.state._id}
                        <hr/>
                        <input type="button" className="btn btn-danger" value={"Create"} onClick={this.CreateDoctor}/>
                        <br/>
                        <label></label>
                    </div>
                </div>
            </div>
        )
    }

}