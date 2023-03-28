//Create a simple API : ==>
//use 'writeHead' to send status code, and type of data that has to send
//Status Codes are of specific types. Random status code will not work
//Status code are of many types like : 200, 201, 404, 500 every one has a different use cases
//by declaring which types of data
//JSON.stringify : convert the data in to sting
//it takes object as a data or you can
//create another data.js file declare the array of objects 
//use module.exports=data; to send the module

//*Note* 👇
//module.exports should be declare after we create the data array objects other wise it will show error


//in this file import the the data file using 'require'
//now you can use the 'data' variable to pass the variable inside JSON.stringify
//run the file and check it in 'POSTMAN'
//use 'GET' and call the local host to check the status its works or not




const http =require ('http'); //importing http module
const data = require('./data');//importing user data module file from data.js

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);