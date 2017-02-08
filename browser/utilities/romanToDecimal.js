export default function romanToDecimal(romanString) {
  
  // Edge case: input must be string.
  if (typeof romanString !== 'string') {
    return 'N/A';
  }
  if (romanString === '') {
    return 0;
  }
  
  // Edge case: all letters must be uppercase. Lowercase letters will be converted.
  romanString = romanString.toUpperCase();

  // Define array which will hold decimal conversions of each letter.
  const numbersArray = [];
  
  // Define hash to translate letters to their corresponding number value.
  const symbolsHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const letterOptions = Object.keys(symbolsHash);
  
  // Iterate through the roman numberal string:
  // Push the decimal equivalent value to numbersArray.
  for (let i = 0; i < romanString.length; i++) {
    let currLetter = romanString[i];
    
    if (!letterOptions.includes(currLetter)) {
      return 'N/A'
    }
    
    numbersArray.push( symbolsHash[currLetter] )
  }
  
  let sum = 0;
  
  // Iterate through the numbersArray:
  // If the number is higher than the number after it. Add it to the sum.
  // else, subtract it.
  numbersArray.forEach( (ele, idx) => {
    if (ele < numbersArray[idx + 1]) {
      sum -= ele;
    } else {
      sum += ele;
    }
  })
  
  return sum;
  
}