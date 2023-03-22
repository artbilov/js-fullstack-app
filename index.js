const {createServer} = require("http");

const server = createServer(handleRequest);
const port = process.env.PORT || 3000;

server.listen(port, () => console.log("Server started at http://localhost:" + port)) ;

function handleRequest(request, response) {
    response.end("Hello world");
}