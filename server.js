const express=require("express");
const fs=require("fs");
const path = require("path");

const app=express();

app.set('view engine','ejs');
/// VIEWS FOLDER BY DEFAULT VIEWS FOLDER MAIN HI FILES KO SEARCH KARAT AH
// AGAR HAME KOI FOLDER USE KARNA HT TO HAM 
// app.set('views':'templates')

console.log(app.get('views'));

app.use(express.static('public'));

// AISE HAM TAB LIKHEGAY JAB  HAM EJS KA USE NAHI KAR RAHE HOGAY

// app.get("/",function(req,res)
// {
//     res.sendFile(path.join(__dirname,'/index.html'));
// });
// app.get("/about",function(req,res)
// {
//     res.sendFile(path.join(__dirname,'/about.html'));
// });


// AFTER INSTALLING AJS TEMOLATE
app.get("/",function(req,res)
{
    res.render("index",{
        Title:"elllo"
    });
});
app.get("/about",function(req,res)
{
    res.render("about");
});

app.listen(3000,()=>
{
    console.log("Running on port 3000");
});