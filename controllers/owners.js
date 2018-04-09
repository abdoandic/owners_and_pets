const fs = require('fs');
const path = require('path');

const ownerModel = require('../models/owner');
const ownersPath = path.join(__dirname, '..', 'data', 'owners.json');

const readAll = (request, response) => {
  const owners = ownerModel.readAll();
  response.send(owners);
}

/* Old version
// const readAll = (request, response) => {
//   fs.readFile(ownersPath, 'utf8', (error, data) => {
//     if (error) { console.error(error); } // Not again...
//     const owners = JSON.parse(data);
//     response.send(owners);
//   });
// };
*/

const readIndividual = (request, response) => {
  const owner = ownerModel.readIndividual(request.params.id);
  response.send(owner);
}

module.exports = {
  readAll,
  readIndividual
}
