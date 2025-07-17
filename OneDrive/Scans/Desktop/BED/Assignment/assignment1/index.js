// H.W.
// assignment 10marks
// write data in file demo.txt, data(input) will be passed using terminal
// process.arg 

const fs = require('fs');
const input = process.argv.slice(2).join(' ');
if (!input) {
  console.log("Please provide some input text.");
  process.exit(1);
}
fs.writeFileSync('./demo.txt', input);
console.log("Data written to demo.txt")