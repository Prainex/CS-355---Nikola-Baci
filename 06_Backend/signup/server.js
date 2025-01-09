const http = require("http");
const fs = require('fs');
const port = 3000;
const server = http.createServer();

server.on("listening", () => {
    console.log(`Server is running on ${port}`);
})

server.on("request", (req, res) => { 
    const url = req.url;
    console.log(url);
    res.writeHead(200, {"Content-type" : "text/html"});
    if (url === '/'){
        fs.createReadStream("./06_Backend/signup/signup.html").pipe(res);
    } else if (url === "06_Backend/signup/style.css"){
        res.writeHead(200, {"Content-type" : "text/css"});
        fs.createReadStream("./style.css").pipe(res);
    } else {
        res.end('wowie');
    }
});

server.listen(port);