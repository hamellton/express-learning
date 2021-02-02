const http = require('http')
const fs = require('fs')
const path = require('path')

let server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'client', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if (!ext) {
        contentType += 'text/html'
    }
    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'client', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200)
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200)
            res.end(content)
        }
    })
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`Server has been started on: ${PORT}`)
})