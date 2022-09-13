console.clear();
const express = require('express');
const { usersRoutes } = require('./router/users.routes');

const app = express();
//middleware
app.use(express.json());

//endpointsbasis
app.use('/api/v1/users', usersRoutes);

module.exports = {
  app,
};
