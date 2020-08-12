const express = require("express")
const routes = express.Router({caseSensitive:true}),
PatientModel = require("./DataModel/PatientModel"),
DoctorModel = require("./DataModel/DoctorModel"),
AdminModel = require("./DataModel/AdminModel");

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
routes.post("/api/loginAdmin", (req, res) => {
    
    console.log(req.body);
    
    AdminModel.findOne({userName : req.body.userName} && {password : req.body.password}, (err, adminObject) => {
        if (err != null) {
            console.log("Error Logging In The Admin: ", err);
            res.send({"Error Logging In The Admin: " : err});
        } else if (adminObject) {
            res.json(adminObject);
        }
    })
})

// Create admin account
routes.post("/api/registerAdmin", (req, res) => {
    let adminObject = new AdminModel(req.body);

    adminObject.save((err, data, next)=>{        
        if (err) {
            res.send("Error Creating an Admin Account : "+ err);
        }      
        res.json(data);
    });
})

// Find doctors
routes.get("/api/getDoctors", (req, res) => {
    
    console.log(req.body);
    
    DoctorModel.find((err, data, next) =>{
        console.log("Data :", err);

        err ? 
        res.send({"erro": err}) 
        :
        res.send(
            data
        )
    })
})

// Find patients
routes.get("/api/getPatients", (req, res) => {
    
    console.log(req.body);
    
    PatientModel.find((err, data, next) =>{
        console.log("Data :", err);

        err ? 
        res.send({"erro": err}) 
        :
        res.send(
            data
        )
    })
})

// Create new doctors
routes.post("/api/createDoctor", (req, res) => {
    let doctorObject = new DoctorModel(req.body);

    doctorObject.save((err, data, next)=>{        
        if (err) {
            res.send("Error Saving A Doctor : "+ err);
        }      
        res.json(data);
    });
})


module.exports = routes;