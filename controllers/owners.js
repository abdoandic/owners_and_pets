const fs = require('fs');
const path = require('path');
const ownerModel = require('../models/owner');
const ownersPath = path.join(__dirname, '..', 'data', 'owners.json');


const index = (request, response) => {
  console.log('in controller');
  const owners = ownerModel.index();
  response.send( owners );
};

module.exports = {
  index
}
