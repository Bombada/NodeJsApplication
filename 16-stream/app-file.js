const fs = require('fs');
const path = require('path');

const beforeMem = process.memoryUsage().rss;

fs.readFile(__dirname+path.sep+'file.txt', (err,data) => {
    fs.writeFile(__dirname+path.sep+'file2.txt', data, ()=> {});

    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - beforeMem;
    const consumed = diff / 1024 / 1024;
    console.log(consumed);
    console.log(diff);
    
})