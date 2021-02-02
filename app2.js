const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.resolve(__dirname, 'client')))
app.get('*', (req, res) => {
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

const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(`Server has been started on: ${PORT}`)
})