import {connect} from "react-redux"; 
import RecordsComponent from "../../Component/Records/RecordsComponent";

import {createRecord} from "../../../State/Actions"; 

let mapStateToProps = (store)=> { //store can be named state as well
    return {
        record: store.record.record
    }
}

//To make your component a publisher (you need to dispatch the action)
let mapDispatchToProps = (dispatch)=>{
    return {
        createRecord:(recordObject) => {
            dispatch(createRecord(recordObject));
        }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsComponent);