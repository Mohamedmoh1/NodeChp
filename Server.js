const http = require('http')
http.createServer((req,res)=>{
    res.write('Hello Node!!!!')
    res.end()
}).listen(3000)