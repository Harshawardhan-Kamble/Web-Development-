var randomNumber1=1+Math.floor(Math.random()*6);
var randomImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);
var randomNumber2=1+Math.floor(Math.random()*6);
var randomImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
var title = document.querySelector("h1");
if(randomNumber1===randomNumber2){
    title.innerHTML="Tie";
}
else if(randomNumber1>randomNumber2){
    title.innerHTML="Player 1 wins";
}
else {
    title.innerHTML="Player 2 wins";
}
