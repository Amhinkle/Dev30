var getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase(); 

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return (userInput);

    } else {
        return ('Please input rock, paper, or scissors.');
    }
};

var getComputerChoice = () => {
  var randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return ('rock');
  } else if (randomNumber === 1) {
    return ('paper');
  } else if (randomNumber === 2) {
    return ('scissors');
  }
};

var determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log('We have a tie');
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('The computer wins!');
    } else {
      console.log('You Win!');
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      console.log('The computer wins!');
    } else {
      console.log('You Win!');
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log('The computer wins!');
    } else {
      console.log('You Win!');
    }
  }
}

var playGame = () => {
  var userChoice = getUserChoice('paper');
  console.log(`You Played: ${userChoice}`);

  var computerChoice = getComputerChoice();
  console.log(`Computer Played: ${computerChoice}`);

  determineWinner(userChoice, computerChoice);
}

playGame();