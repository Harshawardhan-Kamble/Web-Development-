const express=require("express");
const https=require('https')
const bodyParser=require("body-parser")
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
  const query=req.body.cityName
  const appid="830c7dc6201b76ef714a1184d7fd202d"
  const unit="metric"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+appid+"&units="+unit
  https.get(url,function(response){
    console.log(response.statusCode);

  response.on("data",function(data){
    const weatherData=JSON.parse(data)
    const icon=weatherData.weather[0].icon
    const imageURl="http://openweathermap.org/img/wn/"+icon+"@2x.png"
    res.write("<h1>The weather description is "+weatherData.weather[0].description + "</h1>")
    res.write("<h1>The temperature in " + query +" is " +(weatherData.main.temp) +". </h1>")
    res.write("<img src="+ imageURl+">");
    res.send()
  })
  })
})
app.listen(3000,function(){
  console.log("Server Started on port 3000")
})
