console.log('Javascript Connected!')


var points,activePlayer,totalScore,dice,gamePlaying = true,preScore,count = 0;

gameStart();

function gameStart(){
    points = [0,0];
    activePlayer = 0;
    totalPoints = 0;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}

function nextTurn(){
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-0').textContent = 0;

    if(activePlayer === 1){
        activePlayer = 0;
    } else{ activePlayer = 1; }
   
    totalPoints = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
 

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';

        
        
        if(dice !== 1){           
            totalPoints = totalPoints + dice;
            document.querySelector('#current-' + activePlayer).textContent = totalPoints;
            // count === preScore;
        } 
        else{ 
        
            nextTurn();

           }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){

  if(gamePlaying){
    points[activePlayer] = points[activePlayer] + totalPoints ;

    document.querySelector('#score-' + activePlayer).textContent = points[activePlayer];
  
    if(points[activePlayer] >= 100){
        document.querySelector('#name-'+ activePlayer).innerHTML = '<strong>WINNER!</strong>';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false; 
    } else{ 
        nextTurn(); 
    } 
  }
}); 

document.querySelector('.btn-new').addEventListener('click',gameStart);











































































