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
        // store the parsed data
        const body = []

        // parse the data buffer
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        
        // run this until .on finishes parsing all data
        req.on('end', () => {
            // to interact with the chunks of data, we need to buffer them
            const parsed_body = Buffer.concat(body).toString()
            const message = parsed_body.split("=")[1]
            console.log(message)
        })
        fs.writeFileSync('post.txt', 'DUMMY')
        res.statusCode = 302 
        res.setHeader('Location', '/')
        return res.end()
    }
    res.end('hello')
}).listen(3000)

