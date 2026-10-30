const crypto = require('crypto')

const main = (password) => {
    return crypto.createHash('md5').update(password).digest('hex')
}
