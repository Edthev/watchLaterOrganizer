const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;
const login = require("./EndpointFunctions/login");

app.get("/", (req, res) => {
   res.send({
      Connection: "Success",
   });
});

app.get("/login", login);

app.listen(port, () => {
   console.log("Connected to Server");
});
