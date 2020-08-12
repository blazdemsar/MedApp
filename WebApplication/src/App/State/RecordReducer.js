import * as ActionTypes from "./ActionTypes"; //alias import

const INITIAL_STATE = {
    record : {
        patientName : "",
        patientLastName : "",
        doctorName : "",
        doctorLastName : "",
        admission : "",
        diagnosis : "",
        fee : ""
    },
    //loading : false,
    records : []
}

export default function recordReducer(state=INITIAL_STATE, action) {
    console.log("Record Reducer : ", state);

    switch (action.type) {

        case ActionTypes.GET_RECORDS_FULFILLED:
            console.log("Record Payload : ", action.payload.record);
            return {...state, records : action.payload}
        
        default:
            return state
    }
}