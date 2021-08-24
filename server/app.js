const express = require('express')
const app = express()
const knex = require('knex')(require('./knexfile.js').development)
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000', methods: 'GET, PUT, PATCH, POST, DELETE' }))


app.get('/', async (req, res) => {
    try {
        const data = await knex
            .select('*')
            .from('greeting')

            console.log('This is received from'. data)
        res.status(200).send(data)
    } catch (err) {
        res.send(err)
    }
})

module.exports = app