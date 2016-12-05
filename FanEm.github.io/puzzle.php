<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Puzzle</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="content">
        <div id="header">
            <a href="index.html">Main</a><span> / </span>
            <a href="puzzle.html">Puzzle</a><span> / </span>
            <a href="guess.html">Guess</a><span> / </span>
            <a href="guess2.html">Guess multiplayer</a>
        </div>
        <h1>Personal site of GeekBrains' student</h1>
        <div id="center">
            <h1>Puzzle</h1>
            <div id = "box">
                <form action='puzzle.php' method='POST'>
                    <p>
                        Guess a puzzle, friend: <br>
                        What has roots as nobody sees,<br>
                        Is taller than trees,<br>
                        Up, up it goes,<br>
                        And yet never grows?
                    </p>
                    <input type="'text" id="userAnswer1">
                    <p>
                        Thirty white horses on a red hill,<br>
                        First they champ,<br>
                        Then they stamp,<br>
                        Then they stand still.
                    </p>
                    <input type="'text" id="userAnswer2">

                    <p>
                        Voiceless it cries, <br>
                        Wingless flutters,<br>
                        Toothless bites,<br>
                        Mouthless mutters.
                    </p>
                    <input type="'text" id="userAnswer3">
                    <br><br>
                    <input type='submit' value='Answer'>
                </form>
                <?php
                    $userAnswer1 = $_POST['userAnswer1'];
                    $userAnswer2 = $_POST['userAnswer2'];
                    $userAnswer3 = $_POST['userAnswer3'];
                    if (!empty($userAnswer1) && !empty($userAnswer2) && !empty($userAnswer3)) {
                        $score = 0;
                        if ($userAnswer1 == 'mountain') {
                            echo "1 - You're right";
                            $score++;
                        } else {
                            echo "1 - You're wrong";
                        }
                        echo '<br>';

                        if ($userAnswer2 == 'teeth') {
                            echo "2 - You're right";
                            $score++;
                        } else {
                            echo "2 - You're wrong";
                        }
                        echo '<br>';

                        if ($userAnswer3 == 'wind') {
                            echo "3 - You're right";
                            $score++;
                        } else {
                            echo "3 - You're wrong";
                        }
                        echo '<br><br>';
                        echo 'You are guess' . $score; . 'puzzle';
                    }
                ?>
            </div>
        </div>
    </div>
    <div id="footer">Copyright © 2016 <a href="https://geekbrains.ru/" target="_blank">GeekBrains</a></div>
</body>
</html>