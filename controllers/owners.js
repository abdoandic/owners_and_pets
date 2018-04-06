const fs = require('fs');
const path = require('path');
const ownersPath = path.join(__dirname, '..', 'data', 'owners.json');

const index = (request, response) => {
  fs.readFile(ownersPath, 'utf8', (error, data) => {
    if (error) { console.error(error); } // Not again...
    const owners = JSON.parse(data);
    response.send(owners);
  });
};

module.exports = {
  index
}
