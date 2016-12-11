/**
 * Created by fanem on 30.11.16.
 */
var count;
function askQuestion(textBoxId, answer) {
    var userAnswer = document.getElementById(textBoxId).getElementsByTagName("input")[0],
        playAgain = document.getElementById('repeat'),
        removeAttr = document.getElementById(textBoxId).getElementsByClassName('glyphicon')[0];
        userAnswer.value = userAnswer.value.toLowerCase();
    if (userAnswer.value == answer) {
        removeAttr.className = 'glyphicon glyphicon-ok';
        removeAttr.removeAttribute("style");
        count++;
    } else {
        removeAttr.className = 'glyphicon glyphicon-remove';
        removeAttr.removeAttribute("style");
    }
    playAgain.removeAttribute('style')
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
        playAgain = document.getElementById('repeat'),
        removeAttr = document.getElementById(textBoxId).getElementsByClassName('glyphicon')[0];
    userAnswer.value = '';
    playAgain.setAttribute('style', "visibility: hidden");
    removeAttr.setAttribute('style', "visibility: hidden");
}

function newGame() {
    newGameRemoveAttribute('1');
    newGameRemoveAttribute('2');
    newGameRemoveAttribute('3');
    newGameRemoveAttribute('4');
    newGameRemoveAttribute('5');
    newGameRemoveAttribute('6');
    var removeAttr = document.getElementById('submit');
    removeAttr.setAttribute('disabled', 'disabled');
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