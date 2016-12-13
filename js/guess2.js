/**
 * Created by fanem on 30.11.16.
 */
var answer = parseInt(Math.random() * 100);
var countOfAttempts = 1;
var player = 1;

var btn = document.createElement ('input');
btn.type = 'button';
btn.id = 'btnPlayAgain';
btn.value = 'Play again!';
btn.className = 'btn btn-default';
btn.onclick = function newGame() {
    var answerButton = document.getElementById('submit'),
        congratsElement = document.getElementById('congrats'),
        turn = document.getElementById('player'),
        playAgainButton = document.getElementById("btnPlayAgain");
    congratsElement.innerHTML = '';
    player = 1;
    countOfAttempts = 1;
    turn.innerHTML = "Enter the number from 1 to 100. " + player + " player's turn.";
    answer = parseInt(Math.random() * 100);
    answerButton.removeAttribute("data-toggle");
    answerButton.setAttribute('disabled', 'disabled');
    playAgainButton.parentNode.removeChild(playAgainButton);
};

function playGuess() {
    var congratsElement = document.getElementById('congrats'),
        userAnswerValue = document.getElementById("numberUser").value,
        hint = document.getElementById("hintsAndResult"),
        answerButton = document.getElementById('submit'),
        turn = document.getElementById('player');

    userAnswerValue = parseInt(userAnswerValue);
    answerButton.setAttribute('data-toggle', 'modal');
    if (userAnswerValue > answer) {
        hint.innerHTML = 'Too much';
    } else if (userAnswerValue < answer) {
        hint.innerHTML = 'Too low';
    } else if (userAnswerValue == answer) {
        congratsElement.innerHTML = 'Congratulations';
        hint.innerHTML = 'You are right. Player ' + player + ' win. \n You guessed using ' + countOfAttempts + ' attempts';
        document.getElementById ('buttonPlay').appendChild (btn)
    } else {
        hint.innerHTML = 'You must enter the number';
    }

    if (player == 1) {
        player = 2;
    } else {
        player = 1;
        countOfAttempts++;
    }
    turn.innerHTML = "Enter the number from 1 to 100. " + player + " player's turn.";
    document.getElementById('numberUser').value = '';
}

function startGame() {
    var gameHidden = document.getElementById('game').hidden,
        startOrStopGameButton = document.getElementById('strtGame'),
        game = document.getElementById('game'),
        turn = document.getElementById('player');
    if (gameHidden) {
        game.removeAttribute("hidden");
        startOrStopGameButton.innerHTML = 'Stop game';
        turn.innerHTML = "Enter the number from 1 to 100. " + player + " player's turn.";
    } else {
        game.setAttribute("hidden", "hidden");
        startOrStopGameButton.innerHTML = 'Start game';
    }
}