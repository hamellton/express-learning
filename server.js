const express = require('express')
import express from 'express'
const app = express()
require('./database/config')
const user = require('./models/userModel')
const path = require('path')
const bodyParser = require('body-parser')
// const middleware = require('./middleware/middleware')
import { middleware } from './middleware/middleware.js'

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'client')))
app.use(middleware)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'), (err) => {
        if (err) {
            res.sendFile(path.resolve(__dirname, 'client', 'error.html'), (err) => {
                if (err) {
                    res.send('<div style="color: red">Error</div>')
                }
            })
        }
    })
})

app.get('/users', (req, res) => {
    user.find({}, (err, users) => {
        if (err) {
            return res.statusCode(500)
        }
        console.log(users)
        res.send(users)
    })
})

app.post('/users', (req, res) => {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body)
    res.send('data on server')
})

app.get('/download', (req, res) => {
    console.log(req.middleware)
    res.download(path.resolve(__dirname, 'client/img', 'img.png'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server has been started on: ${PORT}`))