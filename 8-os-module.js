const os = require('os')

// info about current user
console.log("User Info => " , os.userInfo())

// system uptime in seconds
console.log(`System uptime ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)