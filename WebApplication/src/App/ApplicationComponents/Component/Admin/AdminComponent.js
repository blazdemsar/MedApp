"use strict";
import React, {Component} from "react";

export default class Admin extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userName : props.admin.userName,
            password : props.admin.password
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("next props", nextProps);
        this.setState({
            userName: nextProps.admin.userName,
            password: nextProps.admin.password
        })
    }

    onChangeText = (event) => {

        let target = event.target;
        let classlist = target.classList.toString();
        
        let typedValue = target.value; 

        if (classlist.indexOf("username") >= 0) {
            this.setState({
                userName:typedValue
            })
        } else if(classlist.indexOf("password") >= 0) {
            this.setState({
                password:typedValue
            }) 
        }
    }

    LoginAdmin = () => {
        console.log(this.state);
        this.props.loginAdmin(this.state);
        this.props.history.push("/management")
    }

    render(){
        return(
            <div className={"container"}>
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div className="form-group">
                            <b>Username</b>
                            <br/>
                            <input type="text" className="form-control username" value={this.state.userName} 
                            placeholder="Username" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <b>Password</b>
                            <br/>
                            <input type="password" className="form-control password" value={this.state.password} 
                                placeholder="Password"
                                onChange={this.onChangeText} />
                        </div>
                    
                        {this.state._id}
                        <hr/>
                        <input type="button" className="btn btn-danger" value={"Login"} onClick={this.LoginAdmin}/>
                        <input type="button" className="btn btn-danger" value={"Register"} onClick={() => this.props.history.push("/registerAdmin")}/>
                        <br/>
                        <label></label>
                    </div>
                </div>
            </div>
        )
    }
}