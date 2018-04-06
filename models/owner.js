const fs = require('fs');
const path = require('path');

const ownersPath = path.join(__dirname, '..', 'data', 'owners.json');

const readAll = () => {
  const ownersJSON = fs.readFileSync(ownersPath, 'utf8');
  return JSON.parse(ownersJSON);
}

module.exports = {
  readAll
}
