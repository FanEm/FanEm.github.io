/**
 * Created by fanem on 30.11.16.
 */
var count;
function askQuestion(textBoxId, answer) {
    var userAnswer = document.getElementById(textBoxId).value;
        userAnswer = userAnswer.toLowerCase();
    if (userAnswer == answer) {
        count++;
    }
    document.getElementById(textBoxId).value = '';
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
    askQuestion('userAnswer1', 'mountain');
    askQuestion('userAnswer2', 'teeth');
    askQuestion('userAnswer3', 'wind');
    askQuestion('userAnswer4', 'fish');
    askQuestion('userAnswer5', 'time');
    askQuestion('userAnswer6', 'egg');
    var myP = document.getElementById("cnt");
//получить HTML содержимое элемента, имеющего id="myP"
    myP.innerHTML;
//изменить HTML содержимое элемента, имеющего id="myP"
    myP.innerHTML = 'Number of correct answers: ' + count;
    /*alert('Number of correct answers: ' + count);*/
    /*document.getElementsById('cnt').innerText = count;*/
}
