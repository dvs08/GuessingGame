'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){

    document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = '?';

let check = document.querySelector('.check');
check.addEventListener('click', function() {


    let guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess); //number

    //when no input
    if(!guess){
        displayMessage('No Number');

        //when player wins
    } else if(guess === secretNumber){

        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //DRY CODE
    } else if(guess !== secretNumber){
 
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too high'  : 'Too low');
            score--;
            document.querySelector('.score').textContent =  score;
        } else{
            displayMessage('You Lost');
            document.querySelector('.score').textContent =  0;
        }

    }
    
    // else if( guess > secretNumber) {


    //     if(score > 1){

    //         document.querySelector('.message').textContent = 'Too High';
    //         score--;
    //         document.querySelector('.score').textContent =  score;

    //     } else {

    //         document.querySelector('.message').textContent = 'You Lost';
    //         document.querySelector('.score').textContent =  score;
    //     }

    //     //guess too low
    // } else if(guess < secretNumber){

    //     if(score > 1){

    //         document.querySelector('.message').textContent = 'Too Low';
    //         score--;
    //         document.querySelector('.score').textContent =  score;

    //     } else {

    //         document.querySelector('.message').textContent = 'You Lost';
    //         document.querySelector('.score').textContent =  0;
    //     }

    // } 

    

});

let again = document.getElementById('again');

again.addEventListener('click', function(){

    displayMessage('Start guessing...');
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});



