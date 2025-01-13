const http = require("http");
const fs = require("fs");

const port = 3000;
const server = http.createServer();

server
    .on("listening", () => {console.log(`Server listening on port ${port}`)})
    .on("request", (req, res) => {
        const url = req.url;
        console.log(url);
        if(url === "/") { //serve the form html page
            fs.createReadStream("index.html").pipe(res);
        } 
        else if(url.startsWith("/submit")) {
            /*
                When using GET in the form method, the data we submit
                is attached as part of the url, in our case:
                /submit?username=johndoe&password=12345678

                In order to take the query parameters out of the URL, 
                we can constuct a URL object and then access its 
                searchParams (which is an object of type URLSearchParams).
                To remove any confusion, pay attention on what line () is 
                printing.

                Also note, that the browser URL is showing our 
                username and password. A problem this regarding GET
                method. DO NOT USE the get method to send over 
                sensitive information such as SNN, passwords, pins ect.
            */
            const longURL = new URL(`localhost:3000${url}`);
            console.log(longURL);
            const username = longURL.searchParams.get('username');
            const password = longURL.searchParams.get('password');
            
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(`<h1>${username}</h1>`);
            res.end(`<p>${password}</p>`);
        }

    })

server.listen(port);