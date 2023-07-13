let guess = document.getElementById('guess')
let output = document.getElementById('output')

function guessEntered() {
    if (!isValid(guess)) {
        alert('Fill in all the values');
        return;
    }

    let guess_value = guess.value;
    console.log(typeof(guess_value))

    if (guess_value === "6") {
        output.innerHTML = "Correct!";
        resetForm();
    } else {
        output.innerHTML = "Guess Again";
        resetForm();
    }

}

function isValid() {
    return guess.value != '';
}

function resetForm() {
    guess.value = '';
}