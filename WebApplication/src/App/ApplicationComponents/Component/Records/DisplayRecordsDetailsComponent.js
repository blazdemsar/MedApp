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
        return(
            <React.Fragment>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={this.showHideDetails}>
                        <label><b>{doctor.name} {doctor.lastName}</b></label>                   
                        {this.state.showDetails ?
                        <ul>
                            <li className="list-group-item list-group-item-danger">Qualification : {doctor.qualification}</li>
                            <li className="list-group-item list-group-item-danger">Specialization : {doctor.specialization}</li>
                            <li className="list-group-item list-group-item-danger">Fee : {doctor.fee}</li>
                        </ul>
                        :
                        ""}
                    </li>
                </ul>
            </React.Fragment>
        )
    }

}