const express = require('express')
const app = express()
require('./database/config')
const user = require('./models/userModel')
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'client')))
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

app.get('/download', (req, res) => {
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
})

app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'client/img', 'img.svg'))
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server has been started on: ${PORT}`))