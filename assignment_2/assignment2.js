const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
            <head>
                <title>Student Portal</title>
            </head>

            <body>
                <h1>Student Portal</h1>
                <hr>

                <p><strong>Name:</strong> Shubh Saraswat</p>
                <p><strong>Course:</strong> BTech in Computer Science</p>
                <p><strong>College:</strong> ITM College</p>

                <p>Welcome to our Node.js application.</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});