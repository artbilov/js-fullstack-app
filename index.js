const { readFile } = require('fs').promises;
const {createServer} = require('http');

const server = createServer(handleRequest);
const port = process.env.PORT || 3000;

server.listen(port, () => console.log('Server started at http://localhost:' + port)) ;

async function handleRequest(request, response) {
    console.log(request.url);

    try {
        const path = request.url.slice(1) || 'index.html';
        const fileContent = await readFile('public/' + path);
        
        if (path.endsWith('.css')) {
            response.setHeader('content-type', 'text/css; charset=UTF-8')
        }

        response.end(fileContent);
    } catch (error) {
        response.statusCode = 404;
        response.end('file not found ' + request.url);
    }
    
}