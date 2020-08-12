import {connect} from "react-redux"; 
import ManagementComponent from "../../Component/Management/ManagementComponent";

import {createDoctor, createPatient, createRecord} from "../../../State/Actions"; 

let mapStateToProps = (store) => { //store can be named state as well
    return {
        doctor : store.doctor.doctor,
        patient : store.patient.patient,
        record : store.record.record
    }
}

//To make your component a publisher (you need to dispatch the action)
let mapDispatchToProps = (dispatch)=>{
    return {
        createDoctor:(doctorObject) => {
            dispatch(createDoctor(doctorObject));
        },
        createPatient:(patienObject) => {
            dispatch(createPatient(patienObject));
        },
        createRecord:(recordObject) => {
            dispatch(createRecord(recordObject));
        }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagementComponent);