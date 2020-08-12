import {connect} from "react-redux"; 
import RegisterAdminComponent from "../../Component/Admin/RegisterAdminComponent";

import {registerAdmin} from "../../../State/Actions"; 

let mapStateToProps = (store)=> { //store can be named state as well
    return {
        admin: store.admin.admin
    }
}

//To make your component a publisher (you need to dispatch the action)
let mapDispatchToProps = (dispatch)=>{
    return {
        createAdmin:(adminObject) => {
            dispatch(registerAdmin(adminObject));
        }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAdminComponent);