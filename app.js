const http = require('http')

http.createServer((req, res) => {
    const url = req.url 
    if (url === '/') {
        res.write('<html>')
        res.write('<body></body><form action="/post" method="POST"><input type="text" name="post" /><input type="submit" /></form><body')
        res.write('</html')
        return res.end()
    }
}).listen(3000)

