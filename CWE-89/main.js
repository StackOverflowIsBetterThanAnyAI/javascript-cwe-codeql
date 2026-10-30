const express = require('express')
const mysql = require('mysql')

const app = express()
const connection = mysql.createConnection({ host: 'localhost', database: 'shop' })

app.get('/products', (req, res) => {
    const query = `SELECT * FROM products WHERE category = '${req.query.category}'`

    connection.query(query, (err, rows) => {
        if (err) return res.status(500).end()
        res.json(rows)
    })
})

app.listen(3000)
