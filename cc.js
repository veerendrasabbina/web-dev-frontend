var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages = "dice" + randomNumber1 + ".png";
var randomImageSource = "css/images/" + randomDiceImages;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "css/images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player 1 won!";
}
else if(randomNumber2 > randomNumber1){
     document.querySelector("h1").innerHTML="player 2 won!";
}
else{
     document.querySelector("h1").innerHTML="draw!";
}