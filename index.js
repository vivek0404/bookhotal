const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv =require('dotenv');   
const app = express();
app.use(cookieParser());
app.use(express.json());
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const hotelsRoute = require('./routes/hotels');
const roomsRoute = require('./routes/rooms');

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})
mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected!");
})
mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected!");
})

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "somthing went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    });   
})

app.listen(8000, ()=>{
    console.log('server is runing');
})