const { app } = require('./app');
const dotenv = require('dotenv');
const { db } = require('./utils/database');
dotenv.config();

const createServer = () => {
  //server port
  const PORT = process.env.PORT || 3001;

  //database authentication
  db.authenticate()
    .then(() => {
      console.log('Authenticated database');
    })
    .catch((error) => console.log(error));
  db.sync()
    .then(() => console.log('table created in database'))
    .catch((err) => console.log(err));
  app.listen(PORT, () => {
    console.log(`puerto levantado en ${PORT}`);
  });
};
createServer();
