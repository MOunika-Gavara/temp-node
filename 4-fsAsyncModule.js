const {readFile, writeFile} = require('fs');

console.log("first")

readFile('./content/newFile.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }
    const first = result;
readFile('./content/secondFile.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }
    const second = result
    console.log(first,second)
    writeFile('./content/thridAsyncFile.txt','HI there! this is Async write file',(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log("second")
    })
})
})

console.log("third")