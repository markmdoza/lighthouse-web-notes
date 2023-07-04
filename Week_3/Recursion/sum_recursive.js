/** Breaking down recursion
To start figuring out how to solve a problem using recursion, it's helpful to first figure out the base case and the recursive case. The base case involves no calls to itself, which makes it a little bit easier to think about. So we'll start with the base case. 

Base Case
The base case happens when the input to the function is so basic that calling the function again is not required. When summing all whole numbers from n down to 1, what value of n wouldn't require any further looping?

Well, what's the smallest number we can use to sum from n down to 1? The answer is 1. If n is 1, then we're not going to do any calculations because we're already at 1. All the whole numbers from 1 to 1 consists only of the number 1, so there's no addition to do, we just have one number. So the sum of all numbers from 1 to 1 is simply just 1.

**/

function sumToOne(n) {
  if (n === 1) {
    return 1;
  }
}

/** That's the base case, n === 1. When n is equal to 1, we will simply return the value 1, there's no need to do any further calculations.

Notice that when a recursive function only contains a base case, it's not recursive at all. It's just a normal function with no calls to itself. The base case is simply when the function doesn't make any recursive calls. 

Recursive Case
We've implemented our base case. If we call this function with the value 1, it will return the correct result, 1. But it doesn't work for any other numbers. That's because anything greater than 1 will require the function to call itself recursively. So the recursive case is when n > 1. But how do we implement the recursive case?

The simplest input to this function is 1:
sumToOne(1) = 1

The next simplest input is 2 which requires the least amount of work after 1:
sumToOne(2) = 2 + 1

Then it's 3:
sumToOne(3) = 3 + 2 + 1

Then 4:
sumToOne(4) = 4 + 3 + 2 + 1

And so on.

We want to try and spot a way for each of these problems to be solved by first solving a smaller version of that problem. For example, can we solve sumToOne(2) by using the result of sumToOne(1)? And can we solve sumToOne(3) by using the result of sumToOne(2)?

sumToOne(1) = 1
sumToOne(2) = 2 + 1
sumToOne(3) = 3 + 2 + 1
sumToOne(4) = 4 + 3 + 2 + 1

Do you spot a pattern here? Let's rewrite it like this:

sumToOne(1) = 1
sumToOne(2) = 2 + sumToOne(1)
sumToOne(3) = 3 + sumToOne(2)
sumToOne(4) = 4 + sumToOne(3)

We can summarize what's going on here:

sumToOne(n) = n + sumToOne(n-1)

As long as n is greater than 1, sumToOne(n) = n + sumToOne(n-1). That's basically our entire recursive function.

Pseudo Code:

if n > 1; (recursive case)
return n + sum of all numbers from 1 to (n-1)
if n == 1: (base case)
return 1
**/

function sumToOne(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToOne(n - 1)
}

console.log(sumToOne(4));