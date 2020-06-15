const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
    //console.log(req.headers);
    console.log('request for ' +req.url+ 'by method '+ req.method);
    
    if(req.method == 'GET'){
        let fileURL;
        if(req.url == '/'){
            fileURL = "/index.html"
        } else {
            fileURL=req.url
        }

        let filePath = path.resolve('./public' + fileURL);
        const fileExt = path.extname(filePath);

        if (fileExt == '.html'){
            fs.exists(filePath, (exists) => {
                if(!exists){
                    res.stausCode = 404;
                    res.setHeader('Content-type', 'text/html');
                    res.end('<html> <body> <h1> error 404: '+ fileUrl +' does not exist </h1> </body> </html>')
                } 
                    res.stausCode = 200;
                    res.setHeader('Content-type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
            })
        }
            else{
                res.stausCode = 404;
                res.setHeader('Content-type', 'text/html');
                res.end('<html> <body> <h1> error 404: '+ fileUrl +' not a HTML file </h1> </body> </html>');
            }
        }

     else {
        res.stausCode = 404;
        res.setHeader('Content-type', 'text/html');
        res.end('<html> <body> <h1> error 404: '+ fileUrl +' not supported </h1> </body> </html>')
    }
    //res.statusCode = 200;
    //res.setHeader('Content_Type','text/html');
    //res.end('<html> <body> <h1> server connect successfully </h1> </body> </html>')

});

server.listen(port, hostname, () => {
    console.log(`server runing at http://${hostname}:${port}`);
})