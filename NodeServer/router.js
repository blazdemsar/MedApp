const express = require("express")
const routes = express.Router({caseSensitive:true}),
PatientModel = require("./DataModel/PatientModel"),
DoctorModel = require("./DataModel/DoctorModel"),
AdminModel = require("./DataModel/AdminModel");

// Find a patient
routes.get("/api/getPatient", (req, res) => {
    
    console.log(req.body);
    
    PatientModel.findOne({name : req.body.name}, (err, patientObject) => {
        if (err != null) {
            res.send({"Err:" : err});
        } else if (patientObject) {
            res.json(patientObject);
        }
    })
})

// Create new patients
routes.post("/api/createPatient", (req, res) => {
    
    let patientObject = new PatientModel(req.body);

    patientObject.save((err, data, next)=>{        
        if (err) {
            res.send("Error Saving The Patient : "+ err);
        }      
        res.json(data);
    });
})

// Login as admin
routes.post("/api/signInAdmin", (req, res) => {
    
    console.log(req.body);
    
    AdminModel.findOne({userName : req.body.userName} && {password : req.body.password}, (err, adminObject) => {
        if (err != null) {
            console.log("Error : ", err);
            res.send({"Err:" : err});
        } else if (adminObject) {
            res.json(adminObject);
        }
    })
})

// Create admin account
routes.post("/api/createAdmin", (req, res) => {
    let adminObject = new AdminModel(req.body);

    adminObject.save((err, data, next)=>{        
        if (err) {
            res.send("Error Creating an Admin Account : "+ err);
        }      
        res.json(data);
    });
})

// Find a doctor
routes.post("/api/getDoctor", (req, res) => {
    
    console.log(req.body);
    
    DoctorModel.findOne({name : req.body.name} && {lastName : req.body.lastName}, (err, doctorObject) => {
        if (err != null) {
            console.log("Error : ", err);
            res.send({"Err:" : err});
        } else if (doctorObject) {
            res.json(doctorObject);
        }
    })
})

// Create new doctors
routes.post("/api/createDoctor", (req, res) => {
    let doctorObject = new DoctorModel(req.body);

    doctorObject.save((err, data, next)=>{        
        if (err) {
            res.send("Error Creating an Admin Account : "+ err);
        }      
        res.json(data);
    });
})


module.exports = routes;