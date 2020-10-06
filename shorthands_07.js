// 7. Short-circuit Evaluation

//Longhand:
let dbHost;
if (process.env.DB_HOST) {
  dbHost = process.env.DB_HOST;
  console.log(dbhost)
} else {
  dbHost = 'localhost';
  console.log(dbhost)
}


//Shorthand:
const dbHost = process.env.DB_HOST || 'localhost';
console.log(dbhost)