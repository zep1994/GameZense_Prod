const http = require('http')

http.createServer((req, res) => {
    const url = req.url 
    if (url === '/') {
        res.end(`Server is listening on port 3000`)
    }
}).listen(3000)

