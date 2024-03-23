export const greetings : string = 
`function greet(firstName: string) {
    console.log("Hello " + firstName);
}

greet("chandan"); // Hello chandan
`

export const sum : string = 
`function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));  // 5
`

export const isLegal : string = 
`function isLegal(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(2)); // false
`

export const functionType : string = 
`function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})
`