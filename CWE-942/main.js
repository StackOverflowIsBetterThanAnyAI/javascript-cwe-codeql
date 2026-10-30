const express = require('express')

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
})

app.get('/api/profile', (req, res) => {
    res.json({ user: 'admin', email: 'admin@example.com' })
})

app.listen(3000)
