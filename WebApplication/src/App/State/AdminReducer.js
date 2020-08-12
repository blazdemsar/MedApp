import * as ActionTypes from "./ActionTypes"; //alias import

const INITIAL_STATE = {
    admin : {
        userName : "",
        password : ""
    },
    loading : false
}

export default function adminReducer(state=INITIAL_STATE, action) {
    console.log("Admin Reducer : ", state);

    switch (action.type) {

        case ActionTypes.ADD_ADMIN_TO_STORE:
            console.log("Admin Payload : ", action.payload.admin);

            return {...state, admin : action.payload.admin}
        
        default:
            return state
    }
}