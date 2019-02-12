var fs = require('fs');

const convertToText = (fileName, data) => {
fs.writeFile(`${fileName}.txt`, data, function (err) {
  if (err) {
    console.log(err);
  }
});

}


module.exports = convertToText;