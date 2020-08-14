import {connect} from "react-redux"; 
import RecordsComponent from "../../Component/Records/RecordsComponent";

import {createRecord, getPatients, getDoctors} from "../../../State/Actions"; 

let mapStateToProps = (store)=> { //store can be named state as well
    return {
        record: store.record.record,
        doctors: store.doctor.doctors,
        patients: store.patient.patients
    }
}

//To make your component a publisher (you need to dispatch the action)
let mapDispatchToProps = (dispatch)=>{
    return {
        createRecord:(recordObject) => {
            dispatch(createRecord(recordObject));
        },
        getDoctors:() =>{
            dispatch(getDoctors())
        },
        getPatients:() =>{
            dispatch(getPatients())
        }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsComponent);