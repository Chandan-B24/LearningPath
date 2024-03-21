export const stackString : string = 
`var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack); // [1,2,3]

//pop

myStack.pop()
console.log(myStack); // [1,2]
`

export const shiftingString : string =
`var myQueue = [1,2,3];
myQueue.shift();
console.log(myQueue) // [2,3]
`

export const unshiftingString : string = 
`var myQueue = [1,2,3];
myQueue.unshift(0);
console.log(myQueue) // [0,1,2,3]
`