/**
 * Created by fanem on 30.11.16.
 */

function playGuess() {
    var answer = parseInt(Math.random() * 100);
    var count = 0;
    var userAnswer = document.getElementById('usrNumber').value;
    userAnswer = parseInt(userAnswer);

    if (userAnswer > answer) {
        alert('Too much');
        count++;
    } else if (userAnswer < answer) {
        alert('Too low');
        count++;
    } else if (userAnswer == answer) {
        count++;
        alert('You are right. You guessed using ' + count + ' attempts');
        break;
    } else {
        alert('You must enter the number');
    }
/*    userAnswer = parseInt(userAnswer);*/


    /*   while (true) {
        var userAnswer = document.getElementById("usrNumber");
        userAnswer.innerHTML;
       if (userAnswer == null) {
            break;
        }
        userAnswer = parseInt(userAnswer);

        /*if (userAnswer > answer) {
            alert('Too much');
            count++;
        } else if (userAnswer < answer) {
            alert('Too low');
            count++;
        } else if (userAnswer == answer) {
            count++;
            alert('You are right. You guessed using ' + count + ' attempts');
            break;
        } else {
            alert('You must enter the number');
        }
*/
    }
}