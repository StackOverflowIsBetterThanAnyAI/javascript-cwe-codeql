const express = require('express')

const app = express()

app.get('/settings', (req, res) => {
    try {
        res.json(JSON.parse(req.query.data))
    } catch (err) {
        res.status(500).send(err.stack)
    }
})

app.listen(3000)
