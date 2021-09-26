var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource1 = "images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage;

document.querySelector(".img2").setAttribute("src",randomImageSource2);



if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
