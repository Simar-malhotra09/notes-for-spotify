import express from "express";
import querystring from "querystring";
import dotenv from "dotenv";

dotenv.config();
const SPOTIFY_CLIENT_ID = "13404886895443629889f71531bde7ec";
const SPOTIFY_CLIENT_SECRET = "cc2eb67638f1455f8be389e1aa2d94ba";
const SPOTIFY_REDIRECT_URI = "http://localhost:3000/callback";

const router = express.Router();

function generateRandomString(length) {
  let text = "";
  const possibleChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }

  return text;
}

router.get("/", (req, res) => {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";

  const authorizationUrl = `https://accounts.spotify.com/authorize?${querystring.stringify(
    {
      response_type: "code",
      client_id: SPOTIFY_CLIENT_ID,
      scope,
      redirect_uri: SPOTIFY_REDIRECT_URI,
      state,
    }
  )}`;

  res.redirect(authorizationUrl);
});

export default router;
