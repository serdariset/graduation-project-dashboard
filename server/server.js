const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

//Routes
const user = require('./routes/User')


//Configurations
const app = express()
dotenv.config()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//API Requests
app.use('/user',user)

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