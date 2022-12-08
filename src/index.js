const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./routes/route.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://NikitaRoy23:Z3jVv5PFclEHjgDs@cluster0.pmjudc4.mongodb.net/cryptocurrency'", { useNewUrlParser: true })
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


// const express=require("express");
// const mongoose=require("mongoose")
// const route =require("./route/route.js");
// const app=express();


// app.use(express.json());


// mongoose.connect("mongodb+srv://NikitaRoy23:Z3jVv5PFclEHjgDs@cluster0.pmjudc4.mongodb.net/internshipproject",{
// useNewUrlParser: true
// })
// .then(()=>console.log("MongoDB is connected"))
// .catch((error)=>console.log(error));


// app.use("/",route);

// app.listen( 3000, function () {
//     console.log("Express App Running on Port 3000");
//   });




