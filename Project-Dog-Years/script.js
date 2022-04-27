// This is my Age
var myAge = 26;
var earlyYears = 2;
earlyYears *= 10.5;

// Accounting for eary years
laterYears = myAge -= 2;
// after the first 2 years, multiply by 4 instead of 10
laterYears *= 4;
// combin early and later years to get dog years 
myAgeInDogYears = earlyYears + laterYears;
// putting my name to all lower case
var myName = 'Allie'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
