import {connect} from "react-redux"; 
import DoctorComponent from "../../Component/Doctor/DoctorComponent";

import {createDoctor} from "../../../State/Actions"; 

let mapStateToProps = (store)=> { //store can be named state as well
    return {
        doctor: store.doctor.doctor
    }
}

//To make your component a publisher (you need to dispatch the action)
let mapDispatchToProps = (dispatch)=>{
    return {
        createDoctor:(doctorObject) => {
            dispatch(createDoctor(doctorObject));
        }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorComponent);