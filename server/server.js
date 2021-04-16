const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/guess', (req, res) => {
  //log this request
  console.log('request for guess history', guessHistory);

  //send guessHistory to the client!
  res.send( guessHistory );
})

// guesses sent to the server
app.post('/guess', (req, res) => {
    let newGuess = req.body;
    console.log('Got a new guess', newGuess);

    checkGuess(newGuess);
    res.sendStatus(201);
})

app.post('/newnumber', (req, res) => {
  console.log('request for a new number');
  
  guessHistory.length = 0;
  console.log('clearing / refreshing guess history:', guessHistory);

})




function checkGuess(newGuess) {
  let checkedGuess = {};

  if(newGuess.guess1 > randomNumber){
    checkedGuess.guess1 = `Player 1 guess of ${newGuess.guess1} was to high!`
  } else if(newGuess.guess1 < randomNumber){
    checkedGuess.guess1 = `Player 1 guess of ${newGuess.guess1} was to low!`
  } else if(newGuess.guess1 = randomNumber ){
    checkedGuess.guess1 = `Player 1 guess of ${newGuess.guess1} was CORRECT!`
  }

  if(newGuess.guess2 > randomNumber){
   checkedGuess.guess2 = `Player 2 guess of ${newGuess.guess2} was to high!`
  } else if(newGuess.guess2 < randomNumber){
   checkedGuess.guess2 = `Player 2 guess of ${newGuess.guess2} was to low!`
  } else if(newGuess.guess2 = randomNumber){
    checkedGuess.guess2 = `Player 2 guess of ${newGuess.guess2} was to CORRECT!`
  }

  guessHistory.push(checkedGuess);

}

let randomNumberGenerator = (min,max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
let randomNumber = randomNumberGenerator(1,25); 
console.log('randomNumer is:', randomNumber);

let guessHistory = [];

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
