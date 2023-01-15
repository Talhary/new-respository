const http = require('http')
console.log('sdf')
const server = http.createServer((req, res)=> {
    console.log(req)
  if(req.url === '/'){
   
    res.end('fds')
  }
  if(req.url === '/about'){
   
    res.end('you are at about')
  }
  if(req.url === '/contact'){
   
    res.end('contact us')
  }
  if(req.url === '/page'){
   
    res.end('end it')
  } else{
    res.end('wrong page')
  }
})
server.listen(5000)
