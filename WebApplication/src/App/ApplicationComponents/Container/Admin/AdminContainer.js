import {connect} from "react-redux"; 
import AdminComponent from "../../Component/Admin/AdminComponent";

import {loginAdmin} from "../../../State/Actions"; 

let mapStateToProps = (store)=> { //store can be named state as well
    return {
        admin: store.admin.admin
    }
}

//To make your component a publisher (you need to dispatch the action)
let mapDispatchToProps = (dispatch)=>{
    return {
        loginAdmin:(adminObject) => {
            dispatch(loginAdmin(adminObject));
        }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent);