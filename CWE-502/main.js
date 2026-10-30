const express = require('express')
const cookieParser = require('cookie-parser')
const serialize = require('node-serialize')

const app = express()
app.use(cookieParser())

app.get('/profile', (req, res) => {
    const data = Buffer.from(req.cookies.profile, 'base64').toString()
    const profile = serialize.unserialize(data)
    res.json({ name: profile.name })
})

app.listen(3000)
