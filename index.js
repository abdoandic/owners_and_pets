const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');

const ownersPath = path.join(__dirname, 'data', 'owners.json');

app.use(express.json()); // Body parser!

app.get('/', (request, response) => {
  response.send('Owners and Pets: Slash route is go.');
});

// Read all
app.get('/owners', (request, response) => {
  fs.readFile(ownersPath, 'utf8', (error, data) => {
    if (error) { console.error(error); } // Not again...
    const owners = JSON.parse(data);
    response.send(owners);
  });
});

app.get('/owners/:id', (request, response) => {});

// Create
app.post('/owners', (request, response) => {
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

app.put('/owners/:id', (request, response) => {});
app.delete('/owners/:id', (request, response) => {});

app.listen( PORT, () => {
  console.log(`Owners and Pets: Listening on port no. ${PORT}...`);
});
