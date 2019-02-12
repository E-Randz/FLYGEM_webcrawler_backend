var fs = require('fs');

convertToText = (fileName, data) => {
fs.writeFile(`${filename}.txt`, jsonData, function (err) {
  if (err) {
    console.log(err);
  }
});

}
module.exports = convertToText