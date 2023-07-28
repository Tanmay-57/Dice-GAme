//alert("hello");

//Ply 1
var num= Math.floor(Math.random()*6) + 1;

var img= "images/dice"+ num +".png";

var img1= document.querySelectorAll("img")[0];

img1.setAttribute("src", img );

//ply 2
var num2= Math.floor(Math.random() * 6) +1;

var randomImg= "images/dice"+ num2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImg);

// document.querySelectorAll("img")[0].setAttribute("src","images/dice"+(Math.floor(Math.random()*6) + 1)+ ".png");

// document.querySelectorAll("img")[1].setAttribute("src","images/dice"+(Math.floor(Math.random()*6) + 1)+ ".png");

//ply 1 wins

if(num>num2){
    document.querySelector("h1").innerHTML= "Player 1 Wins!!!🏆"
}
else if(num<num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!🏆"
}
else{
    document.querySelector("h1").innerHTML= "It's a Draw!"
}