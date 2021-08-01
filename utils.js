const fs = require('fs');


// get the request body (in express.js we simply do req.body)
function getPostData(req){
    return new Promise((reslove,reject)=>{
        let body=''
        req.on('data',(chunck)=>{
            body += chunck.toString();
        })
        req.on('end',()=>{
            reslove(body);
        })
    })
}

// write into the json file (node.js has the file system access)
function writeDataToFile(filename,data){
    fs.writeFileSync(filename,JSON.stringify(data),'utf8',(err)=>{
        console.log(err);
    })
}

module.exports={
    getPostData,
    writeDataToFile
}