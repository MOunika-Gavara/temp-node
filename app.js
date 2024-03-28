const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page');
    } else if (req.url === '/about') {
        res.end('You are in the about page');
    } else {
        res.end('Page not found');
    }
});

server.listen(5000);
