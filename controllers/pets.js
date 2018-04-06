const fs = require('fs');
const path = require('path');

const petModel = require('../models/pet');
const petsPath = path.join(__dirname, '..', 'data', 'pets.json');

const readAll = (request, response) => {
  const pets = petModel.readAll(request.params.id);
  response.send(pets);
}

module.exports = {
  readAll
}
