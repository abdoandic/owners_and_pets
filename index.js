const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const ownerRoutes = require('./routes/owners');

app.use(express.json()); // Body parser!

app.get('/', (request, response) => {
  response.send('Owners and Pets: Slash route is go.');
});

app.use('/owners', ownerRoutes);

app.listen( PORT, () => {
  console.log(`Owners and Pets: Listening on port no. ${PORT}...`);
});
