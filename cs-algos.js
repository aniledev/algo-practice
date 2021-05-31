function centuryFromYear(year) {
  return Math.floor(year / 100) + (year % 100 ? 1 : 0);
  // if year%100 === 0 then add 0
  // else add 1
}

function checkPalindrome(inputString) {
  // lowercase the string first to avoid capitalization errors
  const string = inputString.toLowerCase();
  // save the split string to a new variable, this will return an array of strings
  // reverse the array values using reverse()
  // using the join array method to put the array values into a string
  const reverseInputString = string.split("").reverse().join("");
  // check if input string === reverseInputString
  if (string == reverseInputString) {
    return true;
  } else {
    return false;
  }
}

function adjacentElementsProduct(inputArray) {
  // inputArray = [3, 6, -2, -5, 7, 3]
  // output 21

  // create a variable to long the largest product
  // loop through the array and multiply each number by its adjacent number
  // if the product > largestProduct, then assign it to the largestProduct
  // once the loop ends, return largestProduct

  let maxProduct = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > maxProduct) {
      maxProduct = inputArray[i] * inputArray[i + 1];
    }
  }
  return maxProduct;
}
