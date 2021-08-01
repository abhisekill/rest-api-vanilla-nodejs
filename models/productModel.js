let products = require('../data/products.json');
const {v4:uuid} = require('uuid'); 
const {writeDataToFile} = require('../utils');

// find all the products
function find(){
    return new Promise((resolve,reject)=>{
        resolve(products);
    })
}

// find a specific produc by its id
function findById(id){
    return new Promise((resolve,reject)=>{
        const product = products.find(p=>p.id===id);
        resolve(product);
    })
}

// insert a product
function insertOne(product){
    return new Promise((resolve,reject)=>{
        const newProduct = {id:uuid(), ...product};
        products.push(newProduct);
        writeDataToFile('./data/products.json',products);
        resolve(newProduct);
    })
}

// update a product
function update(id,product){
    return new Promise((resolve,reject)=>{
        const index = products.findIndex(p=>p.id===id);
        products[index]={id,...product};
        writeDataToFile('./data/products.json',products);
        resolve(products[index]);
    })
}

// delete a product
function remove(id){
    return new Promise((resolve,reject)=>{
        products = products.filter(p=> p.id !== id);
        writeDataToFile('./data/products.json',products);
        resolve();
    })
}

module.exports={
    find,
    findById,
    insertOne,
    update,
    remove
}