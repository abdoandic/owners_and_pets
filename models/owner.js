const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');

const ownersPath = path.join(__dirname, '..', 'data', 'owners.json');

let owners;

const process = () => { return owners; }

const index = () => {
  fs.readFile(ownersPath, 'utf8', (error, data) => {
    if (error) { console.error(error); } // Not again...
    owners = JSON.parse(data);
    console.log(owners);
    process();
  });
}

module.exports = {
  index
};
