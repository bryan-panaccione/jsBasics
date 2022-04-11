
let count = 0
let history = []
const player = {
    scoreCheck: function (b, c) {
        if (b < player[c]) {
            player[c] = b;
            return true;
        } else {
            return false;
        }
    },
    PlayerName: 'playerscore, as a number',
    NextPlayerName: 4,
    bryan: 10
}

// use .hasOwnProperty to check if player exists already, true if they do exist
// use .scoreCheck to get player score
function play() {
    let inputName = prompt("Whats your name?")
    if (player.hasOwnProperty(inputName)) alert(`Welcome Back ${inputName}`)
    const difficulty = Number(prompt(`Pick a number between 1 and ____ (choose, whole number)`))
    console.log(difficulty)
    let randInt = Math.floor(Math.random() * difficulty) + 1
    let answer = false;
    while (answer === false) {
        count++
        let evalString = evaluate(randInt, numberSelect(inputName, difficulty));
        if (evalString === 'high') alert(`Sorry ${inputName}, guess lower.`);
        if (evalString === 'low') alert(`Sorry ${inputName}, guess higher.`);
        if (evalString === 'correct') {
            alert(`Answer: ${randInt}. Correct! Good job ${inputName}. It took you ${count} attempts. Your previous guesses were ${stringPuller(history)}.`);
            alert(playerStats(inputName, count))
            answer = true;
            count = 0;
            history = [];
            playAgain(inputName);
        }
    }
};

function playerStats(name, pScore) {
    if (player.hasOwnProperty(name)) {
        switch (player.scoreCheck(pScore, name)) {
            case true:
                return `Congrats ${name}, new High Score ${pScore}!`;
            case false:
                return `Not a High Score, you're score was ${pScore}, your high score is ${player[name]}`
        }

    } else {
        player[name] = pScore;
        return (`Great first game ${name}`)
    }
}

function numberSelect(name, upperLim) {
    const guess = Number(prompt('Guess a number!'));
    if (guess <= upperLim && guess >= 1) {
        history.push(guess)
        return guess
    } else {
        alert(`Pick a number between 1 and ${upperLim}, ${name}`);
        numberSelect(name, upperLim);
    }
}

function evaluate(num, guess) {
    console.log(num)
    if (num === guess) return 'correct';
    if (guess > num) return 'high';
    if (guess < num) return 'low';
}

function stringPuller(array) {
    var string = ''
    for (var element of array) {
        string = `${string} ${element.toString()},`
    } return string.slice(0, string.length - 2)
}



function playAgain(name) {
    let replay = prompt("Type YES if you want to play again, type NO to quit.");
    if (replay.toUpperCase() === 'YES') {
        play()
    } else if (replay.toUpperCase() === 'NO') {
        alert("bye bye thanks for playing");
    } else {
        alert(`Make a proper selection ${name}`)
        playAgain(name)
    }
}

//make player object