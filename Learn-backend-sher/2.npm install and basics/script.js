//Intorduction to node js --> Node is a javaScript runtime environment

// Installing node js and npm
//-- npm init (pakage.json create (lekha jokha of project))

//Node.js basics
// working with modules
// file system operations

// fileSystem pakage in node js (writeFile, appendFile, copyFile, rename, unlink) these basics we learn

// err in fs perbuild paramenter to help us to throw error
// const fs = require('fs')   // just importing fs moulde though reuire('fs')
//fs.writeFile(file,data[,options],callback)

// fs.writeFile('hey.txt','hey Hello kese ho', (err)=>{
//     if(err) console.error(err);
//     else console.log('done')
// })

// fs.appendFile('hey.txt',' mai thik hu',(i)=>{})

// fs.rename('hey.txt','rename.txt',(err)=>{})

// fs.copyFile('rename.txt','./copy.txt',(err)=>{
//     if(err){
//         console.error(err)
//     }else{
//         console.log('done')
//     }
// })

// fs.unlink('copy.txt',(err)=>{
//     if(err) console.error(err);
//     else console.log("removed");
// })

//rmdir remove folder but by default it only allowed remove empty folder so hum parameter mai {recursive: ture} kuch esa karte hai too woo folder delete hota hai

// fs.rm('./copy',{recursive:true},(err)=>{
//     if(err) console.error(err);
//     else console.log("removed")
// })


// understanding HTTP module and create server
const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("Hello world");
});

const port = 3000

server.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log(`server is running on port http://localhost:${port}`)
})




