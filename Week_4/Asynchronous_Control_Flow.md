### Agenda
- CallBacks & Higher Order Functions

```
const highOrderFunction = (callback) => {
  return callback()
}
```

### Callbacks Recap
Example 1:


```
// Higher Order Function 
function showNumbersAndExecuteOperation(number1, number2) {
  console.log('Numbers passed:', number1, number2, operation);
  // "operation" is a CALLBACK
  return operation(number1, number2);
}

// This is not passing a callback...
showNumbersAndExecuteOperation(5, 7);

/**
* How can I pass a callback to a Higher Order Function?
*/

const result = showNumbersAndExecuteOperation(3, 3 (n1, n2) => { return n1 + n2}); // This is more common for callback functions. //
console.log('Result:', result);

Output = 
Numbers passed: 3 3
Result: 6
```

Example 2:
```
const multiplyTwoNumbers = (n1, n2) => { return n1 * n2}

const result = showNumbersAndExecuteOperation(4, 6, multiplyTwoNumbers);
console.log('Result:', result);

Output =
Numbers passed: 4 6
Result: 24
```

### Async vs Sync Code

Sync Code
 - Tasks execute one by one after another (sequential).
 - Everything is built by us.

 Async Code
 - They execute at once from outside OUR code (runs parallel).
 - We use something else to process the task.


/ Synchronous Code /
Everything we have seen so far is synchronous 
- For loops, If statements, variable declaration or assignment, console.logs etc..
```
console.log('Program Starting...');
console.log('Program ends');
```
Asynchronous Code
There are specific functions that are ASYNC by nature
```
setTinmeout(() => {
  console.log('Two seconds have elapsed');
}, 2000) // Callback is executed after 2000 milliseconds.

setTimeout(() => {
  console.log('Two and a half seconds have elapsed');
}, 2500) // They will both execute.
```
JavaScript will always run code top to bottom, running everything that's SYNCHRONOUS first, and then ASYNCHRONOUS.

### File System
You will have to use the require(); syntax.
```
const fs = require('fs');
  console.log(fs);

  fs.readFile('./AccessAnyFileInTheSameDirectory', 
  {encoding: 'utf-8' }, // How we will process the file 
  (error, data) => {
    console.log('error:', error);
    console.log('data:', data);

    fs.writeFile(
      './spanish-lesson-copy.txt'
    )
  }
  ) // Asynchronous
```

  ### Browser Events

1. To link JS with HTML, you'll need to src in the body element.
2. Once linked, get the element like so:

```
const button = document.getElementById('my-btn');

button.addEvenListener('click', () => { console.log('button was pressed') }) // Asynchronous code.
```

Final Example

``` 
const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };

console.log('BEFORE TIMEOUT CALL');
const timeoutData = setTimeout(() => {
  data.initials = "YAV";
  callback();

  console.log(data);
  return data;
});

  console.log(timeoutData);

  console.log('AFTER TIMEOUT CALL');

}


console.log('BEFORE MAIN CALL');

const result = higherOrderFunc(
  () => { console.log('INSIDE CALLBACK'); }
)

console.log('AFTER MAIN CALL');
```

When going through someone else' code:
1. Check global scope
2. Any functions that are synchronous will be executed.