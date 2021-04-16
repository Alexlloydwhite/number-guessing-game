$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $('#input').on('click', '#submitGuess', checkNewGuess);
  $('#input').on('click', '#restart', restart)
  getGuess();
}

function restart() {
  console.log('clicked restart');
  
  // TODO - ask the server for a new randomNumber
  $.ajax({
    method: 'POST',
    url: '/newnumber',
  })
    .then(function(response){
      console.log('restarting!');

    })


  // reappend the inputs...
  $('#input').empty().append(`<input id="guess1" type="text" placeholder="Player 1 Guess" />
  <input id="guess2" type="text" placeholder="Player 2 Guess" />
  <button id="submitGuess">Submit Guess</button>`);
}

function checkNewGuess(){
  let newGuess = {
    guess1: $('#guess1').val(),
    guess2: $('#guess2').val(),
  }

  $.ajax({
    method: 'POST',
    url: '/guess',
    data: newGuess,
  })
    .then(function(response){
      console.log(`checking guess`, newGuess)
      getGuess();
    })
    .catch( function( error) {
      console.log('error from server:', error);
      alert('sorry, could not check guess. Try again L8R!');
  })

  // clear inputs
  $('#guess1').val('');
  $('#guess2').val('');
}

function getGuess(){
  $.ajax({
    method: 'GET',
    url: '/guess'
  })
    .then( function ( response) {
      console.log('response from the server:', response);
      render(response);
    })
    .catch( function ( error ){
      console.log('error from the server:', error);
      alert('sorry, could not get guess history. Try again L8R!');
  })

}

function render (guessHistory) {
  let totalGuess = guessHistory.length
  $('#totalGuessOut').empty().append(totalGuess);
  
  $('#history').empty();
  for(let index of guessHistory){
    $('#history').append(`
    <li>${index.guess1} ${index.guess2}</li>
    `)
    
    if ( index.guess1.includes("CORRECT") ) 
    {
      console.log('PLAYER 1 CORRECT!!');
      $('#input').empty().append(`
      <b><h2>PlAYER 1 GUESSED CORRECT!</b></h2>
      <button id="restart">Try Again?</button>`) 
    } 
    if( index.guess2.includes("CORRECT") )
    {
        console.log('PLAYER 2 CORRECT!!');
        $('#input').empty().append(`
        <b><h2>PlAYER 2 GUESSED CORRECT!</b></h2>
        <button id="restart">Try Again?</button>`)
    }
  }
}
