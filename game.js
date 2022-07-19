const getComputerChoice = () => {

   const variables = ['Rock', 'Paper', 'Scissors']
   const answer = variables[Math.floor(Math.random() * variables.length)]
   return answer
}

