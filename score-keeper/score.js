var playerOneScore = 0;
var playerTwoScore = 0;

var playerOneButton = document.getElementById("p1Bt");
var playerTwoButton = document.getElementById("p2Bt");
var resetButton = document.getElementById("rBt");
var numInput = document.querySelector("input");
var playingTo = document.querySelector("p span");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var maxScore = 5;


numInput.addEventListener("change", function(){
  maxScore = numInput.value;
  playingTo.textContent = maxScoreq;
});

playerOneButton.addEventListener("click", function(){
  if(!gameOver){
    playerOneScore++;
    p1Display.innerHTML = playerOneScore;
    if(playerOneScore >= maxScore){
      p1Display.style.color = "green";
      gameOver = true;
    }
  }
});
playerTwoButton.addEventListener("click", function(){
  if(!gameOver){
    playerTwoScore++;
    p2Display.innerHTML = playerTwoScore;
    if(playerTwoScore >= maxScore){
      p2Display.style.color = "green";
      gameOver = true;
    }
  }
});
resetButton.addEventListener("click",reset);

function reset(){
  p1Display.style.color = "black";
  p2Display.style.color = "black";
  playerOneScore = 0;
  playerTwoScore = 0;
  p1Display.innerHTML = playerOneScore;
  p2Display.innerHTML = playerTwoScore;
  gameOver = false;
  console.log(reset);
}
