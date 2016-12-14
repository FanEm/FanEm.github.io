/**
 * Created by fanem on 30.11.16.
 */
var btn = document.createElement ('input');
btn.type = 'button';
btn.id = 'btnPlayAgain';
btn.value = 'Play again!';
btn.className = 'btn btn-default';
btn.onclick = function newGame() {
    newGameRemoveAttribute('1', 'userAnswer1');
    newGameRemoveAttribute('2', 'userAnswer2');
    newGameRemoveAttribute('3', 'userAnswer3');
    newGameRemoveAttribute('4', 'userAnswer4');
    newGameRemoveAttribute('5', 'userAnswer5');
    newGameRemoveAttribute('6', 'userAnswer6');

    var answerButton = document.getElementById('submit'),
        playAgainButton = document.getElementById("btnPlayAgain");

    answerButton.setAttribute('disabled', 'disabled');
    playAgainButton.parentNode.removeChild(playAgainButton);
};

function askQuestion(textBoxId, answer, inputID) {
    var iconOk = document.createElement('span');
    iconOk.className = 'glyphicon glyphicon-ok';

    var iconError = document.createElement('span');
    iconError.className = 'glyphicon glyphicon-remove';

    var userAnswer = document.getElementById(textBoxId).getElementsByTagName("input")[0],
        addIconOk = document.getElementById(textBoxId),
        addIconError = document.getElementById(textBoxId),
        inputsID = document.getElementById(inputID);

    userAnswer.value = userAnswer.value.toLowerCase();

    if (userAnswer.value == answer) {
        addIconOk.appendChild(iconOk);
    } else {
        addIconError.appendChild(iconError);
    }

    document.getElementById ('buttonPlay').appendChild (btn);
    inputsID.setAttribute('disabled', 'disabled');
}

function playPuzzle() {
    askQuestion('1', 'mountain', 'userAnswer1');
    askQuestion('2', 'teeth', 'userAnswer2');
    askQuestion('3', 'wind', 'userAnswer3');
    askQuestion('4', 'fish', 'userAnswer4');
    askQuestion('5', 'time', 'userAnswer5');
    askQuestion('6', 'egg', 'userAnswer6');

    var answerButton = document.getElementById('submit');
    answerButton.setAttribute('disabled', 'disabled');
}

function newGameRemoveAttribute(textBoxId, inputID) {
    var userAnswer = document.getElementById(textBoxId).getElementsByTagName("input")[0],
        glyphIcon = document.getElementsByClassName("glyphicon"),
        inputsID = document.getElementById(inputID);

    userAnswer.value = '';
    glyphIcon[0].parentNode.removeChild(glyphIcon[0]);
    inputsID.removeAttribute('disabled');
}

function checkInputs() {
    var userAnswer1 = document.getElementById('userAnswer1').value,
        userAnswer2 = document.getElementById('userAnswer2').value,
        userAnswer3 = document.getElementById('userAnswer3').value,
        userAnswer4 = document.getElementById('userAnswer4').value,
        userAnswer5 = document.getElementById('userAnswer5').value,
        userAnswer6 = document.getElementById('userAnswer6').value,
        answerButton = document.getElementById('submit');

    if(userAnswer1.length != 0 && userAnswer2.length != 0 && userAnswer3.length != 0 &&
        userAnswer4.length != 0 && userAnswer5.length != 0 && userAnswer6.length != 0) {
        answerButton.removeAttribute("disabled");
    } else {
        answerButton.setAttribute('disabled', 'disabled');
    }
}