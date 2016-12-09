/**
 * Created by fanem on 30.11.16.
 */
function playGuess2() {
    var answer = parseInt(Math.random() * 100);
    var player = 1;
    var count = 1;
    while (true) {
        var userAnswer = prompt("Enter the number from 1 to 100. " + player + " player's turn");
        if (userAnswer == null) {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer){
            alert('Too much');
        } else if (userAnswer < answer){
            alert('Too low');
        } else if (userAnswer == answer) {
            alert('You are right. Player ' + player + ' win. \n You guessed using ' + count + ' attempts');
            break;
        } else {
            alert('You must enter the number');
        }
        if (player == 1) {
            player = 2;
        } else {
            player = 1;
            count++;
        }
    }
}