const http = require("http");
const fs = require("fs");

const port = 3000;
const server = http.createServer();

server.on("request", handleRequest);

function handleRequest(req, res) {
    const url = req.url;
    if (url ==="/Users/arvindmajumder/CS355/why-expressjs/index.html"){
        res.writeHead(200, {"Content-type":"text/html"});
        fs.createReadStream("index.html").pipe(res);
    }
    else if( url ==="/styles.css"){
        res.writeHead(200, {"Content-type":"text/css"});
        fs.createReadStream("styles.css").pipe(res);

    }
    else if( url ==="/mlk-1.jpg"){
        res.writeHead(200, {"Content-type":"image/html"});  
        fs.createReadStream("mlk-1.jpg").pipe(res);

    }
    else if( url ==="/mlk-2.jpg"){
        res.writeHead(200, {"Content-type":"image/html"});
        fs.createReadStream("mlk-2.jpg").pipe(res);

    }
    else if( url ==="/mlk-3.jpg"){
        res.writeHead(200, {"Content-type":"image/html"});
        fs.createReadStream("mlk-3.jpg").pipe(res);

    }
    else{
        res.writeHead(404, "Not Found");
        res.end();
    }
}

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
