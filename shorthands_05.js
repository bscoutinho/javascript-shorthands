// 5. For Loop Shorthand

//Longhand:
const fruits = ['mango', 'peach', 'banana'];
for (let i = 0; i < fruits.length; i++) {
    console.log('fruta: ' + i)
}


//Shorthand:
const fruits = ['mango', 'peach', 'banana'];
for (let fruit of fruits) {
    console.log(fruit)
}

//shorthand to get index:
const fruits = ['mango', 'peach', 'banana'];
for (let index in fruits) {
    console.log(index)
}

//shorthand to get index in objects
const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}
for (let key in obj)
  console.log(key) // output: continent, country, city

//shorthand to get value in objects
const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}
for(key in obj) {
    if(obj.hasOwnProperty(key)) {
        console.log(obj[key])
    }
}