import * as ActionTypes from "./ActionTypes"; //alias import

export const addPatientToStore = (patient) => ({        
    type: ActionTypes.ADD_PATIENT_TO_STORE,
    payload: {patient}
})

export const addDoctorToStore = (doctor) => ({        
    type: ActionTypes.ADD_DOCTOR_TO_STORE,
    payload: {doctor}
})

export const addAdminToStore = (admin) => ({        
    type: ActionTypes.ADD_ADMIN_TO_STORE,
    payload: {admin}
})

export const loginAdmin = (adminObject) => {
    console.log('Logging in the admin...');

    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call : to save data to the server or fetch is from the server
        // thunk shall call
        console.log("called by thunk");
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/loginAdmin",//uri
            {
                method: 'POST', //rest method type to get the data
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adminObject)
            })
        .then (response => response.json()) //response from the server/ api
        .then (adminresp => {
            console.log("response ", adminresp);
            let action = addAdminToStore(adminresp);
            dispatch(action); // it will keep the current context to update the user object and takes it to the reducer
            
            //dispatch(loading(false));
            //dispatch(getUserCart(adminresp._id));
        })
        .catch((err)=>{
            console.log("Error While Loggin In...", err)
        })
    }
}

export const registerAdmin = (adminObject) => {
    console.log("Registering Admin ", adminObject);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/registerAdmin",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminObject)
        })
        .then(adminresp => adminresp.json())
        .then((adminresp)=>{
            console.log("response ", adminresp);
            //dispatch(loading(false));
            //dispatch(fetchProducts());
        })
        .catch((err)=>{
            console.log("Error While Registering", err)
        })
    }
}

export const createDoctor = (doctorObject) => {
    console.log("Creating Doctor ", doctorObject);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/createDoctor",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(doctorObject)
        })
        .then(doctorresp => doctorresp.json())
        .then((doctorresp)=>{
            console.log("response ", doctorresp);
            //dispatch(loading(false));
            //dispatch(fetchProducts());
        })
        .catch((err)=>{
            console.log("Error While Creating A Doctor", err)
        })
    }
}

export const createPatient = (patientObject) => {
    console.log("Creating Patient ", patientObject);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/createPatient",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientObject)
        })
        .then(patientresp => patientresp.json())
        .then((patientresp)=>{
            console.log("response ", patientresp);
            //dispatch(loading(false));
            //dispatch(fetchProducts());
        })
        .catch((err)=>{
            console.log("Error While Creating A Patient", err)
        })
    }
}

export const createRecord = (recordObject) => {
    console.log("Creating Record ", recordObject);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/createRecord",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(recordObject)
        })
        .then(recordresp => recordresp.json())
        .then((recordresp)=>{
            console.log("response ", recordresp);
            //dispatch(loading(false));
            //dispatch(fetchProducts());
        })
        .catch((err)=>{
            console.log("Error While Creating A Record", err)
        })
    }
}

export const getDoctors = () => ({    
    type : ActionTypes.GET_DOCTORS,
    payload: {
            promise: new Promise((resolve, reject) => { 
                fetch("http://localhost:9090/api/getDoctors", {
                    method: 'GET'
                }).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(responseDoctors => {
                    // want to updatePath for the route here:
                    //dispatch(updatePath('/'));
                    resolve(responseDoctors)
                })
                .catch(error => {
                    reject(error);
                    //dispatch(error); -- promise Issue                        
                })
            })
        }       
});

export const getPatients = () => ({    
    type : ActionTypes.GET_PATIENTS,
    payload: {
            promise: new Promise((resolve, reject) => { 
                fetch("http://localhost:9090/api/getPatients", {
                    method: 'GET'
                }).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(responsePatients => {
                    // want to updatePath for the route here:
                    //dispatch(updatePath('/'));
                    resolve(responsePatients)
                })
                .catch(error => {
                    reject(error);
                    //dispatch(error); -- promise Issue                        
                })
            })
        }       
});

export const getRecords = () => ({    
    type : ActionTypes.GET_RECORDS,
    payload: {
            promise: new Promise((resolve, reject) => { 
                fetch("http://localhost:9090/api/getRecords", {
                    method: 'GET'
                }).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(responseRecords => {
                    // want to updatePath for the route here:
                    //dispatch(updatePath('/'));
                    resolve(responseRecords)
                })
                .catch(error => {
                    reject(error);
                    //dispatch(error); -- promise Issue                        
                })
            })
        }       
});

