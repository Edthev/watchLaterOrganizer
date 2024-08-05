const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;

const googleApi = "https://www.googleapis.com/youtube/v3/";

const fetchPlaylists = async () => {
   try {
      const res = await axios
         .get("https://www.googleapis.com/youtube/v3/playlists", {
            params: {
               part: "snippet",
               mine: true,
               key: "AIzaSyAp3HayKNaKonG5mbmC5Up2q5CCLxl8oPI",
            },
         })
         .then((res) => {
            console.log(res.data);
         });
   } catch (err) {
      console.error("Err:", err);
   }
};

app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.listen(port, () => {
   console.log("Connected to Server");
   fetchPlaylists();
});
