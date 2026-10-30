const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

const emails = new Map()

const updateEmail = (sessionId, email) => {
    emails.set(sessionId, email)
}

app.post('/account/email', (req, res) => {
    updateEmail(req.cookies.sessionId, req.body.email)
    res.redirect('/account')
})

app.listen(3000)
