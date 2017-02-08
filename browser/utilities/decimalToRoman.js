export default function decimalToRoman(num){
  
  // Edge cases: Input must be an integer less than 4,000.
  if (typeof num !== 'number'){
    throw new Error("Input must be a number.");
  }
  if (!Number.isInteger(num) || num < 0){
    throw new Error("Input must be a positive integer.");    
  }
  if (num > 4000) {
    throw new Error("Input cannot be larger than 4,000");
  }
  if (num === 0 || num === '') return '';
  
  // Define list of decimal and roman values.
  const decimalList = [1, 5, 10, 50, 100, 500, 1000];
  const romanList = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  
  // Define string for roman numeral.
  let romanString = '';
  

  // Iterate through the decimal array from largest value to smallest.
  // If 
  for (let i = decimalList.length - 1; i >= 0; i--){
    
    while(num >= decimalList[i]) {
      romanString += romanList[i];
      num -= decimalList[i];
    }
    
    if (i & 2 === 1){
      if (num >= decimalList[i] - decimalList[i-1]){
        romanString += romanList[i-1];
        romanString += romanList[i];
        num += decimalList[i-1];
        num -= decimalList[i];
      }
    } else {
      if (num >= decimalList[i] - decimalList[i-2]){
        romanString += romanList[i-2];
        romanString += romanList[i];
        num += decimalList[i-2];
        num -= decimalList[i];
      }
    }
    
  }
  
  return str;
}