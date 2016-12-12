/**
 * Created by fanem on 30.11.16.
 */
var count;

var iconOk = document.createElement('span');
iconOk.className = 'glyphicon glyphicon-ok';

var iconError = document.createElement('span');
iconError.className = 'glyphicon glyphicon-remove';

var btn = document.createElement ('input');
btn.type = 'button';
btn.id = 'btnPlayAgain';
btn.value = 'Play again!';
btn.className = 'btn btn-default';
btn.onclick = function newGame() {
    newGameRemoveAttribute('1');
    newGameRemoveAttribute('2');
    newGameRemoveAttribute('3');
    newGameRemoveAttribute('4');
    newGameRemoveAttribute('5');
    newGameRemoveAttribute('6');
    var removeAttr = document.getElementById('submit'),
        deleteButton = document.getElementById("btnPlayAgain");
    removeAttr.setAttribute('disabled', 'disabled');
    deleteButton.parentNode.removeChild(deleteButton);
};

function askQuestion(textBoxId, answer) {
    var userAnswer = document.getElementById(textBoxId).getElementsByTagName("input")[0],
        addIconOk = document.getElementById(textBoxId)[0],
        addIconError = document.getElementById(textBoxId)[0];
        userAnswer.value = userAnswer.value.toLowerCase();
    if (userAnswer.value == answer) {
        addIconOk.appendChild(iconOk);
        count++;
    } else {
        addIconError.appendChild(iconError);
    }
    document.getElementById ('buttonPlay').appendChild (btn);
}

function playPuzzle() {
    count = 0;
    askQuestion('1', 'mountain');
    askQuestion('2', 'teeth');
    askQuestion('3', 'wind');
    askQuestion('4', 'fish');
    askQuestion('5', 'time');
    askQuestion('6', 'egg');
    var myP = document.getElementById("cnt");
    myP.innerHTML = 'Number of correct answers: ' + count;
}

function newGameRemoveAttribute(textBoxId) {
    var userAnswer = document.getElementById(textBoxId).getElementsByTagName("input")[0],
        ef = document.getElementsByClassName("glyphicon");
    userAnswer.value = '';
    ef[0].parentNode.removeChild(ef[0]);
}

function checkInputs() {
    var usAns1 = document.getElementById('userAnswer1').value,
        usAns2 = document.getElementById('userAnswer2').value,
        usAns3 = document.getElementById('userAnswer3').value,
        usAns4 = document.getElementById('userAnswer4').value,
        usAns5 = document.getElementById('userAnswer5').value,
        usAns6 = document.getElementById('userAnswer6').value,
        removeAttr = document.getElementById('submit');

    if(usAns1.length != 0 && usAns2.length != 0 && usAns3.length != 0 && usAns4.length != 0 && usAns5.length != 0 && usAns6.length != 0) {
        removeAttr.removeAttribute("disabled");
    } else {
        removeAttr.setAttribute('disabled', 'disabled');
    }
}