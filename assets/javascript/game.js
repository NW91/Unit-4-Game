//JavaScript

//Crystal Values
var crystalBlueNum;
var crystalGreenNum;
var crystalYellowNum;
var crystalRedNum;
//Score Variables
var gameStarted = false;
var winNum = 0;
var loseNum = 0;
var playerScore = 0;
var randomNum;

//Loads the Page
$(document).ready(function() {
    startGame();

//Click listeners for all 4 crystals
    $("#blue-crystal-icon-img").on("click", function() {
        playerScore += crystalBlueNum;
        $("#total-player-num").text(playerScore);
        $("won-lost-notifier").text("");
        setWinLose();
    });

    $("#green-crystal-icon-img").on("click", function() {
        playerScore += crystalGreenNum;
        $("#total-player-num").text(playerScore);
        $("won-lost-notifier").text("");
        setWinLose();
    });

    $("#yellow-crystal-icon-img").on("click", function() {
        playerScore += crystalYellowNum;
        $("#total-player-num").text(playerScore);
        $("won-lost-notifier").text("");
        setWinLose();
    });

    $("#red-crystal-icon-img").on("click", function() {
        playerScore += crystalRedNum;
        $("#total-player-num").text(playerScore);
        $("won-lost-notifier").text("");
        setWinLose();
    });
});

//Start the Game
function startGame() {
    gameStarted = true;

//Generates random achievement score at the start between 19 and 120
randomNum = Math.floor(Math.random() * 121)
while (randomNum < 19) {
    randomNum = Math.floor(Math.random() * 121)
}
$("#random-given-score").text(randomNum);

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
$("#total-player-num").text(playerScore);
}

//Win-Loss Function Recorder and Restarts the Game
function setWinLose() {
    if (playerScore === randomNum) {
        winNum++;
        $("#win-num").text(winNum);
        $("#won-lost-notifier").text("Congratulations, you've won this round! Keep on playing!");
        startGame();
    }
    else if (playerScore > randomNum) {
        loseNum++;
        $("#lose-num").text(loseNum);
        $("#won-lost-notifier").text("Sorry, but you've lost this round! Please try again!");
        startGame();
    }
}
