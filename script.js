'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('current--1');
const newGame = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, playing, score,activePlayer;
function startGame(){
   
    player0.classList.add('player--active');
    score0.textContent =  0;
score1.textContent  = 0;
dice.style.display = 'none';
 currentScore = 0;
 activePlayer = 0;
 score = [0,0];
 playing = true;
 document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
 document.getElementById(`current--${activePlayer}`).textContent =  0;

}

startGame();

rollDice.addEventListener('click', function(){
   if(playing){
    dice.style.display = 'block';
    let randomScore = Math.floor(Math.random() * 6) +1;
    dice.src = `dice-${randomScore}.png`;
    if(randomScore !== 1){
        currentScore += randomScore;
        document.getElementById(`current--${activePlayer}`).textContent =  currentScore;
        
    }else{
        switchPlayer();
    }
   }
});
btnHold.addEventListener('click', updateFinalScore)

function updateFinalScore(){
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent= score[activePlayer];
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    if(score[activePlayer] >= 20){
        playing= false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
        switchPlayer();
    }
    
}
function switchPlayer(){    
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent =  0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

}
newGame.addEventListener('click', function(){
    startGame()
})



