const express = require('express')
const crypto = require('crypto')

const app = express()

app.post('/login', (req, res) => {
    const sessionId = crypto.randomBytes(32).toString('hex')
    res.cookie('sessionId', sessionId, { httpOnly: true, secure: false })
    res.redirect('/')
})

app.listen(3000)
