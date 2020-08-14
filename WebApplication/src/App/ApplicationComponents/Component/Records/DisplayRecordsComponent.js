"use strict";
import React, {Component} from "react";
import DisplayRecordsDetailsComponent from "../Records/DisplayRecordsDetailsComponent"

export default class DisplayRecords extends Component{
    constructor(props, context){
        super(props, context);
    }

    componentDidMount(){
        console.log("Hello");
        this.props.getRecords();
    }

    render(){

        let records = this.props.records
        console.log("Records: ", records)
        return(
            <div className={"container"}>
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div>
                            <h2>Records In The Database:</h2>
                            { records.length >= 1 ?
                                records.map((record) => {
                                    return <DisplayRecordsDetailsComponent record={record} key={record._id}/>;
                                })
                                :
                                <p>There Are Currently No Records In The Database!</p>
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