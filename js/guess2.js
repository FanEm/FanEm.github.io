/**
 * Created by fanem on 30.11.16.
 */
var answer = parseInt(Math.random() * 100);
var count = 1;
var player = 2;
function playGuess() {
    var userAnswer = document.getElementById("numberUser").value,
        newGame = document.getElementById('submit'),
        turn = document.getElementById('player');
    userAnswer = parseInt(userAnswer);
    if (answer === null) {
        document.getElementById('numberUser').value = '';
        answer = parseInt(Math.random() * 100);
        newGame.innerHTML = 'Answer';
        count = 1;
        player = 1;
        turn.innerHTML = "Enter the number from 1 to 100. " + player + " player's turn.";
        newGame.removeAttribute("data-toggle");
    } else {
        var checkInput = document.getElementById("cnt");
        newGame.setAttribute('data-toggle', 'modal');
        turn.innerHTML = "Enter the number from 1 to 100. " + player + " player's turn.";
        if (userAnswer > answer) {
            checkInput.innerHTML = 'Too much';
        } else if (userAnswer < answer) {
            checkInput.innerHTML = 'Too low';
        } else if (userAnswer == answer) {
            var right = document.getElementById('congrats');
            right.innerHTML = 'Congratulations';
            player = player == 2 ? 1 : 2;
            checkInput.innerHTML = 'You are right. Player ' + player + ' win. \n You guessed using ' + count + ' attempts';
            newGame.innerHTML = 'Play again';
            answer = null;
        } else {
            checkInput.innerHTML = 'You must enter the number';
        }
        if (player == 1) {
            player = 2;
            count++;
        } else {
            player = 1;
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