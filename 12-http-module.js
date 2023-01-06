const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome to our home page')
    }    
    if(req.url === '/about'){
        res.write('Welcome about page')
    }
    res.write(`
        <h1>Page does not exists</h1>
        <a href="">Back to home</a>
    `)    
})

server.listen(5000)