$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $('#input').on('click', '#submitGuess', displayResults);
  $('#input').on('click', '#restart', restart)
}

let totalGuess = 0

function restart() {
  console.log('clicked restart');
  // TODO - ask the server for a new randomNumber

  // reappend the inputs...
  $('#input').empty().append(`<input id="guess1" type="text" placeholder="Player 1 Guess" />
  <input id="guess2" type="text" placeholder="Player 2 Guess" />
  <button id="submitGuess">Submit Guess</button>`);
}

function displayResults(){
  // TODO = send (POST) guesses to server to compare against randomNumber
  let guess1 = $('#guess1').val();
  let guess2 = $('#guess2').val();
  
  totalGuess ++;
  $('#totalGuessOut').empty().append(totalGuess);
  
  // player 1 logic
  if( guess1 > randomNumber ) {
    $('#history').append(`<li>Player 1 guess of ${guess1} was too high!!</li>`);
  } else if (guess1 < randomNumber ) {
    $('#history').append(`<li>Player 1 guess of ${guess1} was too low!!</li>`);
  } else if ( guess1 = randomNumber ) {
    $('#history').append(`<li>Player 1 guess of ${guess1} was CORRECT!!!!</li>`);
    alert('WAY TO GO!! PLAYER 1 GUESSED RIGHT!!!')
    $('#input').empty().append(`<button id="restart">Restart?</button>`)
  }

  // player 2 logic
  if( guess2 > randomNumber ) {
    $('#history').append(`<li>Player 2 guess of ${guess2} was too high!!</li>`);
  } else if (guess2 < randomNumber ) {
    $('#history').append(`<li>Player 2 guess of ${guess1} was too low!!</li>`);
  } else if ( guess2 = randomNumber ) {
    $('#history').append(`<li>Player 2 guess of ${guess2} was CORRECT!!!!</li>`);
    alert('WAY TO GO!! PLAYER 2 GUESSED RIGHT!!!')
    $('#input').empty().append(`<button id="restart">Restart?</button>`)   }

  // clear inputs
  $('#guess1').val('');
  $('#guess2').val('');
}