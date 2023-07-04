// function countEvenToTwelve(number) {
//   if (number <= 12) {
//     console.log(number);
//     countEvenToTwelve(number+2);
//   }
// }

// countEvenToTwelve(0);


// function countUpFrom(number) {
//   console.log(number);
//   countUpFrom(number+1);
// }

// countUpFrom(1);

function countEvenToTwelve(number) {
  if (number <= 12) { // Recursive Case
    console.log(number);
    // The function will call itself again and get closer to the base case
    countEvenToTwelve(number+2);
  }
  // Base case, do nothing when number > 12
}
countEvenToTwelve(0);

/** Recursion is a tool you can use as an alternative to traditional iteration using for and while loops.

Every recursive function must have a base case and a recursive case.
Each recursive call should break down the current problem into a smaller, simpler one.
The recursive calls must eventually reach the smallest version of the problem, the base case.
The base case is when the problem can be solved without further recursion. **/