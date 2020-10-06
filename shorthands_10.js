// 10. Arrow Functions Shorthand

//Longhand:
function sayHello(name) {
    console.log('Hello', name);
  }
  
  setTimeout(function() {
    console.log('Loaded')
  }, 2000);
  
  list.forEach(function(item) {
    console.log(item);
  });


//Shorthand:
sayHello = name => console.log('Hello', name);

setTimeout(() => console.log('Loaded'), 2000);

list.forEach(item => console.log(item));
