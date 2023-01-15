let data;
const fs = require('fs')
console.log('start')

fs.readFile('text1.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
   
    data = result
    
    
   
   })

 let interval = setInterval(()=> {
    if(typeof(data) == 'string')
    {
        console.log(data)
        clearInterval(interval)
    }
})
