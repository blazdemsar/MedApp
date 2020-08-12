//all react-redux code comes here 
//this container is connector which connects basically maps store (state)
//can be used as props in our component

import {connect} from "react-redux"; //connects our react component with the store (state)
import PatientComponent from "../../Component/Patient/PatientComponent";//getting the react component so that we can publish and subcribe

import {createPatient} from "../../../State/Actions"; // use to dispatch the user data

//To make your component a subscriber of store (mapStoreToProps)
let mapStateToProps = (store)=> { //store can be named state as well
    return {
        patient: store.patient.patient
    }
}

//To make your component a publisher (you need to dispatch the action)
let mapDispatchToProps = (dispatch)=>{
    return {
        createPatient:(patientObject) => {
            dispatch(createPatient(patientObject));
        }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientComponent);