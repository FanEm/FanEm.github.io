/**
 * Created by fanem on 30.11.16.
 */
var answer = parseInt(Math.random() * 100);
var countOfAttempts = 1;

var btn = document.createElement ('input');
btn.type = 'button';
btn.id = 'btnPlayAgain';
btn.value = 'Play again!';
btn.className = 'btn btn-default';
btn.onclick = function newGame() {
    var answerButton = document.getElementById('submit'),
        congratsElement = document.getElementById('congrats'),
        playAgainButton = document.getElementById("btnPlayAgain");
    congratsElement.innerHTML = '';
    countOfAttempts = 1;
    answer = parseInt(Math.random() * 100);
    answerButton.removeAttribute("data-toggle");
    answerButton.setAttribute('disabled', 'disabled');
    playAgainButton.parentNode.removeChild(playAgainButton);
};

function playGuess() {
    var congratsElement = document.getElementById('congrats'),
        userAnswerValue = document.getElementById("numberUser").value,
        hint = document.getElementById("hintsAndResult"),
        answerButton = document.getElementById('submit');

    userAnswerValue = parseInt(userAnswerValue);
    answerButton.setAttribute('data-toggle', 'modal');
    if (userAnswerValue > answer) {
        hint.innerHTML = 'Too much';
        countOfAttempts++;
    } else if (userAnswerValue < answer) {
        hint.innerHTML = 'Too low';
        countOfAttempts++;
    } else if (userAnswerValue == answer) {
        congratsElement.innerHTML = 'Congratulations';
        hint.innerHTML = 'You are right. You guessed using ' + countOfAttempts + ' attempts';
        document.getElementById ('buttonPlay').appendChild (btn);
    } else {
        hint.innerHTML = 'You must enter the number';
    }
    document.getElementById('numberUser').value = '';
}


function startGame() {
    var gameHidden = document.getElementById('game').hidden,
        startOrStopGameButton = document.getElementById('strtGame'),
        game = document.getElementById('game');
    if (gameHidden) {
        game.removeAttribute("hidden");
        startOrStopGameButton.innerHTML = 'Stop game';
    } else {
        game.setAttribute("hidden", "hidden");
        startOrStopGameButton.innerHTML = 'Start game';
    }
}

function checkInputs() {
    var userAnswerValue = document.getElementById('numberUser').value,
        answerButton = document.getElementById('submit');
    if(userAnswerValue.length != 0) {
        answerButton.removeAttribute("disabled");
    } else {
        answerButton.setAttribute('disabled', 'disabled');
    }
}