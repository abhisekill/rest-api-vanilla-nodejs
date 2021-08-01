const http = require('http');
const server = http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'text/html'})
   res.end('<h1>This is routes branch</h1>')
})

const PORT = process.env.PORT || 8000;
server.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})