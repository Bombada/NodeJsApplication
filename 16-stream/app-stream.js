const fs = require('fs');
const path = require('path');

fs.createReadStream(__dirname+path.sep + 'file.txt', {
    highWaterMark
}