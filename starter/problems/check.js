// Write a recursive function called `sumToN` that takes in a number and returns
// the sum of all the numbers from 0 to that number. Return null for any input
// number below 0.

// const sumToN = require("./01-sum-to-n");

// Examples:

// sumToN(5) // returns 15
// sumToN(1)  // returns 1
// sumToN(9)  // returns 45
// sumToN(-8)  // returns null

// Iteration

// function sumToN(n){
//   // adds all numbers from 1 to n
//   // negative is null
//   let sum = 0;
//   for (let i = 0; i <= n; i++){
//     sum += i;
//   }
//   return sum;
// }



// recursion

// let sumToN = function(n){
//   if (n > 0){
//     return n + sumToN(n-1);
//   }
//   return null;
// }
// console.log(sumToN(5));

// sumToN(5);
// sumToN(4)
// sumToN(3)
// sumToN(2)
// sumToN(1)


// function reverse(str){
//   if(str.length <= 1){
//       return str;
//   }
//   else {
//       return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
//   }
// }

// console.log(reverse("house"));

function ArrayAdditionI (arr) {
  var sArr = arr.sort(function (a,b) {
      return a-b;
  });
  var biggest = sArr.pop();
  function recursion (start, indx) {
      if (start + sArr[indx] === 12) {
          return true;
      }
      else if (sArr.length < indx) {
          return false;
      }
      else if (start + sArr[indx] < biggest) {
          return recursion(start + sArr[indx], indx + 1) || recursion(start, indx+1)
      }
      else {
          return false;
      }
  }
  return recursion(0,0);
}

console.log(ArrayAdditionI([1, 12, 4, 7, 6]));
