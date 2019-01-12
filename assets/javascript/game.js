//JavaScript

//Crystal Values
var crystalBlueNum;
var crystalGreenNum;
var crystalYellowNum;
var crystalRedNum;
//Score Variables
var gameStarted = false;
var playerScore = 0;
var winNum = 0;
var loseNum = 0;
var randomNum;

$(document).ready(function() {
    startGame();

//Start Game
    function startGame() {
        gameStarted = true;

//Generates random score at the start between 19 and 120
var randomNum = Math.floor(Math.random() * 121)
while (randomNum < 19) {
    randomNum = Math.floor(Math.random() * 121)
}
$("#randomGivenScore").text(randomNum);

//Code to make the crystal values all different from each other and assign the crystals random values between 1 to 12
while (
    crystalBlueNum === crystalGreenNum ||
    crystalBlueNum === crystalYellowNum ||
    crystalBlumNum === crystalRedNum ||
    crystalGreenNum === crystalYellowNum ||
    crystalGreenNum === crystalRedNum ||
    crystalYellowNum === crystalRedNum
) {

crystalBlueNum = 1 + Math.floor(Math.random() * 12);
crystalGreenNum = 1 + Math.floor(Math.random() * 12);
crystalYellowNum = 1 + Math.floor(Math.random() * 12);
crystalRedNum = 1 + Math.floor(Math.random() * 12);
}

//Player score starts at 0
playerScore = 0;
$("#playerScore").text(playerScore);
}

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

}