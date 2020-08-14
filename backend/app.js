const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');

 
const app= new express();

const port=3000;

app.get('/',(req,res)=>{
    res.send("helooworld");
})
app.listen(port,()=>{
    console.log('server started at port' +port);
});