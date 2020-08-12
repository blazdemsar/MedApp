import * as ActionTypes from "./ActionTypes"; //alias import

const INITIAL_STATE = {
    patient : {
        name : "",
        lastName : "",
        dob : "",
        address : "",
        disease : ""
    },
    patients : []
    //loading : false
}

export default function patientReducer(state=INITIAL_STATE, action) {
    console.log("Patient Reducer : ", state);

    switch (action.type) {

        case ActionTypes.GET_PATIENTS_FULFILLED:
            console.log("Patient Payload : ", action.payload.patient);

            return {...state, patients : action.payload}
        
        default:
            return state
    }
}