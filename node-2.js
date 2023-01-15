// console.log(__dirname);
// console.log(__filename);
// console.log(process)
const names = require('./node-1')
const name = require('./utils')
let show12 = (showData)=> {
     console.log(showData)
}
var intervalId = null;
var varCounter = 0;
let timer =(n, data,intervel ) => {
intervalId = setInterval(function(){
    if(varCounter < n) {
         
          console.log(data)
         varCounter++;
         
    } else {
         clearInterval(intervalId);
    }
}, intervel);
}
module.exports = timer