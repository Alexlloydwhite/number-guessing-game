const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
// guesses sent to client
app.get('/guesses', (req, res) => {
    res.send(guesses)
    console.log('Guess sent to browser', guesses)
})

// guesses sent to the server
app.post('/guesses', (req, res) => {
    let newGuess = req.body;
    console.log('Got a new guess', newGuess);

    checkGuess(guesses);
    res.sendStatus(201);

})

function checkGuess(){
  //check the guess against randomNumber
}

let randomNumber = (min,max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

let guesses = [
  {
    player1: 6,
    player2: 2,
  },
  {
    player1: 8,
    player2: 3,
  },
  {
    player1: 11,
    player2: 25,
  },
];

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
