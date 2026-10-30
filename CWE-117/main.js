const express = require('express')

const app = express()

app.get('/login', (req, res) => {
    console.log(`Failed login attempt for user: ${req.query.user}`)
    res.status(401).end()
})

app.listen(3000)
