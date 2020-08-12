import {connect} from  "react-redux";
import DisplayDoctorsComponent from "../../Component/Doctor/DisplayDoctorsComponent";

import {getDoctors} from "../../../State/Actions";

let mapStateToProps = (state)=>{
    return {
        doctors: state.doctor.doctors
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        getDoctors:() =>{
            dispatch(getDoctors())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayDoctorsComponent);