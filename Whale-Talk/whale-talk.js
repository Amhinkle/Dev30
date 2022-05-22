let input = 'True self-discovery begins where your comfort zone ends.'

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultsArray = [];

for (let i = 0; i < input.length; i++) {
  const inputLetters = input[i];
  //console.log(inpute[i]);
  for (let j = 0; j < vowels.length; j++) {
    const vowelLetters = vowels[j];
    if (inputLetters === vowelLetters){
      if(inputLetters === 'e'){
          resultsArray.push('ee');
      } else if(inputLetters === 'u'){
          resultsArray.push('uu');
      } else{
      resultsArray.push(input[i]);
      }
  }
  }
}

let resultString = resultsArray.join('');

console.log(resultString.toUpperCase());