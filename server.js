const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.write('<h1>HI THERE I AM ABHISHEK</h1>');
    res.end();
})

const PORT = process.env.PORT || 8000;
server.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})