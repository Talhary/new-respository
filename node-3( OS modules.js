const os = require('os')
// get user data
const user = os.userInfo()
console.log(user);
// return the system runtime in seconds
console.log(`system runtime is ${Math.floor(os.uptime())}`)
const currentOS = {
    name : os.type(), 
    releaseDAte: os.release(),
     freeMemory: os.freemem(),
     TotalMemory: os.totalmem(),
     version : os.version(),
     totalmem: os.totalmem()
}
console.log(currentOS);