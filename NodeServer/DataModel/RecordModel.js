let mongooseObject = require("mongoose"); // importing the mongoose module
let schemaObject = mongooseObject.Schema; // using schema class from mongoose

mongooseObject.connect("mongodb://127.0.0.1:27017/medapp");

let RecordModel = new schemaObject (
    {
        patientName : {type:String, required:true},
        patientLastName : {type:String, required:true},
        doctorName : {type:String, required:true},
        doctorLastName : {type:String, required:true},
        admission : {type:String, required:true},
        diagnosis : {type:String, required:true},
        fee : {type:Number, required:true}
    },
    {
        versionKey : false
    }
);

let RecordCollection = mongooseObject.model("record", RecordModel); // create a doctor collection using DoctorCollection
module.exports = RecordCollection;