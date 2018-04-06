const fs = require('fs');
const path = require('path');

const petsPath = path.join(__dirname, '..', 'data', 'pets.json');
const ownersPath = path.join(__dirname, '..', 'data', 'owners.json');

const readAll = (owner_id) => {

  // Read and parse the owners file
  const ownersJSON = fs.readFileSync(ownersPath, 'utf8');
  // console.log(ownersJSON);
  const owners = JSON.parse(ownersJSON);
  console.log(owners);
  console.log(owner_id);

  // Filter owners by the :id
  let filteredOwners = owners.filter(owner => {
    console.log(owner.id);
    return owner.id === owner_id;
  });
  let owner = filteredOwners[0];

  // Read and parse the pets file
  const petsJSON = fs.readFileSync(petsPath, 'utf8');
  const pets = JSON.parse(petsJSON);

  // Map over the owner's pet_id array
  const ownerPets = owner.pet_ids.map( pet_id => {
    // Filter the pets array to capture each pet based on the id in the pet_id array
    const filteredPets = pets.filter( pet => pet.id === pet_id );
    return filteredPets[0];
  });
  return ownerPets;
}

module.exports = {
  readAll
}
