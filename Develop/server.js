const express = require('express');
const routes = require('./routes');
// import sequelize connection

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// Sync sequelize models to the database
sequelize.sync({ force: false }).then(() => {
  // Set force to true if you want to drop and recreate tables on every restart
  // Now, turn on the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});