const express=require("express");
const fs=require("fs");
const path = require("path");

const app=express();

app.set('view engine','ejs');
/// VIEWS FOLDER BY DEFAULT VIEWS FOLDER MAIN HI FILES KO SEARCH KARAT AH
// AGAR HAME KOI FOLDER USE KARNA HT TO HAM 
// app.set('views':'templates');

console.log(app.get('views'));
app.use(express.static('public'));

app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.get("/about",function(req,res)
{
    res.sendFile(path.join(__dirname,'/about.html'));
});

app.listen(3000,()=>
{
    console.log("Running on port 3000");
});