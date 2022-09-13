const express = require('express');

const usersRoutes = express.Router();

usersRoutes.post('/', () => {});

module.exports = {
  usersRoutes,
};
