let mongooseObject = require("mongoose"); // importing the mongoose module
let schemaObject = mongooseObject.Schema; // using schema class from mongoose

mongooseObject.connect("mongodb://127.0.0.1:27017/medapp");

let PatientModel = new schemaObject (
    {
        patientId : {type:Number, required:true},
        name : {type:String, required:true},
        lastName : {type:String, required:true},
        dob : {type:Date, required:true},
        address : {type:String, required:true},
        disease : {type:String, required:true},
    },
    {
        versionKey : false
    }
);

let PatientCollection = mongooseObject.model("patient", PatientModel); // create a patient collection using PatientCollection
module.exports = PatientCollection;