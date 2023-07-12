document.querySelector("button").addEventListener("click" , handclick);

function handclick() {
    var buttonInnerHTML = this.innerHTML;
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceeImg = "Dicee" + randomNum1 + ".png";
    var randomImgsrc = "Image/" + randomDiceeImg;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImgsrc);


    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceeImg2 = "Dicee" + randomNum2 + ".png";
    var randomImgsrc2 = "Image/" + randomDiceeImg2;

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImgsrc2);

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins! ";
    }
    else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! ";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw! ";
    }
    buttonAnimation(buttonInnerHTML);
}

function buttonAnimation() {
    var activeButton = document.querySelector("button");
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}
