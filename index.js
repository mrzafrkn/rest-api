const express = require("express");
const bodyParser = require("body-parser");
const users = require("./router/users");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", users);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
