const gameExecute = () => {

   let playerScore = 0
   let computerScore = 0

   const gameVar = () => {


      const buttons = document.querySelectorAll('button')
      buttons.forEach((button) => {
         
         button.addEventListener('click', () => {

            const playerChoice = button.textContent.toLowerCase()
            const variables = ['rock', 'paper', 'scissors']
            const computerChoice = variables[Math.floor(Math.random() * variables.length)]
         
            switch (computerChoice) {
      
               case 'paper':
      
                  if (playerChoice == 'rock') {
                     // console.log('Computer wins! Paper beats Rock!');
                     const result = document.createElement('p')
                     document
                     computerScore += 1
                  }
      
                  else if (playerChoice == 'scissors') {
                     console.log('You win! Scissors beat Paper!')
                     playerScore += 1
                  }
                  else {
                     console.log('TIE!')
                  }
                  break
      
               case 'rock':
      
                  if (playerChoice == 'scissors') {
                     console.log('Computer wins! Rock beats Scissors!')
                     computerScore += 1
                  }
      
                  else if (playerChoice == 'paper') {
                     console.log('You win! Paper beats Rock!')
                     playerScore += 1
                  }
                  else {
                     console.log('TIE!')
                  }
                  break
               
               case 'scissors':
      
                  if (playerChoice == 'paper') {
                     console.log('Computer wins! Scissors beat Paper!')
                     computerScore += 1
                  }
      
                  else if (playerChoice == 'rock') {
                     console.log('You win! Rock beats Scissors!')
                     playerScore += 1
                  }
                  else {
                     console.log('TIE!')
                  }
                  break
                  
               }
            })
         })
      
   };
   gameVar()

   // for (let i = 0; i < 5; i++) {
   //    gameVar()
   // }

   // console.log(`The player's score is: ${playerScore}\nThe computer's score is: ${computerScore}`)

   // if (computerScore > playerScore) {
   //    console.log('Computer wins!')
   // }

   // else if (computerScore == playerScore) {
   //    console.log('TIE!')
   // }

   // else {
   //    console.log('Player wins')
   // }

}

gameExecute()
