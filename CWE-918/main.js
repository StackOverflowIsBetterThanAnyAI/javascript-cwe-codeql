const express = require('express')
const axios = require('axios')

const app = express()

app.get('/preview', async (req, res) => {
    const response = await axios.get(req.query.url)
    res.json({ status: response.status, length: response.data.length })
})

app.listen(3000)
