
const http = require('http');
const hostname = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content_Type','text/html');
    res.end('<html> <body> <h1> server connect successfully </h1> </body> </html>')

});

server.listen(port, hostname, () => {
    console.log(`server runing at http://${hostname}:${port}`);
})