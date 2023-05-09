const express = require('express')
const mongoose = require('mongoose')
const users = require("./routes/userRoutes")
const cors =  require ('cors');

const app = express()
app.use(cors());

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/users', users)

 

mongoose.connect(
    "mongodb+srv://tom:jerry@mern-project.jum2bo6.mongodb.net/Mern_First_Project?retryWrites=true&w=majority"
    )
    .then(() => {
        //listen for requests
        app.listen(3006, () =>{
        console.log("connected to DB and listening on port----",3006 )
    })
    })
    .catch((error) => {
        console.log(error)
    })