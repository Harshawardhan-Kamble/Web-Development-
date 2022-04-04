const express=require('express')
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded())
app.get("/",function(request,respond){
    respond.sendFile(__dirname+"/index.html")
})
app.post("/",function(request,respond){
    var Weight=request.body.Weight;
    var Height=request.body.Height;
    var BMI =Math.floor( Weight/(Height*Height))
    respond.send("Your BMI is "+ BMI)
})
app.listen(3000,function(request,respond){
    console.log("Server 3000 started")
})