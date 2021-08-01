const products = require('../data/products.json');
const {v4:uuid} = require('uuid'); 
const {writeDataToFile} = require('../utils');

// find all the products
function find(){
    return new Promise((resolve,reject)=>{
        resolve(products);
    })
}

// find a specific product
function findOne(id){
    return new Promise((resolve,reject)=>{
        const product = products.find(p=>p.id===id);
        resolve(product);
    })
}

// insert a product
function insertOne(product){
    return new Promise((reslove,reject)=>{
        const newProduct = {id:uuid(), ...product};
        products.push(newProduct);
        writeDataToFile('../data/products.json',products);
        reslove(newProduct);
    })
}

module.exports={
    find,
    findOne,
    insertOne
}