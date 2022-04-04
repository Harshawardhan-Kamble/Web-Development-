const express=require('express');
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html")
})
app.post("/",function(req,res){
  var number1=Number(req.body.num1)
  var number2=Number(req.body.num2)
  var result=Number(number1 + number2)
  res.send("The result is"+ result)
})
app.listen(3000,function(){
  console.log("Server Started")
})
