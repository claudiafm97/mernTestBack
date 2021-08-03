const express=require('express');
require('dotenv').config();
const {dbConnection}=require('./database/config')

const app=express();
//DB
dbConnection();
//Public Dir.
app.use(express.static('public'))
//Parse to body json
app.use(express.json())

//Routes
app.use('/api',require('./routes/events'))


app.listen(process.env.PORT,()=>{
    console.log(`server eject${process.env.PORT}`)
})