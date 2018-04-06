const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

app.get('/', (request, response) => {
  response.send('Owners and Pets: Slash route is go.');
});

app.get('/owners', (request, response) => {});
app.get('/owners/:id', (request, response) => {});
app.post('/owners', (request, response) => {});
app.put('/owners/:id', (request, response) => {});
app.delete('/owners/:id', (request, response) => {});

app.listen( PORT, () => {
  console.log(`Owners and Pets: Listening on port no. ${PORT}...`);
});
