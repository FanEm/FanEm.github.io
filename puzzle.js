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

function playPuzzle() {
    count = 0;
    askQuestion('userAnswer1', 'mountain');
    askQuestion('userAnswer2', 'teeth');
    askQuestion('userAnswer3', 'wind');
    alert('Number of correct answers: ' + count);
}
