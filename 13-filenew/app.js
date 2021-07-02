const fs = require('fs').promises;
const path = require('path');



console.log(__dirname + path.sep );

fs.readFile(__dirname + path.sep + 'text.txt', 'utf8')
.then((data) => console.log(data))
.catch(console.error);


fs.appendFile(__dirname + path.sep + 'newfile.txt', 'Helo, dream')
.then(() =>{
    fs.copyFile(__dirname + path.sep +'newfile.txt', __dirname + path.sep+'text2.txt')
    .catch(console.error);
})
.catch(console.error);



fs.mkdir(__dirname + path.sep +'sub-folder')
.catch(console.err);

fs.readdir('./')
.then(console.log)
.catch(console.error);




