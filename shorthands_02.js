// 2. Short-circuit Evaluation Shorthand

//Longhand:
let variable1;
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
    let variable2 = variable1;
    console.log(variable2)
}


//Shorthand:
let variable1;
let variable2 = variable1  || 'new';
console.log(variable2 === 'new');

