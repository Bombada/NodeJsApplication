const fs = require('fs');
const path = require('path');
//3
//rename() 비동기

//Sync
try{
    fs.renameSync(__dirname+ path.sep +'file.txt',__dirname+ path.sep +'filenew.txt');
}catch(error){
 console.error(error);   
}

fs.rename(__dirname+ path.sep +'filenew.txt',__dirname+ path.sep +'file.txt', (error) =>
 { console.log(error)
    console.log("ey");
});

fs.promises.rename(__dirname+ path.sep +'filenew.txt',__dirname+ path.sep +'file.txt')
.then(()=>console.log("complete"))
.catch((error)=>console.error(error));


fs.promises.rename(__dirname+ path.sep +'filenew.txt',__dirname+ path.sep +'file.txt')
.then(console.log("complete"))
.catch(console.error);

console.log('hello');