import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware"; //make aync call to api
import thunk from 'redux-thunk';//make aync call to api

import doctor from "./App/State/DoctorReducer";
import patient from "./App/State/PatientReducer";
import admin from "./App/State/AdminReducer";
import record from "./App/State/RecordReducer";

let myLogger = () => (next) => (action) => {
    console.log("Logged Action : Store File ", action);

    next(action);
};

export default createStore(

    combineReducers( // club all reducers in the application
    {
        doctor, // property shorthand in JS
        patient,
        admin,
        record
    }),
    {},
    
    applyMiddleware(myLogger, thunk, promise) // adding middlewares we are using in our app
)