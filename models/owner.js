const fs = require('fs');
const path = require('path');
const ownersPath = path.join(__dirname, '..', 'data', 'owners.json');

const index = () => {
  const ownersJSON = fs.readFileSync(ownersPath, 'utf8');
  const owners = JSON.parse(ownersJSON);
  return owners;
}

module.exports = {
  index
}
