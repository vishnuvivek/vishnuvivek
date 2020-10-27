var app =require("express");
var cal =require("./calc.js");
var express=require("express"); 
var app=express()


app.use(express.static('public'));
app.use(function(req, res, next){
    console.log("A new request received at " + Date.now());
    
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware
   
    next();
 });
//console.log(cal.add(10,30))

//console.log(result);
app.get('/data', function(req,res){ 
    var result = cal.add(20,30);
console.log(result)
   res.send('result is ='+ result);
})

app.listen(3000);
