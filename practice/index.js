//Creating a basic server using 'http' module which help to handle the request & response of the server

const http = require('http');  //importing http module

http.createServer((req,res)=>{
    res.write("<h1>Hello Tushar, Your server is Live and Responding properly</h1>");
    res.end();
}).listen(4500);