'use strict'
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let message = document.querySelector('.message')

document.querySelector('.check').addEventListener('click', function () {
    let guess = (document.querySelector('.guess').value);
    console.log(guess)
    if (!guess) {
        message.textContent = 'No number!';
    }

    else if (guess == number){
        message.textContent = 'Correct number!';
        document.querySelector('.number').style.transform = 'scale(1.5)'
        document.querySelector('.pagecontainer').style.backgroundColor = '#008000'
        document.querySelector('.guesstext').textContent = 'You won!'
        document.querySelector('#q').textContent = number;
     
        if(score > highscore){
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore
    } else if (guess !== number){
        message.textContent = guess > number ? 'too high' : 'too low';
        score--;
        document.querySelector('.score').textContent = score
    } else { message.textContent = 'you lost the game!' 
            document.querySelector('.score').textContent = 0}
    })

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guesstext').textContent = 'Guess the number!'
    document.querySelector('.score').textContent = score;
    message.textContent = 'Start guessing...'
    document.querySelector('.pagecontainer').style.backgroundColor = '#0b0c10'
    document.querySelector('#q').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.transform = 'scale(1.0)'

})
