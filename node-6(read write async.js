

const {readFile, writeFile} = require('fs')
readFile('text1.txt','utf-8', (err, result)=> {
    if(err){
        console.log(`file ${'text.txt'} shows error`)
    }
    
  
  writeFile('result.txt',`${result}`,{flag:'a'}, (err,result)=>{
    if(err){
        console.log(`file ${'text.txt'} shows error`)
    }
    
  

})

})

readFile('text2.txt','utf-8', (err, result)=> {
    if(err){
        console.log(`file ${'text.txt'} shows error`)
    }
    
  
 
  writeFile('result.txt',`${result}`,{flag:'a'}, (err,result)=>{
    if(err){
        console.log(`file ${'text.txt'} shows error`)
    }
    
  
 

})
    

})
