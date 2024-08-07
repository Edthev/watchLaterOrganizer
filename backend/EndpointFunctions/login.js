let clientSecrets = require("../client_secret.json");
clientSecrets = clientSecrets.web;

const client_id = clientSecrets.client_id || null;
const client_secret = clientSecrets.client_secret || null;
const redirect_uri = clientSecrets.redirect_uris || null;
const auth_uri = clientSecrets.auth_uri || null;
const scope =
   "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtube.force-ssl";

const login = (req, res) => {
   console.log("Connect to /login");
   res.redirect(
      auth_uri +
         "?scope=" +
         scope +
         "&access_type=offline" +
         "&include_granted_scopes=true" +
         "&response_type=code" +
         "&prompt=consent" +
         "&state=state_parameter_passthrough_value" +
         "&redirect_uri=" +
         redirect_uri +
         "&client_id=" +
         client_id
   );
};
module.exports = login;
