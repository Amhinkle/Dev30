// Step One
var userName = 'Allie';
// Step Two
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
// Step Three
var userQuestion = 'Will I become a master coder?';
// Step Four
console.log(`${userName} asked: ${userQuestion}`);
// Step Five
var randomNumber = Math.floor(Math.random() * 8);
// Step Six
var eightBall = '';

// Step Seven
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall ='It is decidedly so';
} else if (randomNumber === 2) {
  eightBall ='Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall ='Cannot predict now';
} else if (randomNumber === 4) {
  eightBall ='Do not count on it';
} else if (randomNumber === 5) {
  eightBall ='My sources say no';
} else if (randomNumber === 6) {
  eightBall ='Outlook not so good';
} else if (randomNumber === 7) {
  eightBall ='Signs point to yes';
}

// Step Eight
console.log(eightBall);