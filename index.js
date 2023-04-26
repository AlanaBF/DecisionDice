  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage = "dice" + randomNumber1 + ".png";
  let randomImageSource = "images/" + randomDiceImage;
  let img1 = $("img")[0];
  $(img1).attr("src", randomImageSource);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage2 = "dice" + randomNumber2 + ".png";
  let randomImageSource2 = "images/" + randomDiceImage2;
  let img2 = $("img")[1];
  $(img2).attr("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    $("h1").html("Player 1 wins");
  } else if (randomNumber2 > randomNumber1) {
    $("h1").html("Player 2 wins");
  } else {
    $("h1").html("Draw");
  }