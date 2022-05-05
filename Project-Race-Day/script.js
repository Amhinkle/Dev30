let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 18;

if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
console.log(raceNumber);

if (age >= 18 && registeredEarly === true) {
  console.log(`${raceNumber} you will race at 9:30 am.`)
} else if (age >= 18 && registeredEarly === false) {
  console.log(`${raceNumber} you will race at 11:00 am.`)
} else if (age < 18) {
  console.log(`${raceNumber} you will race at 12:30 pm. (regardless of registration)`)
} 