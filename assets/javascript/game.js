//JavaScript

//Crystal Values
var crystalBlueNum;
var crystalGreenNum;
var crystalYellowNum;
var crystalRedNum;
//Score Variables
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
    playerScore += crystalBlueNum;
    $("#playerScore").text(playerScore);
    $("wonLostNotifier").text("");
    setWinLose();
});

$("#Green-Crystal").on("click", function(){
    playerScore += crystalGreenNum;
    $("#playerScore").text(playerScore);
    $("wonLostNotifier").text("");
    setWinLose();
});

$("#Yellow-Crystal").on("click", function(){
    playerScore += crystalYellowNum;
    $("#playerScore").text(playerScore);
    $("wonLostNotifier").text("");
    setWinLose();
});

("#Red-Crystal").on("click", function(){
    playerScore += crystalRedNum;
    $("#playerScore").text(playerScore);
    $("wonLostNotifier").text("");
    setWinLose();
});

//Win-Loss Function Recorder and Restarts the Game
function setWinLose(){
    if (playerScore === randomNum) {
        winNum++;
        $("#win-num").text(winNum);
        $("#wonLostNotifier").text("Congratulations, you've won this round! Keep on playing!");
        startGame();
    }
    else if (playerScore > randomNum) {
        loseNum++;
        $("#lose-num").text(loseNum);
        $("wonLostNotifier").text("Sorry but you've lost this round! Please try again!");
        startGame();
    }

}