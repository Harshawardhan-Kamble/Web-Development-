const express=require('express')
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(request,respond){
    respond.sendFile(__dirname+"/index.html")
})
app.post("/",function(request,respond){
    var Weight=request.body.Weight;
    var Height=request.body.Height;
    var BMI =Math.round(( Weight/(Height*Height))*100)/(100)
    if(BMI<18.5){
        respond.send("<h1>Your BMI is "+BMI+". <p>You are Underweight</p></h1>")
    }
    else if(BMI>18.5 && BMI<24.9){
        respond.send("<h1>Your BMI is "+BMI+". <p>You are Healthy</p></h1>")
    }
    else if(BMI>25 && BMI<29.9){
        respond.send("<h1>Your BMI is "+BMI+". <p>You are Overweight</p></h1>")
    }
    else{
        respond.send("<h1>Your BMI is "+BMI+". <p>You are Obese</p></h1>")
    }
})
app.listen(3000,function(request,respond){
    console.log("Server 3000 started")
})