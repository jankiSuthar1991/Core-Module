// const hello = "Hello World!";
// console.log(hello);

const fs = require('fs');
const textIn = fs.readFileSync('txtinput.txt','utf-8');
console.log(textIn);