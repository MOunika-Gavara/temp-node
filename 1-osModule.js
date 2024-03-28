const os = require('os');

const user = os.userInfo();
console.log(user)

const currentOs = {
    name: os.type(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    release: os.release(),
}

console.log(currentOs)
