import {connect} from  "react-redux";
import DisplayPatientsComponent from "../../Component/Patient/DisplayPatientsComponent";

import {getPatients} from "../../../State/Actions";

let mapStateToProps = (state)=>{
    return {
        patients: state.patient.patients
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        getPatients:() =>{
            dispatch(getPatients())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPatientsComponent);