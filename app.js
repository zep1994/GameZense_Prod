const http = require('http')

let server = http.createServer((req, res) => {
    res.end(`Server is listening on port 3000`)
})

server.listen(3000)