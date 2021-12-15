const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

//Routes
const user = require('./routes/User')
const info = require('./database/info/info')
const list = require('./database/list/list')

//Configurations
const app = express()
dotenv.config()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//API Requests
app.use('/user',user)
app.use('/info',info)
app.use('/list',list)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname+"/public/"))
    app.get("*",(req,res)=>{
        res.sendFile(__dirname+"/public/index.html")
    })
}

//MongoDB Connection
mongoose.connect(process.env.MONGODB_CLUSTER,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log('MongoDB connection successfully')
})




const port = process.env.SERVER_PORT

app.listen(port,()=>{
    console.log(`App started on port ${port}`)
})