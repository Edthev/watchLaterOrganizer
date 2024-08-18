const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;
const login = require("./EndpointFunctions/login");
const authenticated = require("./EndpointFunctions/authenticated");

app.get("/", (req, res) => {
   res.send({
      Connection: "Success",
   });
});

app.get("/login", login);

app.get("/authenticated", authenticated);

app.listen(port, () => {
   console.log("Connected to Server");
});
