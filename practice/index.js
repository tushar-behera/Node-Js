//Learning File system .. help to read, write ,append ,delete

const fs = require('fs')
 fs.writeFileSync("hello.txt","Creating this file with Filesystem 'write file sync") //create a file with name hello.tx with the written input

//  The file whic are imported with require() function are **NON GLOBAL**

console.log("=>",__filename); //return file name
console.log("=>",__dirname);    //return path of directory