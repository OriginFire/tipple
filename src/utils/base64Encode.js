const fs = require('fs');

function base64Encode(file) {
  // read binary data
  const bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  const bytes = new Buffer(bitmap).toString('base64');
  return `data:image/jpg;base64,${bytes}`;
}

export default base64Encode;
