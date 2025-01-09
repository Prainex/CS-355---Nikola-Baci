//Not a part of Project 1
//Classwork was to create a server for personal portfolio

const http = require("http");
const fs = require("fs");
const { type } = require("os");

const port = 3000;
const server = http.createServer();

server.on("listening", () =>{
    console.log(`Server is running on port: ${port}`);
})

server.on("request", (req, res) => { 
    const url = req.url;
    console.log(url);
    if (url === "/"){
        res.writeHead(200, {"Content-type" : "text/html"});
        fs.createReadStream("./Projects/Project 1/index.html").pipe(res);
    }
    else if (url === "/style.css"){
        res.writeHead(200, {"Content-type" : "text/css"});
        fs.createReadStream("./Projects/Project 1/style.css").pipe(res);
    }
});

server.listen(port);