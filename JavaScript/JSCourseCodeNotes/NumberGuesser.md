# Number Guesser
### JS
```javascript
/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

  // Listen for guess
  guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess)
 
  // Play again event listener
  game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
      window.location.reload();
    }
  });

 
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red')
    }
       // Check if won
    if(guess === winningNum){
      gameOver('win', `${winningNum} is Correct, YOU WIN!`, )

    } else if(guess >= min && guess <= max) {
      guessesLeft -= 1;

        if(guessesLeft === 0) {
          gameOver('lose', `Game Over, you lost. The correct number was ${winningNum}`)
      } else {
        gameOver('again', `${guess} is not correct, ${guessesLeft} guesses left`)
        
        // //Game continues answer wrong

        // // Change border color
        // guessInput.style.borderColor = 'orange';

        // // Clear Input
        // guessInput.value = '';

        // // Tell user its the wrong number
        // setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'orange')
      }
    }
 
});
// result options are strings 
// 'win', 'loose', 'retry'

// Game Over
function gameOver(result, msge){
  let color;
  // let won;
  // let lose;
  // let again;

  //won === true ? color = 'green' : color = 'red'; 
  switch(result){
    case 'win':
      color = 'green'
      break;
    case 'lose':
      color = 'red'
      break;
    case 'again':
      color = 'orange'
      break;
  }
  //guessInput.disabled = true;
      
  // Change border color
  guessInput.style.borderColor = color;
  message.style.color = color;
  //Set Messege
  setMessage(msge)

  
 //Play Again?
 if(result === 'lose' || result === 'win') {
 guessBtn.value = 'Play Again';
 guessBtn.className += 'play-again';
}

};

// Get Winning Number
function getRandomNum(min, max){
 return Math.floor(Math.random()*(max-min+1)+min);
}


// Set Message
function setMessage(msg, color){
message.style.color = color;
message.textContent = msg;
message.style.display = 'block';
// Clear error after 3 seconds
setTimeout(clearMessage, 3000);
}

// Clear error
function clearMessage(){
  message.style.display = 'none';
}
```
### HTML
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
  <title>Number Guesser</title>
</head>
<body>
  <div class="container">
    <h1>Number Guesser</h1>
    <div id="game">
      <p>Guess a number between <span class="min-num"></span> and <span class="max-num"></span></p>
      <input type="number" id="guess-input" placeholder="Enter your guess...">
      <input type="submit" value="Submit" id="guess-btn" >
      <p class="message"></p>
    </div>
  </div>
  <script src="app.js"></script>
</body>
</html>

```