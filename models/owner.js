const fs = require('fs');
const path = require('path');

const ownersPath = path.join(__dirname, '..', 'data', 'owners.json');

const readAll = () => {
  const ownersJSON = fs.readFileSync(ownersPath, 'utf8');
  return JSON.parse(ownersJSON);
}

const readIndividual = (id) => {
  const ownersJSON = fs.readFileSync(ownersPath, 'utf8');
  const owners = JSON.parse(ownersJSON);
  const filteredOwners = owners.filter( owner => owner.id === id);
  return filteredOwners[0];
}

module.exports = {
  readAll,
  readIndividual
}
