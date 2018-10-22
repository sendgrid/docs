const path = require('path');
const fs = require('fs');

module.exports = ({ mdDirectoryPath, imgDirectoryPath })=>{
let dirImages = [];
fs.readdir(imgDirectoryPath, function(err, files){
   if(err){
      return console.log('Unable to scan directory: ' + err);
   }
   files.forEach(function (file){
      dirImages.push(file);
   });
});
fs.readdir(mdDirectoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        fs.readFile(file, function (err, data) {
        if (err) throw err;
        const regex = new RegExp('\\b' + '![' + '\[\w]+' + ']' + '(' + '\[\w]+' +')' + '\\b');
         if (regex.match(data)) {
            // compare image url and image file from dirImages array
        }
      });
    });
});
}
