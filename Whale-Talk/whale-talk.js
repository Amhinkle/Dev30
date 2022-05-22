let input = 'True self-discovery begins where your comfort zone ends.'

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultsArray = [];

for (let i=0; i < input.length; i++) {
  const letter=input[1].toLowerCase();
  
  if(letter ==='e'|| letter ==='u'){
    resultArray.push(letter);
 }
  
  for(letj=0;j<vowels.length;j++){
    const vowel vowels[j];
    
    if(letter === vowel){
      resultArray.push(letter);
    }
 }
const resultString=resultArray.join('').toUpperCase();
 
console.log(resultString);
