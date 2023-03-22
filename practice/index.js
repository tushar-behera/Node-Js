// import value from another file "app.js"
const app = require('./app')
console.log(app)  //use to access the whole object
console.log(app.c()) //use to call particular value from the object


//Using of filter() function to filter array in diff ways

const arr =[2,4,5,7,1,3,8,3]    //array created

arr.filter((item)=>{    //help to traverse accross the array
    console.log(item)
})

let result = arr.filter((value)=>{  //help to check repetation of particular value inside arr
    return value === 3              
})
 console.log(result)

 let result_1 = arr.filter((value)=>{  //help to check value greater or less then the input value 
    return value > 3              
})
 console.log(result_1)