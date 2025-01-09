//Node JS installed
//Node JS, Callbacks, Async Programming & Node JS http, fs, 
//Node JS Event Driven Programming
//Ports, HTTP Codes

const http = require("http");

const port = 3000;
const server = http.createServer();

server.on("listening", () => 
    console.log(`Server is running on ${port}`) //Listens to the event and outputs what's being triggered
);

server.on("request", (req, res) => { //The server takes upon a 'req'uest and a 'res'ponse and what it does is it will formulate 
    res.writeHead(200, {"Content-type":"text/html"}); //the response to fit the request's. Res is what we control shows, req is 
    res.write("Hello CS 355");                          //what will be presented
    console.log(req);
});

server.listen(port);