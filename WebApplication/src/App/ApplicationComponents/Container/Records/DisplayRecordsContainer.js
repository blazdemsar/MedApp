import {connect} from  "react-redux";
import DisplayRecordsComponent from "../../Component/Records/DisplayRecordsComponent";

import {getRecords} from "../../../State/Actions";

let mapStateToProps = (state)=>{
    return {
        records: state.record.records
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        getRecords:() =>{
            dispatch(getRecords())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRecordsComponent);