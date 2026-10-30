const express = require('express')
const libxmljs = require('libxmljs')

const app = express()
app.use(express.text({ type: 'application/xml' }))

app.post('/import', (req, res) => {
    const doc = libxmljs.parseXml(req.body, { noent: true })
    res.json({ name: doc.get('//name').text() })
})

app.listen(3000)
