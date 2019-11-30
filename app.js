const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {

    // ROUTES
    const url = req.url 
    const method = req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<body></body><form action="/post" method="POST"><input type="text" name="post" /><input type="submit" /></form><body')
        res.write('</html')
        return res.end()
    }

    //POST REQUEST
    if (url === '/post' && method === "POST") {
        fs.writeFileSync('post.txt', 'DUMMY')
        res.statusCode = 302 
        res.setHeader('Location', '/')
        return res.end()
    }
    res.end('hello')
}).listen(3000)

