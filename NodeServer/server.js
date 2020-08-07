const express = require("express");
const app = express(); // this sets the base for our application and creates an express app
const router = require("./router");
const cors = require("cors"); // middleware to respond to cross origin requests - like to 9092 from 9090 port
const bodyParser = require("body-parser");

app.locals.port = 9090;
app.use(cors()); // using cors: to allow cross origin requests basically to read and respond to different domains
app.use(bodyParser.urlencoded({extended:false}));
app.use("/static", express.static("Public")); // serve static files like images css using static middle ware
//app.use('/images', express.static('webProject/images'));
app.use(bodyParser.json({limit:"2mb", extended:false}));
app.use("/", router);
app.listen(app.locals.port); // localhost:9090
