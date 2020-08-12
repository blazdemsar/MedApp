let mongooseObject = require("mongoose"); // importing the mongoose module
let schemaObject = mongooseObject.Schema; // using schema class from mongoose

mongooseObject.connect("mongodb://127.0.0.1:27017/medapp");

let DoctorModel = new schemaObject (
    {
        name : {type:String, required:true},
        lastName : {type:String, required:true},
        qualification : {type:String, required:true},
        specialization : {type:String, required:true},
        fee : {type:Number, required:true}
    },
    {
        versionKey : false
    }
);

let DoctorCollection = mongooseObject.model("doctor", DoctorModel); // create a doctor collection using DoctorCollection
module.exports = DoctorCollection;