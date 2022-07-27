const gameExe = (round, playerScore, computerScore) => {
   
   const buttons = document.querySelectorAll('button')

   buttons.forEach((button) => {

      button.addEventListener('click', () => {

         const variables = ['rock', 'paper', 'scissors']
         
         const playerChoice = button.textContent.toLowerCase()

         const computerChoice = variables[Math.floor(Math.random() * variables.length)]


         const winner = document.querySelector('.winner')

         let webPlayer = document.querySelector('.player-score')

         let webComputer = document.querySelector('.computer-score')

         if (round < 5) {

            switch (computerChoice) {

               case 'rock':
                  if (playerChoice === 'rock') {

                     winner.textContent = 'TIE!'
                     
                     round++
                  }
                  else if (playerChoice === 'paper') {

                     winner.textContent = 'Paper beats rock! You won!'

                     webPlayer.textContent = `Player's score: ${playerScore++}`

                     round++
                     
                  }
                  else if (playerChoice === 'scissors') {
                     
                     winner.textContent = 'Scissors are beaten by rock! You lost!'

                     webComputer.textContent = `Computer's score: ${computerScore++}`

                     round++

                  }

               case 'paper':
                  if (playerChoice === 'paper') {

                     winner.textContent = 'TIE!'

                     round++
                  }
                  else if (playerChoice === 'scissors') {

                     winner.textContent = 'Scissors beat paper! You won!'
                     webPlayer.textContent = `Player's score: ${playerScore++}`

                     round++
                     
                  }
                  else if (playerChoice === 'rock') {
                     
                     winner.textContent = 'Rock is beaten by paper! You lost!'

                     webComputer.textContent = `Computer's score: ${computerScore++}`

                     round++
                  } 

               case 'scissors':
                  if (playerChoice === 'rock') {

                     winner.textContent = 'TIE!'

                     round++

                  }
                  else if (playerChoice === 'rock') {

                     winner.textContent = 'Rock beats scissors! You won!'

                     webPlayer.textContent = `Player's score: ${playerScore++}`

                     round++
                     
                  }
                  else if (playerChoice === 'paper') {
                     
                     winner.textContent = 'Paper is beaten by scissors! You lost!'

                     webComputer.textContent = `Computer's score: ${computerScore++}`

                     round++

                  }    
            }
         }
         
      }) 
   })
}

gameExe(0, 0, 0)