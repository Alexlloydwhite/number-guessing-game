$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $('#submitGuess').on('click', displayResults);
}

function displayResults(){
  // assign value of guess inputs to variable
  let guess1 = $('#guess1').val();
  let guess2 = $('#guess2').val();
  
  let randomNumber = 5;
  
  console.log('click!', guess1);
  
  if( guess1 > randomNumber ) {
    $('#history').append(`<li>Player 1 guess of ${guess1} was too high!!</li>`);
  } else if (guess1 < randomNumber ) {
    $('#history').append(`<li>Player 1 guess of ${guess1} was too low!!</li>`);
  } else if ( guess1 = randomNumber ) {
    $('#history').append(`<li>Player 1 guess of ${guess1} was CORRECT!!!!</li>`);
    alert('WAY TO GO!! PLAYER 1 GUESSED RIGHT!!!')
  }


  // logic to execute with value



}