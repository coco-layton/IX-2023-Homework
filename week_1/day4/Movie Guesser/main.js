const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

let randomIndex = Math.floor(Math.random()*11);
let pastIndices = [randomIndex];   


let movieDescription = document.getElementById('movie-description');
movieDescription.innerHTML = movies[randomIndex].explanation;

function guessEntered() {
    let movieAnswer = movies[randomIndex].title;
    let output = document.getElementById("output");
    let hint = document.getElementById("hint");

    if (!isValid(guess)) {
        alert('Please enter a guess');
        return;
    }

    let guess_value = guess.value;

    if (guess_value === movieAnswer) {
        output.innerHTML = "Correct!";
        resetForm();
        resetMovieDescription();
        hint.innerHTML = "";
    } else {
        output.innerHTML = "Guess Again";
        resetForm();
    }

}

function wantsHint() {
    let movieHint = movies[randomIndex].hint;
    let hint = document.getElementById("hint");
    hint.innerHTML = movieHint;
}

function isValid() {
    return guess.value != '';
}

function resetForm() {
    guess.value = '';
}

function resetMovieDescription() {
    let newIndex = Math.floor(Math.random()*11);

    // reset index tracker if already did all movies
    if (pastIndices.length == movies.length) {
        pastIndices = [];
    }

    if (pastIndices.includes(newIndex)){
        resetMovieDescription();
    } else {
        pastIndices.push(newIndex);
        randomIndex = newIndex;
        
        // display the new movie
        movieDescription = document.getElementById('movie-description');
        movieDescription.innerHTML = movies[randomIndex].explanation;
    }
}