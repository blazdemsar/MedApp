let mongooseObject = require("mongoose"); // importing the mongoose module
let schemaObject = mongooseObject.Schema; // using schema class from mongoose

mongooseObject.connect("mongodb://127.0.0.1:27017/medapp");

let AdminModel = new schemaObject (
    {
        userName : {type:String, required:true},
        password : {type:String, required:true},
    },
    {
        versionKey : false
    }
);

let AdminCollection = mongooseObject.model("admin", AdminModel); // create an admin collection using AdminsCollection
module.exports = AdminCollection;