const express = require('express')

const app = express()

app.get('/login', (req, res) => {
    res.redirect(req.query.returnUrl)
})

app.listen(3000)
