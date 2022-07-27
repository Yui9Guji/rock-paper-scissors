const gameVar = (clickTimes, computerScore, playerScore) => {


   const buttons = document.querySelectorAll('button')

   buttons.forEach((button) => {
         
      button.addEventListener('click', () => {

         const playerChoice = button.textContent.toLowerCase()
         const variables = ['rock', 'paper', 'scissors']
         const computerChoice = variables[Math.floor(Math.random() * variables.length)]
            
         if (clickTimes < 5) {
            switch (computerChoice) {
         
               case 'paper':
         
                     if (playerChoice == 'rock') {
                        // console.log('Computer wins! Paper beats Rock!');

                        const result = document.createElement('p')
                        result.className = 'result'
                        result.textContent = 'Computer wins! Paper beats Rock!'
                        result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
                        const gameDiv = document.querySelector('.game')
                        gameDiv.appendChild(result)

                        clickTimes++
                        computerScore++
                     }
         
                     else if (playerChoice == 'scissors') {
                        // console.log('You win! Scissors beat Paper!')

                        const result = document.createElement('p')
                        result.className = 'result'
                        result.textContent = 'You win! Scissors beat Paper!'
                        result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
                        const gameDiv = document.querySelector('.game')
                        gameDiv.appendChild(result)

                        clickTimes++
                        playerScore++
                     }
                     else {
                        const result = document.createElement('p')
                        result.className = 'result'
                        result.textContent = 'TIE!'
                        result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
                        const gameDiv = document.querySelector('.game')
                        gameDiv.appendChild(result)

                        clickTimes++
                     }

                     break
         
               case 'rock':
         
                     if (playerChoice == 'scissors') {
                        // console.log('Computer wins! Rock beats Scissors!')

                        const result = document.createElement('p')
                        result.className = 'result'
                        result.textContent = 'Computer wins! Rock beats Scissors!'
                        result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
                        const gameDiv = document.querySelector('.game')
                        gameDiv.appendChild(result)

                        clickTimes++
                        computerScore++
                     }
         
                     else if (playerChoice == 'paper') {
                        // console.log('You win! Paper beats Rock!')

                        const result = document.createElement('p')
                        result.className = 'result'
                        result.textContent = 'You win! Paper beats Rock!'
                        result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
                        const gameDiv = document.querySelector('.game')
                        gameDiv.appendChild(result)

                        clickTimes++
                        playerScore++
                     }
                     else {
                        // console.log('TIE!')

                        const result = document.createElement('p')
                        result.className = 'result'
                        result.textContent = 'TIE!'
                        result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
                        const gameDiv = document.querySelector('.game')
                        gameDiv.appendChild(result)

                        clickTimes++
                     }

                     break
                  
               case 'scissors':
         
                     if (playerChoice == 'paper') {
                        // console.log('Computer wins! Scissors beat Paper!')

                        const result = document.createElement('p')
                        result.className = 'result'
                        result.textContent = 'Computer wins! Scissors beat Paper!!'
                        result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
                        const gameDiv = document.querySelector('.game')
                        gameDiv.appendChild(result)

                        clickTimes++
                        computerScore++
                     }
         
                     else if (playerChoice == 'rock') {
                        // console.log('You win! Rock beats Scissors!')

                        const result = document.createElement('p')
                        result.className = 'result'
                        result.textContent = 'You win! Rock beats Scissors!'
                        result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
                        const gameDiv = document.querySelector('.game')
                        gameDiv.appendChild(result)

                        clickTimes++
                        playerScore++
                     }
                     else {
                        // console.log('TIE!')
                        
                        const result = document.createElement('p')
                        result.className = 'result'
                        result.textContent = 'TIE!'
                        result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
                        const gameDiv = document.querySelector('.game')
                        gameDiv.appendChild(result)

                        clickTimes++
                     }

                     break
                     
            }
            
            switch (clickTimes) {
               case 5:
                  button.removeEventListener('click', gameVar)

                  const gameEnding = document.createElement('p')
                  if (playerScore > computerScore) {
                     gameEnding.textContent = `The score is ${playerScore}:${computerScore}!\nPlayer WINS!`
                  }

                  else if (playerScore < computerScore) {
                     gameEnding.textContent = `The score is ${playerScore}:${computerScore}!\nComputer WINS!`
                  }

                  else {
                     gameEnding.textContent = `The score is ${playerScore}:${computerScore}!\nTIE!`
                  }
                  
                  gameEnding.style.cssText = 'color: #000000; font-size: 48px; font-family: "Sora";'
                              
                  const gameDiv = document.querySelector('.game')
                  gameDiv.appendChild(gameEnding)
            }
         }

         // else if (clickTimes == 5){
         //    button.removeEventListener('click', gameVar)

         //    const gameEnding = document.createElement('p')
         //    if (playerScore > computerScore) {
         //       gameEnding.textContent = `The score is ${playerScore}:${computerScore}!\nPlayer WINS!`
         //    }

         //    else {
         //       gameEnding.textContent = `The score is ${playerScore}:${computerScore}!\nComputer WINS!`
         //    }
            
         //    gameEnding.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                        
         //    const gameDiv = document.querySelector('.game')
         //    gameDiv.appendChild(gameEnding)
         // }  
      })
   })
         
      
};

gameVar(0, 0, 0)
