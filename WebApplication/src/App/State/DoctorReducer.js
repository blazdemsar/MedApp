import * as ActionTypes from "./ActionTypes"; //alias import

const INITIAL_STATE = {
    doctor : {
        doctorId : 0,
        name : "",
        lastName : "",
        qualification : "",
        specialization : "",
        fee : 0
    },
    //loading : false,
    doctors : []
}

export default function doctorReducer(state=INITIAL_STATE, action) {
    console.log("Doctor Reducer : ", state);

    switch (action.type) {

        case ActionTypes.GET_DOCTORS_FULFILLED:
            console.log("Doctor Payload : ", action.payload.doctor);
            return {...state, doctors : action.payload}
        
        default:
            return state
    }
}