const crypto = require('crypto')

const main = (creditCardNumber, key) => {
    const cipher = crypto.createCipheriv('des-ecb', key, null)
    return cipher.update(creditCardNumber, 'utf8', 'hex') + cipher.final('hex')
}
