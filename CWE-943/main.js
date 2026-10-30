const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()
app.use(express.json())

const client = new MongoClient('mongodb://localhost:27017')
const users = client.db('shop').collection('users')

app.post('/login', async (req, res) => {
    const user = await users.findOne({
        username: req.body.username,
        password: req.body.password,
    })

    res.json({ authenticated: Boolean(user) })
})

app.listen(3000)
