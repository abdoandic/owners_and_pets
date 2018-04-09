const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');

const ownersController = require('../controllers/owners');
const ownersPath = path.join(__dirname, '..', 'data', 'owners.json');

// Read all
router.get('/', ownersController.readAll);

// Read individual
router.get('/:id', ownersController.readIndividual);

// Create
router.post('/', (request, response) => {
  console.log(request.body);
  const newOwner = {
    id: uuid(),
    name: request.body.name,
    address: request.body.address,
    pet_ids: []
  };
  fs.readFile(ownersPath, 'utf8', (error, data) => {

    if (error) { console.error(error); } // Come on.

    let ownersArray = JSON.parse(data);
    ownersArray.push(newOwner);
    ownersArrayJSON = JSON.stringify(ownersArray);

    fs.writeFile(ownersPath, ownersArrayJSON, error => {
      if (error) { console.error(error); } // Oy oy oy
      response.send(newOwner);
    });

  });
});

router.put('/:id', (request, response) => {});
router.delete('/:id', (request, response) => {});

module.exports = router;
