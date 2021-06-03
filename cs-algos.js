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

function shapeArea(n) {
  // 1, 1
  // 2, 5
  // 3, 13
  // 4, 25

  // base case
  if (n == 1) {
    return 1;
  }

  //recursive case
  if (n > 1) {
    return shapeArea(n - 1) + (n - 1) * 4;
  }
}

function makeArrayConsecutive2(statues) {
  // sort the array from smallest to largest using sort
  let output = [];
  let sorted = statues.sort((a, b) => a - b);
  // set a min value and a max value to an variable
  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  // in the new sorted array check if the array has every value from min to max

  for (i = 1; i < max - min; i++) {
    if (!sorted.includes(min + i)) {
      // if not, push the value to a new array
      output.push(min + 1);
      console.log(output);
    }
  }
  // return the length of the new array
  return output.length;
}
