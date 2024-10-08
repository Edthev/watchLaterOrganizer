let clientSecrets = require("../client_secret.json");
const client_id = clientSecrets.web.client_id || null;
const redirect_uri = clientSecrets.web.redirect_uris || null;
const auth_uri = clientSecrets.web.auth_uri || null;
const scope =
   "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner";

const login = (req, res) => {
   console.log("Connect to /login");

   res.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth` +
         `?scope=${scope}` +
         `&access_type=offline` +
         `&include_granted_scopes=true` +
         `&response_type=code` +
         `&prompt=consent` +
         `&state=state_parameter_passthrough_value` +
         `&redirect_uri=${redirect_uri}` +
         `&client_id=${client_id}`
   );
};
module.exports = login;
