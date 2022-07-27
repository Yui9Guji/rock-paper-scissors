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
                     result.textContent = 'Computer wins! Paper beats Rock!'
                     result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                     
                     const gameDiv = document.querySelector('.game')
                     gameDiv.appendChild(result)

                  }
      
                  else if (playerChoice == 'scissors') {
                     // console.log('You win! Scissors beat Paper!')

                     const result = document.createElement('p')
                     result.textContent = 'You win! Scissors beat Paper!'
                     result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                     
                     const gameDiv = document.querySelector('.game')
                     gameDiv.appendChild(result)
                  }
                  else {
                     const result = document.createElement('p')
                     result.textContent = 'TIE!'
                     result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                     
                     const gameDiv = document.querySelector('.game')
                     gameDiv.appendChild(result)
                  }
                  
                  break
      
               case 'rock':
      
                  if (playerChoice == 'scissors') {
                     // console.log('Computer wins! Rock beats Scissors!')

                     const result = document.createElement('p')
                     result.textContent = 'Computer wins! Rock beats Scissors!'
                     result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                     
                     const gameDiv = document.querySelector('.game')
                     gameDiv.appendChild(result)
                  }
      
                  else if (playerChoice == 'paper') {
                     // console.log('You win! Paper beats Rock!')

                     const result = document.createElement('p')
                     result.textContent = 'You win! Paper beats Rock!'
                     result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                     
                     const gameDiv = document.querySelector('.game')
                     gameDiv.appendChild(result)
                  }
                  else {
                     // console.log('TIE!')

                     const result = document.createElement('p')
                     result.textContent = 'TIE!'
                     result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                     
                     const gameDiv = document.querySelector('.game')
                     gameDiv.appendChild(result)
                  }

                  break
               
               case 'scissors':
      
                  if (playerChoice == 'paper') {
                     // console.log('Computer wins! Scissors beat Paper!')

                     const result = document.createElement('p')
                     result.textContent = 'Computer wins! Scissors beat Paper!!'
                     result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                     
                     const gameDiv = document.querySelector('.game')
                     gameDiv.appendChild(result)
                  }
      
                  else if (playerChoice == 'rock') {
                     // console.log('You win! Rock beats Scissors!')

                     const result = document.createElement('p')
                     result.textContent = 'You win! Rock beats Scissors!'
                     result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                     
                     const gameDiv = document.querySelector('.game')
                     gameDiv.appendChild(result)
                  }
                  else {
                     // console.log('TIE!')
                     
                     const result = document.createElement('p')
                     result.textContent = 'TIE!'
                     result.style.cssText = 'color: #d90429; font-size: 24px; font-family: "Sora";'
                     
                     const gameDiv = document.querySelector('.game')
                     gameDiv.appendChild(result)
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
