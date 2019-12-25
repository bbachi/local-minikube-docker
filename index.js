const http = require('http');
const qs = require('querystring');
const url = require('url');

const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {

    if(req.method !== 'GET') handleError(res, 405)
    
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.statusCode = 200;
        res.write(`<h1>Hello World</h1>`);
        res.end();
    }

    const {pathname, query} = url.parse(req.url);

    if(pathname === '/hello') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.statusCode = 200;
        const {name} = qs.parse(query);
        res.write(`<h1>You sent the name: ${name}</h1>`);
        res.end();
    }

    handleError(res, 404);
        
});

function handleError(res, code) {
    res.statusCode = code;
    res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
}

server.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
})