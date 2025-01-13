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
        else if(url === "/submit") {
            /*
                When using POST in the form method, the data we submit
                is attached as part of the body, not the url, therefor
                the data is invisble to the naked eye.

                In order to take the query parameters out of the body, 
                we need to read the data stream produced by the browser.
                The stream will look like this:
                ?username=johndoe&password=12345678

                To split the query paramaters we construct a URLSearchParams
                object.
            */

            let data = "";
            req.on("data", (chunk) => {
                data += chunk;
            });
            req.on("end", () => {
                /*
                    Make sure the rest of the code only follows
                    after the event "end" has been emitted. This method
                    is asynchronous, which means that it takes some time
                    to complete and if you place code outside of it,
                    that code will execute before the data has arrived 
                */
                console.log(data);
                const params = new URLSearchParams(data);
                const title = params.get('title');
                const essay = params.get('essay');
                
                res.writeHead(200, {"Content-Type":"text/html"});
                res.write(`<h1>${title}</h1>`);
                res.end(`<p>${essay}</p>`);
            });

            //if you place code here, it will execute before data arrives
        }

    })

server.listen(port);