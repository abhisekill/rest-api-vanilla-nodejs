const {getProducts, getProduct, createProduct} = require('./controllers/productController');

const http = require('http');
const server = http.createServer((req,res)=>{

    if(req.url==='/api/products' && req.method==='GET'){
       getProducts(req,res);
    }else if(req.url.match(/\/api\/products\/([0-9a-z]+)/) && req.method==='GET'){
        const id=req.url.split('/')[3];
        getProduct(req,res,id);
    }else if(req.url==='/api/products' && req.method==='POST'){
        createProduct(req,res);
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'})
        res.end(JSON.stringify({message:'Route Not Found'}))
    }
})

const PORT = process.env.PORT || 8000;
server.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})