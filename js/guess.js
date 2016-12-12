/**
 * Created by fanem on 30.11.16.
 */
var answer = parseInt(Math.random() * 100);
var count = 1;
function playGuess() {
    var right = document.getElementById('congrats'),
        userAnswer = document.getElementById("numberUser").value,
        newGame = document.getElementById('submit');
    userAnswer = parseInt(userAnswer);
    if (answer === null) {
        document.getElementById('numberUser').value = '';
        right.innerHTML = '';
        count = 1;
        answer = parseInt(Math.random() * 100);
        newGame.innerHTML = 'Answer';
        newGame.removeAttribute("data-toggle");
    } else {
        newGame.setAttribute('data-toggle', 'modal');
        var check = document.getElementById("cnt");
        if (userAnswer > answer) {
            check.innerHTML = 'Too much';
            count++;
        } else if (userAnswer < answer) {
            check.innerHTML = 'Too low';
            count++;
        } else if (userAnswer == answer) {
            right.innerHTML = 'Congratulations';
            check.innerHTML = 'You are right. You guessed using ' + count + ' attempts';
            var right2 = document.getElementById('submit');
            right2.innerHTML = 'Play again';
            answer = null;
        } else {
            check.innerHTML = 'You must enter the number';
        }
        document.getElementById('numberUser').value = '';
    }
}

function startGame() {
    var visible = document.getElementById('game').hidden,
        vis = document.getElementById('strtGame'),
        game = document.getElementById('game');
    if (visible) {
        game.removeAttribute("hidden");
        vis.innerHTML = 'Stop game';
    } else {
        game.setAttribute("hidden", "hidden");
        vis.innerHTML = 'Start game';
    }
}

function checkInputs() {
    var usAns = document.getElementById('numberUser').value,
        removeAttr = document.getElementById('submit');
    if(usAns.length != 0) {
        removeAttr.removeAttribute("disabled");
    } else {
        removeAttr.setAttribute('disabled', 'disabled');
    }
}