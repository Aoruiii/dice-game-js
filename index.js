// change to a random dice
randomNumber1 = Math.floor(Math.random()*6)+1;
randomNumber2 = Math.floor(Math.random()*6)+1;
randomSrc1 = "./images/dice" + randomNumber1+ ".png";
randomSrc2 = "./images/dice" + randomNumber2+ ".png";
document.querySelector(".img1").setAttribute("src",randomSrc1);
document.querySelector(".img2").setAttribute("src",randomSrc2);

// change the title to display the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩Play1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Play2 Wins!🚩";
} else {
    document.querySelector(".container h1").innerHTML = "Draw!";
}