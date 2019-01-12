//JavaScript

//Global Variables like scores and values

var crystalBlueNum;
var crystalGreenNum;
var crystalYellowNum;
var crystalRedNum;
var playerScore = 0;
var winNum = 0;
var loseNum = 0;
var randomNum = "";

$(document).ready(function() {
    startGame();

//Random Crystal values between 1 to 12
var crystalBlueNum = Math.floor(Math.random() * 11+1);
var crystalGreenNum = Math.floor(Math.random() * 11+1);
var crystalYellowNum = Math.floor(Math.random() * 11+1);
var crystalRedNum = Math.floor(Math.random() * 11+1);

//Generates random score at the start between 19 and 120
var randomNum = Math.floor(Math.random)() * 101+19)
$("#randomNumber").text(Random);

//Click listeners for all 4 crystals
$("#Blue-Crystal").on("click", function(){
    totalScoreNum += crystalBlueNum;
    $("#total-score-num").text(totalScoreNum);
    $("win-lose-message").text("");
    setWinLose();
});

$("#Green-Crystal").on("click", function(){
    totalScoreNum += crystalGreenNum;
    $("#total-score-num").text(totalScoreNum);
    $("win-lose-message").text("");
    setWinLose();
});

$("#Yellow-Crystal").on("click", function(){
    totalScoreNum += crystalYellowNum;
    $("#total-score-num").text(totalScoreNum);
    $("win-lose-message").text("");
    setWinLose();
});

("#Red-Crystal").on("click", function(){
    totalScoreNum += crystalRedNum;
    $("#total-score-num").text(totalScoreNum);
    $("win-lose-num").text(totalScoreNum);
    setWinLose();
});

}