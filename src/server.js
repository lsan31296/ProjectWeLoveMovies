//require("dotenv").config();//For local, Render will not need it
const { PORT = 5001, NODE_ENV, DATABASE_URL } = process.env;

const app = require("./app");
const knex = require("./db/connection");

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    //console.log("NODE_ENV =", NODE_ENV);
    //console.log("DATABASE_URL =", DATABASE_URL);
    app.listen(PORT, listener);
  })
  .catch(console.error);
