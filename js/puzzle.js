/**
 * Created by fanem on 30.11.16.
 */
var count;
function askQuestion(textBoxId, answer) {
    var userAnswer = document.getElementById(textBoxId).getElementsByTagName("input")[0],
        removeAttr = document.getElementById(textBoxId).getElementsByClassName('glyphicon-ok')[0];
        userAnswer.value = userAnswer.value.toLowerCase();
    if (userAnswer.value == answer) {
        removeAttr.removeAttribute("style");
        count++;
    } else {
        removeAttr.removeAttribute("style");
        removeAttr.className = 'glyphicon glyphicon-remove';
    }
    userAnswer.value = '';
}

function removeGlyph() {

}

function checkInputs() {
    var userAnswer1 = $('#userAnswer1').val();
    var userAnswer2 = $('#userAnswer2').val();
    var userAnswer3 = $('#userAnswer3').val();
    var userAnswer4 = $('#userAnswer4').val();
    var userAnswer5 = $('#userAnswer5').val();
    var userAnswer6 = $('#userAnswer6').val();

    if(userAnswer1.length != 0 && userAnswer2.length != 0 && userAnswer3.length != 0 && userAnswer4.length != 0 && userAnswer5.length != 0 && userAnswer6.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
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