// The coding challenge:

// Create a method in javascript that converts an arbitrary roman numeral to its arabic equivalent
// e.g. LI ==> 51

// Please make the code resemble what you would do in an actual professional situation, including documentation of any limitations/alternatives considered.

// The results from this test, as well as an example of a working project (running in the cloud or on your laptop) would be required for the in-person interview.  Ideally the working project should use Angular2

function decimalToRoman(num){
  
  // Edge case: input must be an integer
  if (typeof num !== 'number'){
    throw new Error("Input must be a number.");
  }
  if (!Number.isInteger(num) || num < 1){
    throw new Error("Input must be a positive integer.");    
  }
  if (num > 4000) {
    throw new Error("Input cannot be larger than 4,000");
  }
  
  const decimalList = [1, 5, 10, 50, 100, 500, 1000];
  const romanList = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  
  let str = '';
  
  for (let i = decimalList.length - 1; i >= 0; i--){
    
    while(num >= decimalList[i]) {
      str += romanList[i];
      num -= decimalList[i];
    }
    
    if (i & 2 === 1){
      if (num >= decimalList[i] - decimalList[i-1]){
        str += romanList[i-1];
        str += romanList[i];
        num += decimalList[i-1];
        num -= decimalList[i];
      }
    } else {
      if (num >= decimalList[i] - decimalList[i-2]){
        str += romanList[i-2];
        str += romanList[i];
        num += decimalList[i-2];
        num -= decimalList[i];
      }
    }
    
  }
  
  return str;
}



