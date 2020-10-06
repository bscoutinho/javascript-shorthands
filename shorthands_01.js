// 1. The Ternary Operator

//Longhand:
const x = 20;
let answer;

if (x > 10) {
    answer = "greater than 10";
    console.log(answer)
} else {
    answer =  "less than 10";
    console.log(answer)
}

//Shorthand:
const x = 20;
const answer = x > 10 ? "greater than 10" : "less than 10";
console.log(answer)


//Shorthand nested if statement:
const x = 6;
const answer = x > 10 ? "greater than 10" : x < 5 ? "less than 5" : "between 5 and 10";
console.log(answer)