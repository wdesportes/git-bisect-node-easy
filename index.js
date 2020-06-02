const fs = require('fs');
const moo = fs.readFileSync('moo.txt').toString();
console.log(moo);
