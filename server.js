const express = require('express')
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect(" mongodb://127.0.0.1:27017/UsernamesDB")

app.use("/",require("./routes/userRoute"));
 

app.listen(3001,function()
{
    console.log("Express server is running on port 3001")
})