const Product = require('../models/productModel');
const {getPostData} = require('../utils');
// @desc get all products
// @route GET /api/products
async function getProducts(req,res){
    try {
        const products = await Product.find();
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}

// @desc get a specific product
// @route GET /api/products/:id
async function getProduct(req,res,id){
    try {
        const product = await Product.findOne(id);
        if(!product){
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'product does not exist'}));
        }else{
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(product));
        }
    } catch (error) {
        console.log(error);
    }
}

// @desc get a specific product
// @route GET /api/products/:id
async function createProduct(req,res){
    try {
        const body = await getPostData(req);
        const {name,price,description} = JSON.parse(body);
        const product={
            name,
            price,
            description
        }
        const newProduct = await Product.insertOne(product);
        res.writeHead(201,{'Content-Type':'application/json'});
        return res.end(JSON.stringify(newProduct));
        
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    getProducts,
    getProduct,
    createProduct
}