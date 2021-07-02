const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);


// basename

console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

console.log(path.extname(__filename));

const parsed = path.parse(__filename);