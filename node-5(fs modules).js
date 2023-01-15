const {readFileSync, writeFileSync} = require('fs')
// replace data on file
for(let i=1; i<= 10; i++){
    writeFileSync('text.txt', `current number is ${i} `)
    }
// append data to file
for(let i=1; i<= 10; i++){
writeFileSync('text.txt', `current number is ${i} `, {flag:'a'})
}
let data = readFileSync('text.txt', 'utf-8' )
console.log(data);
// const data = readFileSync('./text.txt', 'utf-8')

// console.log(data);
// let dataArray = data.split(' ');
// console.log(dataArray.indexOf('Talha'))