function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    
    
    
      if (playerMove === 'rock'){
       if(computerMove === 'rock'){ result = 'Tie'}
        else if(computerMove === 'paper'){ result = 'You lose'}
        else if(computerMove === 'scissors'){ result = 'You win'}
      }
    
      else if(playerMove === 'paper') {
        if(computerMove === 'rock'){ result = 'You win'}
        else if(computerMove === 'paper'){ result = 'Tie'}
        else if(computerMove === 'scissors'){ result = 'You lose'}
      }
    
    
      else if(playerMove === 'scissors') {
        if(computerMove === 'rock'){ result = 'You lose'}
        else if(computerMove === 'paper'){ result = 'Tie'}
        else if(computerMove === 'scissors'){ result = 'You win'}
         
      
      }
    
      alert(`You Picked ${playerMove} Computer Picked ${computerMove} , ${result}`)
    
    }
    
    
    
    function pickComputerMove() {
    
      const randomNumber = Math.random();
      computerMove = '';
    
    if (randomNumber>=0 && randomNumber<1/3) {
      computerMove = 'rock'
    }
    else if (randomNumber>=1/3 && randomNumber<2/3) {
      computerMove = 'paper'
    }
    else if (randomNumber>=2/3 && randomNumber<=1) {
      computerMove = 'scissors'
    }
    
    return computerMove
    
    }
     
    