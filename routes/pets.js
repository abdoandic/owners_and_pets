const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');

const petsController = require('../controllers/pets');
const petsPath = path.join(__dirname, '..', 'data', 'pets.json');

// Read all (pets of a single owner)
router.get('/owners/:id', petsController.readAll);

// Read individual
router.get('/:id', (request, response) => {
  response.send('test');
});

// Create
router.post('/', (request, response) => {});

router.put('/:id', (request, response) => {});
router.delete('/:id', (request, response) => {});

module.exports = router;
