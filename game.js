const gameExecute = () => {
   let playerScore = 0
   let computerScore = 0

   const gameVar = () => {

   const variables = ['rock', 'paper', 'scissors']
   const computerChoice = variables[Math.floor(Math.random() * variables.length)]

   const playerChoice = prompt('Rock | Paper | Scissors').toLowerCase()

   switch (computerChoice) {

      case 'paper':

         if (playerChoice == 'rock') {
            console.log('Computer wins! Paper beats rock!')
            computerScore += 1
         }

         else if (playerChoice == 'scissors') {
            console.log('You win! Scissors beat paper!')
            playerScore += 1
         }
         else {
            console.log('TIE!')
         }
         break

      case 'rock':

         if (playerChoice == 'scissors') {
            console.log('Computer wins! Rock beats scissors!')
            computerScore += 1
         }

         else if (playerChoice == 'paper') {
            console.log('You win! Paper beats rock!')
            playerScore += 1
         }
         else {
            console.log('TIE!')
         }
         break
      
      case 'scissors':

         if (playerChoice == 'paper') {
            console.log('Computer wins! Scissors beat paper!')
            computerScore += 1
         }

         else if (playerChoice == 'rock') {
            console.log('You win! Rock beats scissors!')
            playerScore += 1
         }
         else {
            console.log('TIE!')
         }
         break
         
   }
}

   for (let i = 0; i < 5; i++) {
      gameVar()
   }

   console.log(`The player's score is: ${playerScore}\nThe computer's score is: ${computerScore}`)

   if (computerScore > playerScore) {
      console.log('Computer wins!')
   }

   else if (computerScore == playerScore) {
      console.log('TIE!')
   }

   else {
      console.log('Player wins')
   }

}

gameExecute()
