let clientSecrets = require("../client_secret.json");
const axios = require("axios");
const qs = require("qs");
const client_id = clientSecrets.web.client_id || null;
const redirect_uri = clientSecrets.web.redirect_uris || null;
const auth_uri = clientSecrets.web.auth_uri || null;
const scope =
   "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner";

const Authenticated = async (req, res) => {
   console.log("Connect to /authenticated");
   const url = "https://oauth2.googleapis.com/token";
   const code = req.query.code;
   console.log("code", code);
   const options = {
      code: code,
      client_id: clientSecrets.web.client_id,
      client_secret: clientSecrets.web.client_secret,
      redirect_uri: clientSecrets.web.redirect_uris,
      grant_type: "authorization_code",
   };
   try {
      const res = await axios.post(url, qs.stringify(options), {
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
      });
      const { refresh_token, access_token, expires_in } = response.data;
      console.log("access_token", access_token);
   } catch (err) {
      console.error("Err:", err);
   }
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
module.exports = Authenticated;
