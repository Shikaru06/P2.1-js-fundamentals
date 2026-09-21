let secondsRemaining = 198221312;

let interval = setInterval(function () {
    console.log(`Seconds remaining to the end of the course: ${secondsRemaining}`);
    secondsRemaining--;

    if (secondsRemaining < 0) {
        clearInterval(interval);
    }
}, 1000);