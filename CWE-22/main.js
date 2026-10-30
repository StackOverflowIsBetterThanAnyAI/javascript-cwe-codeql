const express = require('express')
const path = require('path')

const app = express()

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.query.file)
    res.sendFile(filePath)
})

app.listen(3000)
