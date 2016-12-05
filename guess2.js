/**
 * Created by fanem on 30.11.16.
 */
function playGuess2() {
    alert("Let's go");
    var answer = parseInt(Math.random() * 100);
    var player = 1;
    while (true) {
        var userAnswer = prompt("Enter the number from 1 to 100. " + player + " player's turn  \n Press 'q' for exit");
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer){
            alert('Too much');
        } else if (userAnswer < answer){
            alert('Too low');
        } else if (userAnswer == answer) {
            alert('You are right. Player ' + player + ' win');
            break;
        } else {
            alert('You must enter the number');
        }
        if (player == 1) {
            player = 2;
        } else {
            player = 1;
        }
    }
}