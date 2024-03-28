const {readFileSync, writeFileSync} = require('fs');
console.log("first")

const first = readFileSync('./content/newFile.txt','utf-8');
const second = readFileSync('./content/secondFile.txt','utf-8')
writeFileSync('./content/thirdFile.txt',`Hi there! we are using two files: ${first},${second}`,{flag:'a'});
console.log("second")

console.log("third")